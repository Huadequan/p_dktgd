import { LTLocalData } from "./LTLocalData";
import StringEx from "../LTUtils/StringEx";
import LTPlatform from "../Platform/LTPlatform";
import { EPlatformType } from "../Platform/EPlatformType";
import { XXTEA } from "../LTUtils/XXTEA";

class SaveData {

    public ids: number[] = [];
    public unlockStates: number[] = [];
    public progressStates: number[] = [];

}

export class LTSaveData {

    private _saveName: string;

    private _saveData: SaveData;

    constructor(saveName: string) {
        this._saveName = saveName;
        this._ReadFromDisk();
    }

    private _ReadFromDisk() {
        let readStr = LTLocalData.instance.GetStr(this._saveName);
        this._saveData = new SaveData();
        if (StringEx.IsNullOrEmpty(readStr)) {
            this._SaveData();
        } else {

            if (LTPlatform.instance.platform != EPlatformType.Web) {
                // 解密
                readStr = XXTEA.decryptFromBase64(readStr, "ltg");
            }

            let jsonData = JSON.parse(readStr);
            for (let key in jsonData) {
                this._saveData[key] = jsonData[key];
            }
        }
    }

    private _SaveData() {
        let json = JSON.stringify(this._saveData);
        if (LTPlatform.instance.platform != EPlatformType.Web) {
            // 进行加密
            json = XXTEA.encryptToBase64(json, "ltg");
        }
        LTLocalData.instance.SetStr(this._saveName, json);
    }

    public IsUnlocked(id: number): boolean {
        let idIndex = this._saveData.ids.indexOf(id);
        if (idIndex < 0) {
            return false;
        }
        return this._saveData.unlockStates[idIndex] == 1;
    }

    public GetProgress(id: number): number {
        let idIndex = this._saveData.ids.indexOf(id);
        if (idIndex < 0) {
            return 0;
        }
        return this._saveData.progressStates[idIndex];
    }

    public AddProgress(id: number, addValue = 1): number {
        let idIndex = this._SearchAndAdd(id);
        this._saveData.progressStates[idIndex] += addValue;

        this._SaveData();

        return this._saveData.progressStates[idIndex];
    }

    public Unlock(id: number) {
        let idIndex = this._SearchAndAdd(id);
        this._saveData.unlockStates[idIndex] = 1;

        this._SaveData();
    }

    private _SearchAndAdd(id: number): number {
        let idIndex = this._saveData.ids.indexOf(id)
        if (idIndex < 0) {
            this._saveData.ids.push(id);
            this._saveData.unlockStates.push(0);
            this._saveData.progressStates.push(0);
            return this._saveData.ids.length - 1;
        }
        return idIndex;
    }

}