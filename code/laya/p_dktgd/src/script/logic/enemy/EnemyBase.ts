import { LTUtils } from "../../../LTGame/LTUtils/LTUtils";
import MathEx from "../../../LTGame/LTUtils/MathEx";
import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import LayerDefine from "../../common/LayerDefine";
import ResDefine from "../../common/ResDefine";
import { EnemyConfig } from "../../config/EnemyConfig";
import { EMoveType, RefreshData, ERefreshType } from "../level/ViewLevel";
import ModelBase from "../ModelBase";
import { Vector2 } from "../rvo/Vector2";


export default class EnemyBase extends ModelBase  {
    protected config: EnemyConfig.config;
    protected refreshData: RefreshData;
    protected cachePos: Vector2;
    constructor(config: EnemyConfig.config, data: RefreshData) {
        super();
        this.config = config;
        this.refreshData = data;
        this.CreateModel();
        this.InitAgent();
    }

    public InitAgent() {
        this.CreateAgent();
        this.cachePos = new Vector2(0,0);
        
    }

    public CreateModel() {
        this.root = LTRes.Get(ResDefine.FixPath(this.config.model_path));
        GlobalUnit.game.level.layerObj.addChild(this.root);
        this.colliderObj = this.root.getChildByName("colliders") as Laya.Sprite3D;
        this.skin = LTUtils.FindChild(this.root, this.config.skin_path) as Laya.MeshSprite3D;
        this.Inited(this.config.anim_id);
    }

    public SetPos(x: number, y: number) {
        this.agent.position_.setXY(x, y);
        this.SyncPos();
    }

    public UpdateMoveParames(dt: number) {
        let sprite = new Laya.Sprite();

        sprite.customRender

        let type = this.refreshData.moveType;
        this.agent.maxSpeed_ = this.config.move_speed * dt;
        
        switch(type) {
            case EMoveType.ToPlayer:
                let pos = GlobalUnit.game.player.originPos;
                this.cachePos.setXY(pos.x, pos.y);
                let goal = this.cachePos.moins(this.agent.position_);
                let dist = Vector2.absSq(goal);
                this.agent.maxSpeed_*= MathEx.Clamp01(dist);

                this.cachePos = Vector2.normalize(goal);
                this.agent.prefVelocity_.setXY(this.cachePos.x, this.cachePos.y);
                break;
            case EMoveType.ToVec2:
                let moveParams = this.refreshData.moveParams;
                this.cachePos.setXY(moveParams[0], moveParams[1]);
                this.cachePos = Vector2.normalize(this.cachePos);
                this.agent.prefVelocity_.setXY(this.cachePos.x, this.cachePos.y);
                break;
        }
    }

    public SyncPos() {
        let old = this.root.transform.position;
        let newPos = this.agent.position_;

        this.root.transform.localScaleX = this.cachePos.x > 0 ? -1 : 1;
        old.x = newPos.x + this.colliderOffset.x;
        old.y = newPos.y - this.colliderOffset.y;

        this.root.transform.position = old;
    }

    protected DoUpdate(dt: number): void {
        this.SyncPos();    
        this.UpdateMoveParames(dt);
    }
}