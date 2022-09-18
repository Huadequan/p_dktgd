import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import AnimComponent from "../common/AnimComponent";
import { AnimFrameConfig } from "../config/AnimFrameConfig";
import LayerManager from "../manager/LayerManager";

export default class ModelBase {
    protected root: Laya.Sprite3D;
    protected skin: Laya.MeshSprite3D;
    public animCmp: AnimComponent;
    public layerIndex: number;
    
    public get depth() : number {
        return this.root.transform.position.y;
    }
    
    constructor() {
        this.layerIndex = 1;
        LayerManager.instance.PushModel(this);
    }

    protected InitSkinId(id: number) {
        let config = AnimFrameConfig.data[id];
        this.animCmp = new AnimComponent(this.skin, config);
        this.skin.addComponentIntance(this.animCmp);
    }
}