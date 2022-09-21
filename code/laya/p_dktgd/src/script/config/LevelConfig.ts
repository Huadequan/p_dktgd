export namespace LevelConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 关卡模型 */ readonly model_path: string;
        /** 地图 */ readonly map_path: string;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: LevelConfig.config};
    export var dataList: LevelConfig.config[];
    export var lastData: LevelConfig.config;
    export const path = "res/config/LevelConfig.json";
}


