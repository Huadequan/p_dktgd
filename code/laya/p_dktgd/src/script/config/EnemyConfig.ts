export namespace EnemyConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 敌人模型 */ readonly model_path: string;
        /** 敌人类型
1==普通敌人 */ readonly enemy_type: number;
        /** 皮肤挂点 */ readonly skin_path: string;
        /** 帧动画配置 */ readonly anim_id: number;
        /** 血量 */ readonly hp: number;
        /** 移动速度 */ readonly move_speed: number;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: EnemyConfig.config};
    export var dataList: EnemyConfig.config[];
    export var lastData: EnemyConfig.config;
    export const path = "res/config/EnemyConfig.json";
}


