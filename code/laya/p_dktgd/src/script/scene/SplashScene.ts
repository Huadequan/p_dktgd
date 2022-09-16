import { ESceneType } from "../../LTGame/Start/ESceneType";
import LTSplashScene from "../../LTGame/Start/LTSplashScene";
import LoadBinder from "../../ui/Load/LoadBinder";
import UI_splash from "../../ui/Load/UI_splash";
import MainBinder from "../../ui/Main/MainBinder";
import GlobalUnit from "../common/GlobalUnit";
import { EffectManager } from "../manager/EffectManager";
import { AutoConfigSetter } from "../_auto_gen_/AutoConfigSetter";

export default class SplashScene extends LTSplashScene {

    constructor() {
        super();
        this._splashUIClass = UI_splash;
        this._useCommonUI = true;
    }

    _OnBindUI() {
        LoadBinder.bindAll();
        MainBinder.bindAll();
    }

    _OnSetLoadConfig() {
        AutoConfigSetter.SetConfig();
    }

    _OnGameResPrepared(urls: string[]) {
        GlobalUnit.InitAll(urls);
        EffectManager.instance.Preload(urls);
    }

    async _OnGameResLoaded() {
        await EffectManager.instance.WarmEffects();
        await GlobalUnit.FirstCreate();
        this.isFinished = true;
        this.nextState = ESceneType.Main;
    }


}