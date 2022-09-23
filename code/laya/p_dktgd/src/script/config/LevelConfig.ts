export namespace LevelConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 关卡模型 */ readonly model_path: string;
        /** 地图 */ readonly map_path: string;
        /** 预加载敌人 */ readonly enemy_list: number[];
        /** 敌人刷新配置 */ readonly refresh_path: string;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: LevelConfig.config};
    export var dataList: LevelConfig.config[];
    export var lastData: LevelConfig.config;
    export const path = "res/config/LevelConfig.json";
}


