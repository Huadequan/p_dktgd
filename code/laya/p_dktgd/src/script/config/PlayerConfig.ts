export namespace PlayerConfig {
    export class config {
        /** 序号 */ readonly id: number;
        /** 人物模型 */ readonly model_path: string;
        /** 皮肤挂点 */ readonly skin_path: string;
        /** 帧动画配置 */ readonly anim_id: number;
        /** 移动速度 */ readonly move_speed: number;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: PlayerConfig.config};
    export var dataList: PlayerConfig.config[];
    export var lastData: PlayerConfig.config;
    export const path = "res/config/PlayerConfig.json";
}


