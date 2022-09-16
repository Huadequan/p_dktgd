import LTPlatform from "../Platform/LTPlatform";
import { EPlatformType } from "../Platform/EPlatformType";
import StringEx from "../LTUtils/StringEx";
import { XXTEA } from "../LTUtils/XXTEA";

export class LTLocalData {

    private static _instance: LTLocalData;

    public static get instance(): LTLocalData {
        if (this._instance == null) {
            this._instance = new LTLocalData();
        }
        return this._instance;
    }

    private _encryptKey: string;

    private constructor() {
        this._encryptKey = "ltg";
    }

    public GetStr(key: string): string {
        let readStr = Laya.LocalStorage.getJSON(key);
        if (StringEx.IsNullOrEmpty(readStr)) return null;

        if (LTPlatform.instance.platform == EPlatformType.Web) {
            return readStr;
        } else {
            return XXTEA.decryptFromBase64(readStr, this._encryptKey);
        }
    }

    public SetStr(key: string, str: string) {
        if (LTPlatform.instance.platform != EPlatformType.Web) {
            str = XXTEA.encryptToBase64(str, this._encryptKey);
        }
        Laya.LocalStorage.setJSON(key, str);
    }

}