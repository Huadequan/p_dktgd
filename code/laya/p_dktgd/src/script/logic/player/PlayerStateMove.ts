import { UI_FightMediator } from "../../ui/UI_FightMediator";
import { EPlayerState } from "./EPlayerState";
import PlayerBaseState from "./PlayerBaseState";
import ViewPlayer from "./ViewPlayer";

export default class PlayerStateMove extends PlayerBaseState {
    constructor(owner: ViewPlayer) {
        super(owner, EPlayerState.Move);
    }

    protected _DoEnter(exitStte: any, param: any): void {
        this.owner.PlayAnim(1);
    }

    protected _DoRunning(param: any): void {
        if (!UI_FightMediator.instance.CmpJoy.isPressed) {
            this.owner.fsm.ChangeState(EPlayerState.Idle);
            return;
        }
        this.owner.DoMove(this.deltaTime);
    }
} 