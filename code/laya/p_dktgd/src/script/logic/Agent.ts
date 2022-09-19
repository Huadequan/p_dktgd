import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import AnimComponent from "../common/AnimComponent";
import GlobalUnit from "../common/GlobalUnit";
import { AnimFrameConfig } from "../config/AnimFrameConfig";
import AgentManager from "../manager/AgentManager";

export default class Agent {
    protected root: Laya.Sprite3D;
    protected skin: Laya.MeshSprite3D;
    public animCmp: AnimComponent;
    public layerIndex: number;
    protected layerObj: Laya.Sprite3D;
    public dirVec: Laya.Vector2;
    public linearVelocity: number;
    public get depth() : number {
        return this.layerObj.transform.position.y;
    }
    
    constructor() {
        this.layerIndex = 1;
        this.dirVec = new Laya.Vector2();
        this.linearVelocity = 0;
    }

    protected Inited(id: number) {
        let config = AnimFrameConfig.data[id];
        this.animCmp = new AnimComponent(this.skin, config);
        this.skin.addComponentIntance(this.animCmp);
        GlobalUnit.game.level.layerObj.addChild(this.root);

        AgentManager.instance.PushModel(this);
    }

    public OnUpdate(dt: number) {
        if (this.root.destroyed) return;
        this.DoUpdate(dt);
    }

    protected DoUpdate(dt: number) {

    }
}