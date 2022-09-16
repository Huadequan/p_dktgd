import MonoHelper, { EActionType } from "../../../LTGame/LTUtils/MonoHelper";
import Vector2Ex from "../../../LTGame/LTUtils/Vector2Ex";

export class CmpDragHandle {

    public isPressed: boolean;
    public dragVec: Laya.Vector2;
    private _lastPos: Laya.Vector2;
    private _currentPos: Laya.Vector2;

    public get currentPos(): Laya.Vector2 {
        return this._currentPos;
    }

    private _cacheTouchId: number;

    public ui: fgui.GObject;

    constructor(ui: fgui.GObject) {
        this.ui = ui;

        this.isPressed = false;
        this.dragVec = new Laya.Vector2(0, 0);
        this._lastPos = new Laya.Vector2(0, 0);
        this._currentPos = new Laya.Vector2(0, 0);

        this.ui.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        MonoHelper.instance.AddAction(EActionType.Update, this, this._OnLogicUpdate);
    }

    public Dispose() {
        MonoHelper.instance.RemoveAction(EActionType.Update, this, this._OnLogicUpdate);
        this.ui.off(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
    }

    public TransPress(event: Laya.Event) {
        this._OnMouseDown(event);
    }

    private _OnMouseDown(event: Laya.Event) {
        if (this.isPressed) return;
        this.isPressed = true;
        this._cacheTouchId = event.touchId;
        this.dragVec.setValue(0, 0);
        this._lastPos.setValue(event.stageX, event.stageY);
        this._currentPos.setValue(event.stageX, event.stageY);
    }

    private _OnMouseMove(event: Laya.Event) {
        if (!this.isPressed) return;
        if (this._cacheTouchId != event.touchId) return;
        this._currentPos.setValue(event.stageX, event.stageY);
    }

    private _OnMouseUp(event: Laya.Event) {
        if (!this.isPressed) return;
        if (this._cacheTouchId != event.touchId) return;
        this.isPressed = false;
    }

    private _OnLogicUpdate(dt: number) {
        if (this.isPressed) {
            if (!Vector2Ex.IsSame(this._lastPos, this._currentPos)) {
                this.dragVec.setValue(this._currentPos.x - this._lastPos.x, this._currentPos.y - this._lastPos.y);
                this._lastPos.setValue(this._currentPos.x, this._currentPos.y);
            } else {
                this.dragVec.setValue(0, 0);
            }
        }
    }

}