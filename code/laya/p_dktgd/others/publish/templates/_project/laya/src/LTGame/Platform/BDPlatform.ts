import WXPlatform from "./WXPlatform";
import LTPlatformData from "./Data/LTPlatformData";
import { EPlatformType } from "./EPlatformType";
import StringEx from "../LTUtils/StringEx";
import { CommonEventId } from "../Commom/CommonEventId";

export default class BDPlatform extends WXPlatform {

    platform: EPlatformType = EPlatformType.BD;

    /**
     * bd专用sid
     */
    public sid: string;

    private _isBannerShowed: boolean;

    protected _showVideoLoad: boolean = false;

    Init(platformData: LTPlatformData) {
        this.base = window["swan"];
        if (this.base == null) {
            console.error("平台初始化错误");
            return;
        }

        this.platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();
        this._isBannerLoaded = false;
        this._isBannerShowed = false;
        // this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();

        window["iplatform"] = this;
    }

    protected _CreateBannerAd() {
        if (StringEx.IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        let bannerObj = {};
        bannerObj["adUnitId"] = this.platformData.bannerId; // "adunit-b48894d44d318e5a";
        bannerObj["appSid"] = this.sid;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = windowWidth;
        bannerObj["style"] = styleObj;

        this._bannerAd = this.base.createBannerAd(bannerObj);

        this._bannerAd.onLoad(() => {
            console.log("banner加载成功");
            this._isBannerLoaded = true;
            this._bannerAd.style.top = windowHeight - this._bannerAd.style.height;

            // 创建完直接显示广告
            this._bannerAd.show();
        });

        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });

    }

    protected _CreateVideoAd() {
        if (StringEx.IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        videoObj["appSid"] = this.sid;
        this._rewardVideo = this.base.createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res);
            if (this._videoFailedCount > 10) {
                console.log("第", this._videoFailedCount, "次重新加载视频广告");
                // 失败自动加载广告
                this._rewardVideo.load();
            }
        });
        this._rewardVideo.onClose((res) => {
            this.base.hideLoading();

            Laya.stage.event(CommonEventId.RESUM_AUDIO);
            console.log("视频回调", res);

            let isEnd = res["isEnded"] as boolean;
            if (isEnd) {
                if (this._rewardSuccessed) this._rewardSuccessed.run();
            } else {
                if (this._rewardSkipped) this._rewardSkipped.run();
            }
            // bd需要自动加载广告
            this._rewardVideo.load();
        });
    }

    protected _CreateInterstitalAd() {
    }

    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) {
        let loadObj = {};
        loadObj["name"] = name;
        loadObj["success"] = () => {
            console.log("分包加载成功", name);
            if (onSuccess) {
                onSuccess.run();
            }
        };
        loadObj["fail"] = () => {
            console.error("分包加载失败", name);
            if (onFailed) {
                onFailed.run();
            }
        };
        let loadTask = this.base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            if (onProgress) {
                let value = res.progress / 100;
                if (isNaN(value)) {
                    value = res.loaded / res.total;
                }
                onProgress.runWith(value);
            }
        });
    }

    RecordEvent(eventId: string, param: object) {
        this.base.reportAnalytics(eventId, param);
    }

    ShowBannerAd() {
        if (this._isBannerLoaded) {
            return;
        }
        this._CreateBannerAd();
    }

    HideBannerAd() {
        if (!this._isBannerLoaded) return;
        this._isBannerLoaded = false;
        if (this._bannerAd) {
            this._bannerAd.destroy();
        }
    }

}