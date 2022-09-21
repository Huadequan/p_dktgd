import { EPlayerState } from "./EPlayerState";
import PlayerBaseState from "./PlayerBaseState";
import ViewPlayer from "./ViewPlayer";

export default class PlayerStateDead extends PlayerBaseState {
    constructor(owner: ViewPlayer) {
        super(owner, EPlayerState.Dead);
    }

    protected _DoEnter(exitStte: any, param: any): void {
        this.owner.PlayAnim(2, false, null);
    }
} 