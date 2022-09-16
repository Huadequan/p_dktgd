import MonoHelper, { EActionType } from "../../LTGame/LTUtils/MonoHelper";

export default class GameManager {
    constructor() {
        MonoHelper.instance.AddAction(EActionType.Update, this, this._LogicUpdate);
        MonoHelper.instance.AddAction(EActionType.LateUpdate, this, this._LateUpdate);
    }

    private _LogicUpdate(dt: number): void {

    }

    private _LateUpdate(dt: number) {

    }
}