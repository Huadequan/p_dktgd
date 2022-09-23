export namespace AnimFrameConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 描述 */ readonly intro: string;
        /** 图集宽高 */ readonly atlas_grid: number[];
        /** 动作索引 */ readonly act_indexes: number[][];
        /** 采样率 */ readonly sampling_speed: number[];
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: AnimFrameConfig.config};
    export var dataList: AnimFrameConfig.config[];
    export var lastData: AnimFrameConfig.config;
    export const path = "res/config/AnimFrameConfig.json";
}


