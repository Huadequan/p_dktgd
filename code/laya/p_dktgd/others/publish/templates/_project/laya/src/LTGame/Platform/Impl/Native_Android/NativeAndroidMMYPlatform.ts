import LTUI from "../../../UIExt/LTUI";
import LTPlatformData from "../../Data/LTPlatformData";
import DefaultPlatform from "../../DefaultPlatform";
import { EPlatformType } from "../../EPlatformType";
import LTPlatform from "../../LTPlatform";
import { AndroidDevice } from "./AndroidDevice";

export class NativeAndroidMMYPlatform extends DefaultPlatform {
    useWAV = true;

    platform: EPlatformType = EPlatformType.Native_Android_MMY;
    safeArea: LTGame.SafeArea = null;
    bridge: any;
    private _isDebug: boolean = true;;
    protected _cacheScreenScale: number;
    Init(platformData: LTPlatformData) {
        this.platformData = platformData;
        let conchConfig = window['conchConfig'];
        let PlatformClass = window['PlatformClass'];
        let os = conchConfig.getOS();
        if (os == "Conch-android") {
            this.bridge = PlatformClass.createClass("demo.JSBridge");//创建脚步代理
        }
        console.log("平台初始化完成" + LTPlatform.platformStr);
        console.log("摸摸鱼");

        this._InitSystemInfo();
        this.device = new AndroidDevice(this.bridge);
        this.loginState = {
            isLogin: true,
            code: "111111111111"
        };
        this.userInfo = { nickName: '未登录用户666', avatarUrl: '66.png' }
        Laya.timer.once(500, this, this.FakeLoginEnd);

    }

    protected _InitSystemInfo() {
        try {
            this.safeArea = {} as LTGame.SafeArea;
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0;
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            this._cacheScreenScale = 750 / Laya.stage.width;
            console.log("初始化安全区域完成");
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    private FakeLoginEnd() {
        if (this.onLoginEnd)
            this.onLoginEnd.run();
    }
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler, onFail: Laya.Handler) {
        const obj = {};
        LTUI.ShowLoading("加载中...");
        this.bridge.callWithBack(function (json) {
            console.log("激励广告事件:" + json);
            const data = JSON.parse(json);
            //  {event:"", value:""}
            switch (data.event) {
                case "onAdClose":
                    //  视频关闭
                    onSkipped.run();
                    break;
                case "onAdComplete":
                    //  视频播放完成
                    onSuccess.run();
                    break;
                case "onAdError":
                    //  视频报错
                    onFail.run();
                    break;
                case "onAdSkipped":
                    //  跳过
                    onSkipped.run();
                    break;
            }
        }, "RewardVideoAd", JSON.stringify(obj));
        setTimeout(() => {
            LTUI.HideLoading();
        }, 5000);
        this.bridge.call("ShowRewardAd");
    }

    ShowInterstitalAd() {
        if (window["__GM"]) return;
        this.bridge.call("ShowInterstitalAd");
    }

    ShowBannerAd() {
        // if (LTSDK.instance.checkState != ECheckState.InCheck) {
        // }
        this.bridge.call("ShowBanner");
    }

    HideBannerAd() {
        this.bridge.call("RemoveBanner");
    }

    RecordEvent(eventId: string, param: object) {
        //这里关闭原生splash
        if (eventId == "启动界面初始化完成") {
            this.bridge.call('hideSplash');
        }
    }
}