import Vector2Ex from "../../LTUtils/Vector2Ex";

export class CmpJoystick {

    private _isPressed: boolean;
    private _cacheTouchId: number;
    private _isDragged: boolean;

    private _imgHandleBg: fgui.GObject;
    private _imgHandleFront: fgui.GObject;
    public dirVec2: Laya.Vector2;
    private _cacheVec2: Laya.Vector2;
    private _imgBg: fgui.GObject;

    public radius: number;

    public get isPressed(): boolean {
        return this._isPressed;
    }

    public get isDragged(): boolean {
        return this._isDragged;
    }

    constructor(imgBg: fgui.GObject, handleBg: fgui.GObject, handleFront: fgui.GObject) {
        this._imgBg = imgBg;
        this._imgHandleBg = handleBg;
        this._imgHandleFront = handleFront;

        this.dirVec2 = new Laya.Vector2();
        this._cacheVec2 = new Laya.Vector2();

        this._isPressed = false;
        this._isDragged = false;
        this.radius = this._imgHandleBg.width / 2;

        this._imgBg.on(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        Laya.stage.on(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);

        this._ResetPos();
    }

    private _ResetPos() {
        let x = Laya.stage.width / 2;
        let y = Laya.stage.height / 2 + 400;
        this._imgHandleBg.setXY(x, y);
        this._SetHandlePos(0,0);
    }

    private _OnMouseDown(event: Laya.Event) {
        if (this.isPressed) return;
        this._isPressed = true;
        this._cacheTouchId = event.touchId;

        this._imgHandleBg.setXY(event.stageX, event.stageY);
 
        this._isDragged = false;

        // this._imgHandleBg.visible = true;
        // this._imgHandleFront.visible = true;
    }

    private _OnMouseMove(event: Laya.Event) {
        if (!this.isPressed) return;
        if (this._cacheTouchId != event.touchId) return;

        this._cacheVec2.setValue(event.stageX - this._imgHandleBg.x,
            event.stageY - this._imgHandleBg.y);
       
        let distance = Vector2Ex.Magnitude(this._cacheVec2);

        Laya.Vector2.normalize(this._cacheVec2, this.dirVec2);

        if (distance > this.radius) {
            Laya.Vector2.scale(this.dirVec2, this.radius, this._cacheVec2);
        }

        this._SetHandlePos(this._cacheVec2.x, this._cacheVec2.y)
        if (distance > 0) {
            this._isDragged = true;
        }
    }

    private _SetHandlePos(x: number, y: number) {
        this._imgHandleFront.setXY(x + this._imgHandleBg.width / 2, y + this._imgHandleBg.height / 2);
    }

    private _OnMouseUp(event: Laya.Event) {
        if (!this.isPressed) return;
        if (this._cacheTouchId != event.touchId) return;
        this._isPressed = false;
        this._isDragged = false;

        this._ResetPos();
    }

    public Dispose() {
        this._imgBg.off(Laya.Event.MOUSE_DOWN, this, this._OnMouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this._OnMouseMove);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this._OnMouseUp);
        Laya.stage.off(Laya.Event.MOUSE_OUT, this, this._OnMouseUp);
    }

}