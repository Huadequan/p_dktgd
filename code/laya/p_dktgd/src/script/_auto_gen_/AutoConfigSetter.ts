import { ConfigManager } from "../../LTGame/Config/ConfigManager";
import { AnimFrameConfig } from "../config/AnimFrameConfig";
import { AudioConfig } from "../config/AudioConfig";
import { EffectConfig } from "../config/EffectConfig";
import { EggConfig } from "../config/EggConfig";
import { GameConst } from "../config/GameConst";
import { PackConst } from "../config/PackConst";
import { PlayerConfig } from "../config/PlayerConfig";
import { PushConfig } from "../config/PushConfig";
import { RewardCodeConfig } from "../config/RewardCodeConfig";
import { RollConfig } from "../config/RollConfig";
import { SignConfig } from "../config/SignConfig";
import { TryItemConfig } from "../config/TryItemConfig";


// 自动生成代码,请勿修改
export class AutoConfigSetter {

    public static SetConfig() {
        ConfigManager.AddConfig(AnimFrameConfig);
        ConfigManager.AddConfig(AudioConfig);
        ConfigManager.AddConfig(EffectConfig);
        ConfigManager.AddConfig(EggConfig);
        ConfigManager.AddConfig(GameConst);
        ConfigManager.AddConfig(PackConst);
        ConfigManager.AddConfig(PlayerConfig);
        ConfigManager.AddConfig(PushConfig);
        ConfigManager.AddConfig(RewardCodeConfig);
        ConfigManager.AddConfig(RollConfig);
        ConfigManager.AddConfig(SignConfig);
        ConfigManager.AddConfig(TryItemConfig);

    }

}