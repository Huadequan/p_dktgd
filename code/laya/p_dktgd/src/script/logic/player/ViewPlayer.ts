import BaseState from "../../../LTGame/Fsm/BaseState";
import StateMachine from "../../../LTGame/Fsm/StateMachine";
import { LTUtils } from "../../../LTGame/LTUtils/LTUtils";
import { TransformEx } from "../../../LTGame/LTUtils/TransformEx";
import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import ResDefine from "../../common/ResDefine";
import { PlayerConfig } from "../../config/PlayerConfig";
import { UI_FightMediator } from "../../ui/UI_FightMediator";
import ModelBase from "../ModelBase";
import { EPlayerState } from "./EPlayerState";
import PlayerBaseState from "./PlayerBaseState";
import PlayerStateDead from "./PlayerStateDead";
import PlayerStateIdle from "./PlayerStateIdle";
import PlayerStateMove from "./PlayerStateMove";

export default class ViewPlayer extends ModelBase{
    protected config: PlayerConfig.config;
    public dirVec: Laya.Vector2;
    public linearVelocity: number;
    private _fsm: StateMachine<PlayerBaseState>;
    
    public get fsm() : StateMachine<PlayerBaseState> {
        return this._fsm;
    }
    
    public SetPlayerId(id: number) {
        this.config = PlayerConfig.data[id];
    }

    public PreLoad(urls: string[]) {
        urls.push(ResDefine.FixPath(this.config.model_path));
    }

    public CreatePlayer(point: Laya.Sprite3D) {
        this.root = LTRes.Get(ResDefine.FixPath(this.config.model_path));
        GlobalUnit.game.level.layerObj.addChild(this.root);
        this.skin = LTUtils.FindChild(this.root, this.config.skin_path) as Laya.MeshSprite3D;
        this.colliderObj = this.root.getChildByName("colliders") as Laya.Sprite3D;
        TransformEx.CopyTrans(this.root.transform, point.transform);
        this.Inited(this.config.anim_id);

        this._InitState();
    }

    private _InitState() {
        this.dirVec = new Laya.Vector2();
        this.linearVelocity = 0;

        this._fsm = new StateMachine<PlayerBaseState>();
        this._fsm.Add(new PlayerStateIdle(this));
        this._fsm.Add(new PlayerStateMove(this));
        this._fsm.Add(new PlayerStateDead(this));

        this._fsm.ChangeState(EPlayerState.Idle);
    }

    public DoMove(dt) {
        let CmpJoy = UI_FightMediator.instance.CmpJoy;
        this.dirVec = CmpJoy.dirVec2;
        this.linearVelocity = this.config.move_speed * dt;
        this.root.transform.position.x -= this.dirVec.x * this.linearVelocity;
        this.root.transform.position.y -= this.dirVec.y * this.linearVelocity;

        this.root.transform.position = this.root.transform.position;
        this.UpdateActor();
    }

    protected UpdateActor() {
        if (this.dirVec.x > 0) {
            this.root.transform.localScaleX = 1;
        } else if (this.dirVec.x < 0) {
            this.root.transform.localScaleX = -1;
        }
    }

    public PlayAnim(index: number, isLoop: boolean = true, complete: Laya.Handler = null) {
        this.animCmp.play(index,isLoop,complete);
    }

    protected DoUpdate(dt: number): void {
        this._fsm.LogicUpdate(dt);
    }
}