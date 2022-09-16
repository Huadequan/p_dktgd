import { CommonProgressData } from "../LTGame/Commom/CommonProgressData";
import LTPlatformData from "../LTGame/Platform/Data/LTPlatformData";
import { EPlatformType } from "../LTGame/Platform/EPlatformType";
import LTPlatform from "../LTGame/Platform/LTPlatform";
import LTRespackManager from "../LTGame/Res/LTRespackManager";
import { LTStart } from "../LTGame/Start/LTStart";
import SDK_CQ from "../SDK/Impl/SDK_CQ";
import SDK_Default from "../SDK/Impl/SDK_Default";
import LTSDK from "../SDK/LTSDK";
import GameData from "./common/GameData";
import MainScene from "./scene/MainScene";
import SplashScene from "./scene/SplashScene";

export default class MainStart extends LTStart {

    constructor() {
        super();
        this.enableStat = true;
    }

    private _appId: string = "";
    /**SDK云控版本名 */
    private _gameVersion = "1.0.0";
    /**资源版本 */
    private _resVersion = "0515";
    /**项目名 */
    private _gameName = "p_ltg";
    private _remoteUrl = "https://file.gugudang.com";
    _HandleInitPlatform(ePlatform: EPlatformType, platformData: LTPlatformData) {
        // window["__GM"] = true;

        GameData.SAVE_NAME = this._gameName + '.sav';
        CommonProgressData.Init(this._gameName + '.progress');

        switch (ePlatform) {
            case EPlatformType.Web:
                console.log("web平台,默认框架测试数据");
                this._gameVersion = '0.0.6';//1.0.1 为全策略模式 
                platformData.appId = "wx5cd52a0463c90093"//'88888888';
                platformData.appKey = '11111111111';
                break;
            case EPlatformType.TT:
                this._gameVersion = "0.0.1";
                this._resVersion = '0.0.1';
                platformData.appId = "tt937ae5c70c433f5302";
                platformData.bannerId = "1bhbt9cjpr9a35bd30";
                platformData.rewardVideoId = "6tnnb4e3em519ja6d2";
                platformData.interstitialId = "8oe7qjl1pon2g930jf";
                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/${this._resVersion}_tt/`);
                break;
            case EPlatformType.WX:
                this._gameVersion = "0.0.6";
                this._resVersion = 'v0.0.1';
                platformData.appId = "wx5cd52a0463c90093";
                platformData.bannerId = "adunit-11a2571806b5fc5c";
                platformData.rewardVideoId = "adunit-fa6dd5b431c41ceb";
                platformData.interstitialId = "adunit-abe9d252f3a3956c";
                platformData.gameBoxAdId = "adunit-0821c87792b6f7d4";
                platformData.gameBoxBannerId = "adunit-5b331ccc3d1112e6";
                // platformData.="adunit-5b331ccc3d1112e6";

                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/${this._resVersion}_wx/`);
                break;
            case EPlatformType.Oppo:
                this._gameVersion = "0.0.0";
                this._resVersion = "0710";
                platformData.appId = "30685025";
                platformData.appKey = "9jon5f9Ak3k0c8O08gSSG80C0";
                platformData.bannerId = "420707";
                platformData.rewardVideoId = "420714";
                platformData.gameBoxAdId = "420715";
                platformData.gameBoxBannerId = "420716";
                platformData.nativeinpageIds = ['420711'];
                platformData.nativeId = "420713";
                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/${this._resVersion}_oppo/`);
                break;
            case EPlatformType.Vivo:
                this._gameVersion = "0.0.0";
                this._resVersion = "211123";
                platformData.appId = "105524391";
                platformData.appKey = "105524391";// "4593206c07a95b1edf85";
                platformData.bannerId = "8f93f85e270c4e0ba3f7fc1e8f1c062c";
                platformData.rewardVideoId = "57f8d513c4144775aa9d99839b002c5b";
                platformData.interstitialId = "bc3f2b80985447d9a75b5b39b308490c";
                platformData.nativeinpageIds = ['64f78dae69174671a73ad51f4ea1a3ce'];
                platformData.nativeId = "d245a29f9e6741b6807e1fcc71c34e53";
                platformData.gameBoxAdId = "0e9f57ddc2584bd1a36eac7136d4d3f5";
                platformData.gameBoxBannerId = "20eabb82c12b439b82d2f9274b0101d9";
                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/vivo_${this._resVersion}/`);
                break;
            case EPlatformType.KS:
                this._gameVersion = "0.0.1";
                this._resVersion = "0.0.1";
                platformData.appId = "ks667940122780561072";
                platformData.rewardVideoId = "2300000737_01";
                platformData.interstitialId = "2300000737_02";
                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/ks_${this._resVersion}/`);
                break;
            case EPlatformType.HW:
                this._gameVersion = "0.0.1";
                this._resVersion = "0723";
                platformData.appId = "104360501";
                platformData.appKey = "104360501";// "4593206c07a95b1edf85";
                //测试广告位
                platformData.bannerId = "j1pcnpx5tu";
                platformData.rewardVideoId = "e7hm5vx799";
                platformData.interstitialId = "testb4znbuh3n2";
                platformData.nativeinpageIds = ['u7m3hc4gvm']; 
                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/hw_${this._resVersion}/`);

                break;
            case EPlatformType.Gamebox4399:
                this._gameVersion = "0.0.1";
                this._resVersion = "0723";
                platformData.appId = "104360501";
                LTRespackManager.instance.SetRemoteUrl(`${this._remoteUrl}/res/down/public/${this._gameName}/gb_${this._resVersion}/`);

                break;
            default:
                console.error("未处理平台内容", LTPlatform.platformStr, "请在MainStart中添加处理");
                break;
        }
        if (platformData.appId) {
            this._appId = platformData.appId;
        }
    }

    _HandleSDK() {
        switch (LTPlatform.instance.platform) {
            case EPlatformType.Native_IOS:
            case EPlatformType.Native_Android:
            case EPlatformType.Native_Android_233:
            case EPlatformType.Native_IOS:
                LTSDK.CreateInstace(SDK_Default, this._gameName, this._gameVersion, this._appId);
                break;
            default:
                LTSDK.CreateInstace(SDK_CQ, this._gameName, this._gameVersion, this._appId);//
                break;
        }
    }

    _InitFsm() {
        this._fsm.Add(new SplashScene());
        this._fsm.Add(new MainScene());
    }

}