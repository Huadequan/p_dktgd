import MathEx from "../../../LTGame/LTUtils/MathEx";
import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import ResDefine from "../../common/ResDefine";
import { EnemyConfig } from "../../config/EnemyConfig";
import { LevelConfig } from "../../config/LevelConfig";
import EnemyBase from "../enemy/EnemyBase";
import { EnemyType } from "../enemy/EnemyType";
import Enemy_1 from "../enemy/Enemy_1";

/** 刷新方式 */
export enum ERefreshType {
    /** 以玩家为原心 范围内旋转 */
    Player_Circle = 0,
}

export enum EMoveType {
    ToPlayer = 0,
    ToVec2
}

export class RefreshData{
    refreshTime: number;
    refreshType: ERefreshType;
    refreshParams: number[];
    moveType: EMoveType;
    moveParams: number[];
    enemyIds: number[];
    enemyCount: number;
    duration: number;
}

export default class ViewLevel{
    public config: LevelConfig.config;
    public layerObj: Laya.Sprite3D;
    public refreshConfig: RefreshData[];
    private _refreshIndex: number;
    public SetLevelId(id: number) {
        this.config = LevelConfig.data[id];
    }

    public PreLoad(urls: string[]) {
        urls.push(ResDefine.FixRefreshJson(this.config.refresh_path));
        urls.push(ResDefine.FixScene(this.config.model_path));
        urls.push(ResDefine.FixPath(this.config.map_path));
        for (let i = 0; i < this.config.enemy_list.length; i++) {
            let enemyConfig = EnemyConfig.data[this.config.enemy_list[i]];
            urls.push(ResDefine.FixPath(enemyConfig.model_path));
        }
    }

    public CreateLevel() {
        let s3d = LTRes.Get(ResDefine.FixScene(this.config.model_path)) as Laya.Scene3D;
        GlobalUnit.ResetScene(s3d);
        let layer = new Laya.Sprite3D("layerContent");
        s3d.addChild(layer);
        this.layerObj = layer;
        let camera = s3d.getChildByName("camera_obj") as Laya.Sprite3D;
        GlobalUnit.game.camera.InitCamera(camera);

        let start = s3d.getChildByName("__start__") as Laya.Sprite3D;
        GlobalUnit.game.player.CreatePlayer(start);

        let map = s3d.getChildByName("__map__") as Laya.Sprite3D;
        GlobalUnit.game.map.InitMapData(map, ResDefine.FixPath(this.config.map_path));

        this._refreshIndex = 0;
        this.refreshConfig = LTRes.Get(ResDefine.FixRefreshJson(this.config.refresh_path), true);
        this._enemyList = [];
    }

    private _RefreshEnemy() {
        let config = this.refreshConfig[this._refreshIndex];
        if (!config) return;

        let time = config.refreshTime;
        if (GlobalUnit.game.time >= time) {
            this._AddEnemyList(config);
            this._refreshIndex++;
        }
    }

    private _AddEnemyList(data: RefreshData) {
        console.log("刷新敌人: ", data);
        this._AddEnemy(data, 0);
    }

    private _enemyList: EnemyBase[];
    private _AddEnemy(data: RefreshData, count: number) {
        let id = MathEx.RandomFromArray(data.enemyIds);
        let config = EnemyConfig.data[id];
        let enemy: EnemyBase;
        switch(config.enemy_type) {
            case EnemyType.Default:
                enemy = new Enemy_1(config, data);
                break;
        }
        this._enemyList.push(enemy);
        let origin = GlobalUnit.game.player.originPos;
        if (data.refreshType == ERefreshType.Player_Circle) {
            let angle = MathEx.Random(0,360);
            let radius = 3;
            let x = origin.x + Math.cos(angle * Math.PI / 180) * radius;
            let y = origin.z + Math.sin(angle * Math.PI / 180) * radius;

            enemy.SetPos(x, y);
        }

        count++;
        if (count < data.enemyCount) {
            let time = data.duration / data.enemyCount;
            Laya.timer.once(time * 1000, this, this._AddEnemy, [data, count]);
        }
    }

    public LogicUpdate(dt: number) {
        this._RefreshEnemy();
        this._UpdateEnemyLogic(dt);
    }

    private _UpdateEnemyLogic(dt: number) {
        for (let i = 0; i < this._enemyList.length; i++) {
            this._enemyList[i].OnUpdate(dt);
        }
    }

    
}