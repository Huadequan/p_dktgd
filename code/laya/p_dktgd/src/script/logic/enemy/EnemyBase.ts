import { LTUtils } from "../../../LTGame/LTUtils/LTUtils";
import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import LayerDefine from "../../common/LayerDefine";
import ResDefine from "../../common/ResDefine";
import { EnemyConfig } from "../../config/EnemyConfig";
import { EMoveType, RefreshData, ERefreshType } from "../level/ViewLevel";
import ModelBase from "../ModelBase";
import RVOMath from "../rvo/RVOMath";
import Vector2D from "../rvo/Vector2D";

export default class EnemyBase extends ModelBase  {
    protected config: EnemyConfig.config;
    protected refreshData: RefreshData;

    constructor(config: EnemyConfig.config, data: RefreshData) {
        super();
        this.config = config;
        this.refreshData = data;
        this.CreateModel();
        this.InitAgent();
    }

    public InitAgent() {
        this.CreateAgent();
        this.agent.maxSpeed = this.config.move_speed;
        this.agent.colliderGroup = LayerDefine.enemy;
        this.agent.colliderMask = LayerDefine.obstacle;
    }

    public CreateModel() {
        this.root = LTRes.Get(ResDefine.FixPath(this.config.model_path));
        GlobalUnit.game.level.layerObj.addChild(this.root);
        this.colliderObj = this.root.getChildByName("colliders") as Laya.Sprite3D;
        this.skin = LTUtils.FindChild(this.root, this.config.skin_path) as Laya.MeshSprite3D;
        this.Inited(this.config.anim_id);
    }

    public SetPos(x: number, y: number) {
        this.agent.position.setXY(x, y);
        this.SyncPos();
    }

    public UpdateMoveParames(dt: number) {
        let type = this.refreshData.moveType;
       
        switch(type) {
            case EMoveType.ToPlayer:
                let pos = GlobalUnit.game.player.originPos;
                let goal = Vector2D.cacheVec2;
                goal.setXY(pos.x, pos.y);
                let v = RVOMath.normalize(goal.minus(this.agent.position));
                this.agent.prefVelocity.setXY(v.x, v.y);
                break;
        }
    }

    public SyncPos() {
        let old = this.root.transform.position;
        let newPos = this.agent.position;
        this.root.transform.localScaleX = newPos.x > old.x ? -1 : 1;
        old.x = newPos.x + this.colliderOffset.x;
        old.y = newPos.y - this.colliderOffset.y;

        this.root.transform.position = old;
    }

    protected DoUpdate(dt: number): void {
        this.SyncPos();    
        this.UpdateMoveParames(dt);
    }
}