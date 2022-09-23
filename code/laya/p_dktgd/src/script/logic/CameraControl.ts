import GlobalUnit from "../common/GlobalUnit";

export default class CameraControl {
    private _rootObj: Laya.Sprite3D;
    public camera: Laya.Camera;
    public InitCamera (root: Laya.Sprite3D){
        this._rootObj = root;

        this.camera = root.getChildAt(0) as Laya.Camera;
    }

    protected followPlayer() {
        let old = this._rootObj.transform.position;
        let target = GlobalUnit.game.player.originPos;
        old.x = target.x;
        old.y = target.y;
        this._rootObj.transform.position = old;
    }

    public LateUpdate () {
        this.followPlayer();
    }
}