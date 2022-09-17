import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import GameData from "../common/GameData";
import ViewLevel from "../logic/level/ViewLevel";

export default class GameManager {
    level: ViewLevel;

    constructor() {
        this.level = new ViewLevel();
        this.level.SetLevelId(GameData.instance.levelId);
        

        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
        MonoHelper.instance.AddAction(EActionType.LateUpdate, this, this._LateUpdate);
    }

    public PreLoad(urls: string[]) {
        this.level.PreLoad(urls);
    }

    public CreateGame() {
        this.level.CreateLevel();
    }

    private _LogicUpdate(dt: number): void {

    }

    private _LateUpdate(dt: number) {

    }
}