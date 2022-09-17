import AnimComponent from "../../common/AnimComponent";
import { AnimFrameConfig } from "../../config/AnimFrameConfig";

export default class ModelBase {
    protected root: Laya.Sprite3D;
    protected skin: Laya.MeshSprite3D;
    public animCmp: AnimComponent;
    private _layerIndex: number;
    constructor() {
        
        this._layerIndex = 1;
    }

    private InitSkinId(id: number) {
        let config = AnimFrameConfig.data[id];
        // this.animCmp = new AnimComponent()
    }
}