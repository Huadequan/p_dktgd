import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import AnimComponent from "../common/AnimComponent";
import GlobalUnit from "../common/GlobalUnit";
import { AnimFrameConfig } from "../config/AnimFrameConfig";
import LayerManager from "../manager/LayerManager";

export default class ModelBase {
    protected root: Laya.Sprite3D;
    protected skin: Laya.MeshSprite3D;
    public animCmp: AnimComponent;
    public layerIndex: number;
    protected layerObj: Laya.Sprite3D;
    public get depth() : number {
        return this.layerObj.transform.position.y;
    }
    
    constructor() {
        this.layerIndex = 1;
    }

    protected Inited(id: number) {
        let config = AnimFrameConfig.data[id];
        this.animCmp = new AnimComponent(this.skin, config);
        this.skin.addComponentIntance(this.animCmp);
        GlobalUnit.game.level.layerObj.addChild(this.root);

        LayerManager.instance.PushModel(this);
    }
}