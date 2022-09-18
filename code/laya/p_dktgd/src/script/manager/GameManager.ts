import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import GameData from "../common/GameData";
import ViewLevel from "../logic/level/ViewLevel";
import ViewPlayer from "../logic/player/ViewPlayer";
import LayerManager from "./LayerManager";

export default class GameManager {
    level: ViewLevel;
    player: ViewPlayer;
    constructor() {
        this.level = new ViewLevel();
        this.player = new ViewPlayer();
        this.level.SetLevelId(GameData.instance.levelId);
        this.player.SetPlayerId(GameData.instance.playerId);

        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
        MonoHelper.instance.AddAction(EActionType.LateUpdate, this, this._LateUpdate);
    }

    public PreLoad(urls: string[]) {
        this.level.PreLoad(urls);
        this.player.PreLoad(urls);
    }

    public CreateGame() {
        LayerManager.instance.InitLayer();
        this.level.CreateLevel();
    }

    private _LogicUpdate(dt: number): void {

    }

    private _LateUpdate(dt: number) {

    }
}