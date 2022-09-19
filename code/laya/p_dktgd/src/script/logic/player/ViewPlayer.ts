import { LTUtils } from "../../../LTGame/LTUtils/LTUtils";
import { TransformEx } from "../../../LTGame/LTUtils/TransformEx";
import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import ResDefine from "../../common/ResDefine";
import { PlayerConfig } from "../../config/PlayerConfig";
import { UI_FightMediator } from "../../ui/UI_FightMediator";
import Agent from "../Agent";

export default class ViewPlayer extends Agent{
    protected config: PlayerConfig.config;
    
    public get pos(): Laya.Vector3 {
        return this.root.transform.position;
    }
    
    public SetPlayerId(id: number) {
        this.config = PlayerConfig.data[id];
    }

    public PreLoad(urls: string[]) {
        urls.push(ResDefine.FixPath(this.config.model_path));
    }

    public CreatePlayer(point: Laya.Sprite3D) {
        this.root = LTRes.Get(ResDefine.FixPath(this.config.model_path));
        this.skin = LTUtils.FindChild(this.root, this.config.skin_path) as Laya.MeshSprite3D;
        this.layerObj = this.root.getChildByName("__layerSign__") as Laya.Sprite3D;  
        TransformEx.CopyTrans(this.root.transform, point.transform);
        this.Inited(this.config.id);
    }

    protected DoMove(dt) {
        let CmpJoy = UI_FightMediator.instance.CmpJoy;
        this.dirVec = CmpJoy.dirVec2;
        this.linearVelocity = this.config.move_speed * dt;

        this.pos.x -= this.dirVec.x * this.linearVelocity;
        this.pos.y -= this.dirVec.y * this.linearVelocity;

        this.root.transform.position = this.pos;
    }

    protected UpdateActor() {
        if (this.dirVec.x > 0) {
            this.root.transform.localScaleX = 1;
        } else if (this.dirVec.x < 0) {
            this.root.transform.localScaleX = -1;
        }
    }

    protected DoUpdate(dt: number): void {
        if(UI_FightMediator.instance.CmpJoy.isPressed) {
            this.DoMove(dt);
        } else {
            this.linearVelocity = 0;
        }

        this.UpdateActor();
    }
}