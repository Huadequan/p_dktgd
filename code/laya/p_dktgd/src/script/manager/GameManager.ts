import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import { EGameState } from "../common/EGameState";
import GameData from "../common/GameData";
import CameraControl from "../logic/CameraControl";
import ViewLevel from "../logic/level/ViewLevel";
import ViewPlayer from "../logic/player/ViewPlayer";
import { UI_FightMediator } from "../ui/UI_FightMediator";
import { UI_MainMediator } from "../ui/UI_MainMediator";
import LayerManager from "./LayerManager";

export default class GameManager {
    level: ViewLevel;
    player: ViewPlayer;
    camera: CameraControl;
    state: EGameState;
    constructor() {
        this.level = new ViewLevel();
        this.player = new ViewPlayer();
        this.camera = new CameraControl();
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
        this.state = EGameState.Ready;
        LayerManager.instance.InitLayer();
        this.level.CreateLevel();
    }

    public StartGame() {
        UI_MainMediator.instance.Hide();
        UI_FightMediator.instance.Show();
        this.state = EGameState.Fight;
    }

    private _LogicUpdate(dt: number): void {
        switch(this.state) {
            case EGameState.Ready:
                break;
            case EGameState.Fight:

                this.player.OnUpdate(dt);
                break;
        }
    }

    private _LateUpdate(dt: number) {
        switch(this.state) {
            case EGameState.Ready:
                break;
            case EGameState.Fight:
                this.camera.LateUpdate();
                break;
        }
    }
}