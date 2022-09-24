import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";
import { EGameState } from "../common/EGameState";
import GameData from "../common/GameData";
import CameraControl from "../logic/CameraControl";
import ViewLevel from "../logic/level/ViewLevel";
import MapControl from "../logic/MapControl";
import ViewPlayer from "../logic/player/ViewPlayer";
import RVOHelper from "../logic/rvo/RVOHelper";
import { UI_FightMediator } from "../ui/UI_FightMediator";
import { UI_MainMediator } from "../ui/UI_MainMediator";
import LayerMgr from "./LayerMgr";

export default class GameManager {
    public level: ViewLevel;
    public player: ViewPlayer;
    public camera: CameraControl;
    public state: EGameState;
    public map: MapControl;
    private _pause: boolean = false;
    public time: number;
    public get pause() : boolean {
        return this._pause;
    }
    
    public set pause(v : boolean) {
        this._pause = v;
    }
    
    constructor() {
        this.level = new ViewLevel();
        this.player = new ViewPlayer();
        this.camera = new CameraControl();
        this.map = new MapControl();

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
        RVOHelper.instance.InitRVO();
        LayerMgr.instance.InitLayer();
        this.level.CreateLevel();
        this.time = 0;
    }

    public StartGame() {
        UI_MainMediator.instance.Hide();
        UI_FightMediator.instance.Show();
        this.state = EGameState.Fight;
    }

    private _LogicUpdate(dt: number): void {
        if (this.pause) return;
        this.time += dt;
        switch(this.state) {
            case EGameState.Ready:
                break;
            case EGameState.Fight:
                RVOHelper.instance.Step(dt);
                this.player.OnUpdate(dt);
                this.map.UpdateMap();
                this.level.LogicUpdate(dt);
                LayerMgr.instance.OnUpdate(dt);
                break;
        }
    }

    private _LateUpdate(dt: number) {
        if (this.pause) return;
        switch(this.state) {
            case EGameState.Ready:
                break;
            case EGameState.Fight:
                this.camera.LateUpdate();
                break;
        }
    }
}