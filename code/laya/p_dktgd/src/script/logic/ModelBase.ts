import AnimComponent from "../common/AnimComponent";
import GlobalUnit from "../common/GlobalUnit";
import { AnimFrameConfig } from "../config/AnimFrameConfig";
import LayerMgr from "../manager/LayerMgr";
import { Agent } from "./rvo/Agent";

import RVOHelper from "./rvo/RVOHelper";

export default class ModelBase {
    protected root: Laya.Sprite3D;
    protected skin: Laya.MeshSprite3D;
    public animCmp: AnimComponent;
    public layerIndex: number;
  
    public agent: Agent;
    public colliderOffset: Laya.Vector2;
    protected colliderObj: Laya.Sprite3D;
    public get depth() : number {
        return this.root.transform.position.y;
    }

    public get originPos(): Laya.Vector3 {
        return this.colliderObj.transform.position;
    }
    
    constructor() {
        this.layerIndex = 0;   
    }

    protected Inited(id: number) {
        LayerMgr.instance.PushModel(this);
        this.colliderOffset = new Laya.Vector2();
        let localPos = this.colliderObj.transform.localPosition;
        this.colliderOffset.setValue(localPos.x, localPos.y);
        let config = AnimFrameConfig.data[id];
        this.skin.meshRenderer.sharedMaterial = this.skin.meshRenderer.sharedMaterial.clone();
        this.animCmp = new AnimComponent(this.skin, config);
        this.skin.addComponentIntance(this.animCmp);
    }

    public OnUpdate(dt: number) {
        if (this.root.destroyed) return;
        // this.UpdateDepth();
        this.DoUpdate(dt);
    }

    protected CreateAgent() {
        this.agent = RVOHelper.instance.CreateAgent(this.colliderObj);
    }

    public UpdateDepth() {
        this.root.transform.localPositionZ = -0.2 * this.layerIndex;
    }

    protected DoUpdate(dt: number) {

    }
}