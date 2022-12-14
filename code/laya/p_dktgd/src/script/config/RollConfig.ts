export namespace RollConfig {
    export class config {
        /** 转盘id
第一次必然转到1 */ readonly id: number;
        /** 转盘内容 */ readonly show_str: string;
        /** 文字颜色 */ readonly text_color: string;
        /** 文字图标 */ readonly text_icon_path: string;
        /** 转盘图标 */ readonly icon_path: string;
        /** 奖励类型
0金币
1皮肤
 */ readonly reward_type: number;
        /** 奖励内容 */ readonly reward_value: number;
        /** 已领取之后的奖励类型 */ readonly re_reward_type: number;
        /** 已领取之后的奖励内容 */ readonly re_reward_value: number;
        /** 随机权重 */ readonly roll_weight: number;
    }
    export var isConst: boolean = false;
    export var data: {[key: number]: RollConfig.config};
    export var dataList: RollConfig.config[];
    export var lastData: RollConfig.config;
    export const path = "res/config/RollConfig.json";
}


