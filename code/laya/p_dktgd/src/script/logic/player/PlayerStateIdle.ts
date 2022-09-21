import { UI_FightMediator } from "../../ui/UI_FightMediator";
import { EPlayerState } from "./EPlayerState";
import PlayerBaseState from "./PlayerBaseState";
import ViewPlayer from "./ViewPlayer";

export default class PlayerStateIdle extends PlayerBaseState {
    constructor(owner: ViewPlayer) {
        super(owner, EPlayerState.Idle);
    }

    protected _DoEnter(exitStte: any, param: any): void {
        this.owner.PlayAnim(0);
    }

    protected _DoRunning(param: any): void {
        if (UI_FightMediator.instance.CmpJoy.isPressed) {
            this.owner.fsm.ChangeState(EPlayerState.Move);
        }
    }
} 