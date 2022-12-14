import LTSDK from "../../SDK/LTSDK";
import Awaiters from "../Async/Awaiters";
import { CommonEventId } from "../Commom/CommonEventId";
import StringEx from "../LTUtils/StringEx";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import DefaultDevice from "./DefaultDevice";
import DefaultRecordManager from "./DefaultRecordManager";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";
import ShareManager from "./ShareManager";
import DefaultPlatform from "./DefaultPlatform";
import WXOpenDataContext from "./Impl/WX/WXOpenDataContext";
import CommonSaveData from "../Commom/CommonSaveData";

export default class WXPlatform extends DefaultPlatform {
    userInfo: LTGame.UserInfo;
    base: any;
    platformData: LTPlatformData;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.WX;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new DefaultRecordManager();
    device: IDevice = new DefaultDevice();
    systemInfo: any;
    loginCode: string = null;
    /**
     * 是否支持直接跳转到其他小程序
     */
    isSupportJumpOther: boolean = true;

    protected _data: LTPlatformData;

    protected _bannerAd;
    protected _rewardVideo;
    protected _intersitialAd;

    protected _isBannerLoaded: boolean = false;
    protected _isVideoLoaded: boolean = false;
    protected _isInterstitialLoaded: boolean = false;
    protected _videoFailedCount: number;
    protected _interstitalFailedCount: number;

    protected _rewardSuccessed: Laya.Handler;
    protected _rewardSkipped: Laya.Handler;

    protected _cacheScreenScale: number;

    protected _shareVideoBtn;


    protected _cacheVideoAD: boolean = false;

    protected _cacheOnShowHandle: Laya.Handler;

    Init(platformData: LTPlatformData) {
        this.base = window["wx"];
        if (this.base == null) {
            console.error("平台初始化错误", LTPlatform.platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        // this._Login();
        this._InitShareInfo();
        this._InitSystemInfo();

        this._CreateBannerAd();
        this._CreateVideoAd();
        this._CreateInterstitalAd();
        //  this.openDataContext = new WXOpenDataContext(this.base);
        window["iplatform"] = this;
    }

    _CheckUpdate() {
        let updateManager = this.base.getUpdateManager();
        if (updateManager == null) return;

        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.log("onCheckForUpdate", res.hasUpdate);
            if (res.hasUpdate) {
                LTPlatform.instance.base.showToast({
                    title: "即将有更新请留意"
                });
            }
        });

        updateManager.onUpdateReady(() => {
            LTPlatform.instance.base.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否立即使用？",
                success: function (res) {
                    if (res.confirm) {
                        // 调用 applyUpdate 应用新版本并重启
                        let updateManager = LTPlatform.instance.base.getUpdateManager();
                        updateManager.applyUpdate();
                    } else {
                        LTPlatform.instance.base.showToast({
                            icon: "none",
                            title: "小程序下一次「冷启动」时会使用新版本"
                        });
                    }
                }
            });
        });

        updateManager.onUpdateFailed(() => {
            LTPlatform.instance.base.showToast({
                title: "更新失败，下次启动继续..."
            });
        });
    }

    protected _Login() {

        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {} as LTGame.LoginData;
        loginData.success = (res) => {
            this.loginCode = res.code;
            this._OnLoginSuccess(res);
            console.error(this.loginState);
            if (CommonSaveData.instance.needUserInfo) {
                this.getUserInfo();
            }
        };
        loginData.fail = (res) => {
            console.error(LTPlatform.platformStr, "登录失败", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = () => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        this.base.login(loginData);
    }
    getUserInfo() {
        return new Promise<void>((resolve, reject) => {
            this.base.getUserInfo({
                withCredentials: true,
                lang: 'zh_CN',
                success: (result: _getUserInfoSuccessObject) => {
                    console.log(result);
                    CommonSaveData.instance.avatarUrl = result.userInfo["avatarUrl"];
                    CommonSaveData.instance.nickName = result.userInfo["nickName"];
                    CommonSaveData.instance.needUserInfo = false;
                    CommonSaveData.SaveToDisk();
                    resolve();
                },
                fail: () => {
                    reject();
                },
                complete: () => { }
            })
        })

    }

    protected _OnLoginSuccess(res: LTGame.LoginSuccessRes) {
        console.log(LTPlatform.platformStr, "登录成功", res);
        // LTUI.Toast('登录成功');
        this.openDataContext = new WXOpenDataContext(this.base);
        this.loginState.isLogin = true;
        this.loginState.code = res.code;
    }

    protected _InitLauchOption() {
        // 绑定onShow事件
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this.base.getLaunchOptionsSync() as LTGame.LaunchOption;
        this._OnShow(res);
    }

    protected _InitShareInfo() {
        this.base.showShareMenu({
            withShareTicket: true,
            success: (res) => {
                console.log("InitShareSuccess", res);
            },
            fail: (res) => {
                console.log("InitShareFailed", res);
            },
            complete: (res) => {
                console.log("InitShareComplete", res);
            }
        });
        this.base.onShareAppMessage(
            () => {
                let shareInfo = ShareManager.instance.GetShareInfo();
                return WXPlatform._WrapShareInfo(shareInfo);
            }
        );
    }

    protected static _WrapShareInfo(shareInfo: ShareInfo) {
        let shareObj = {};
        if (shareInfo.shareTitle) {
            shareObj["title"] = shareInfo.shareTitle;
        }
        if (shareInfo.shareImg) {
            shareObj["imageUrl"] = shareInfo.shareImg;
        }
        if (shareInfo.sharePath) {
            shareObj["query"] = {};
            let pathSplit = shareInfo.sharePath.split("?");
            let params = pathSplit[1].split("&");
            for (let getParam of params) {
                let splitParam = getParam.split("=");
                shareObj["query"][splitParam[0]] = splitParam[1];
            }
        }
        return shareObj;
    }

    protected _InitSystemInfo() {
        this.base = this.base;
        try {
            this.systemInfo = this.base.getSystemInfoSync();
            console.log("系统信息已获取", this.systemInfo);

            this.safeArea = this.systemInfo.safeArea as LTGame.SafeArea;
            this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }

    protected _CreateInterstitalAd() {
        if (StringEx.IsNullOrEmpty(this.platformData.interstitialId)) {
            console.log("无有效的插页广告ID,取消加载");
            return;
        }
        this._interstitalFailedCount = 0;
        let intAdObj = {};
        intAdObj["adUnitId"] = this.platformData.interstitialId;
        this._intersitialAd = this.base.createInterstitialAd(intAdObj);

        if (this._intersitialAd == null) {
            console.error("createInterstitialAd返回值为null,取消初始化");
            return;
        }

        this._intersitialAd.onLoad(() => {
            console.log("插页广告加载成功");
            this._isInterstitialLoaded = true;
        });
        this._intersitialAd.onError((err) => {
            this._interstitalFailedCount++;
            console.error("插页广告加载失败", err);
            if (this._interstitalFailedCount > 10) {
                console.log("第", this._interstitalFailedCount, "次重新加载插页广告");
                // 失败自动加载广告
                this._intersitialAd.load();
            }
        });
    }

    protected _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("当前策略为不缓存视频广告");
            return;
        }
        let createRewardedVideoAd = this.base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            return;
        }
        if (StringEx.IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            return;
        }
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
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

            Laya.stage.event(CommonEventId.RESUM_AUDIO);
            console.log("视频回调", res);

            let isEnd = res["isEnded"] as boolean;

            // 修复广告bug
            Awaiters.NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });
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
        bannerObj["adIntervals"] = 30;
        let styleObj = {};
        styleObj["left"] = 0;
        styleObj["top"] = 0;
        styleObj["width"] = 360;
        bannerObj["style"] = styleObj;

        this._bannerAd = this.base.createBannerAd(bannerObj);
        this._isBannerLoaded = false;

        this._bannerAd.onLoad(() => {
            console.log("banner加载成功");
            this._isBannerLoaded = true;
            this._bannerAd.style.top = windowHeight - this._bannerAd.style.realHeight;
            this._bannerAd.style.left = (windowWidth - this._bannerAd.style.realWidth) / 2;
        });

        this._bannerAd.onError((res) => {
            console.error("banner广告加载失败", res);
        });
    }

    IsBannerAvaliable() {
        return this._isBannerLoaded;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return this._isInterstitialLoaded;
    }
    private showAdCount: number = 0;
    ShowBannerAd() {
        if (!LTSDK.instance.configs.isADEnable) return;
        this.showAdCount++;
        this.HideBannerAd();
        if (this.showAdCount % 3 == 0) {
            this._showGameBoxBannerAd();
        } else {
            this._showBanner();
        }
    }
    private _showBanner() {
        this._bannerAd?.show();
    }
    private _hieBanner() {
        this._bannerAd?.hide();
    }
    HideBannerAd() {
        // UI_SelfBannerMediator.instance.Hide();
        this._hieBanner();
        this._hideGameBoxBannerAd();
    }

    protected _DoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        if (!this._isVideoLoaded) {
            console.error("视频广告尚未加载好");
            return;
        }
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        this._isVideoLoaded = false;
        Laya.stage.event(CommonEventId.PAUSE_AUDIO);
        this._rewardVideo.show();
    }

    protected _DoNoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler, onFailed: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (StringEx.IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            onFailed?.run();
            return;
        }
        let createRewardedVideoAd = this.base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            onFailed?.run();
            return;
        }
        LTUI.ShowLoading("广告拉取中...");
        this._videoFailedCount = 0;
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        this._rewardVideo.onLoad(() => {
            console.log("视频广告加载成功");
            this._isVideoLoaded = true;
        });
        this._rewardVideo.onError((res) => {
            this._videoFailedCount++;
            console.error("视频广告加载失败", res, this._videoFailedCount);
            LTUI.HideLoading();
            LTUI.Toast("视频加载失败，请稍后重试！");
        });
        this._rewardVideo.onClose((res) => {

            Laya.stage.event(CommonEventId.RESUM_AUDIO);
            console.log("视频回调", res);
            let isEnd = res["isEnded"] as boolean;
            Awaiters.NextFrame().then(() => {
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });

        this._rewardVideo.show().then(() => {
            LTUI.HideLoading();
        }).catch(err => {
            console.log("广告组件出现问题", err);
            // 可以手动加载一次
            this._rewardVideo.load().then(() => {
                console.log("手动加载成功");
                // 加载成功后需要再显示广告
                return this._rewardVideo.show().then(() => {
                    LTUI.HideLoading();
                }).catch((err) => {
                    console.error(err);
                    LTUI.HideLoading();
                });;
            });
        });;
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler, onFailed: Laya.Handler) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        } else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped, onFailed);
        }
    }

    ShowInterstitalAd() {
        if (!LTSDK.instance.configs.isADEnable) return;
        if (!this._isInterstitialLoaded) {
            console.error("插页广告尚未加载好");
            return;
        }
        this._intersitialAd.show();
    }

    GetFromAppId(): string {
        if (this.lauchOption.referrerInfo == null) {
            return null;
        }
        if (StringEx.IsNullOrEmpty(this.lauchOption.referrerInfo.appId)) {
            return null;
        }
        return this.lauchOption.referrerInfo.appId;
    }

    /**
     * 小游戏回到前台的事件
     */
    protected _OnShow(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnShow", res);
        LTPlatform.instance.lauchOption = res;
        LTPlatform.instance._CheckUpdate();
        // this.NavigateToAppSuccess = null;//wx
        Awaiters.NextFrame().then(() => {
            if (LTPlatform.instance.onResume) {
                LTPlatform.instance.onResume.runWith(res);
            }
            let cacheOnShow = LTPlatform.instance["_cacheOnShowHandle"];
            if (cacheOnShow) {
                cacheOnShow.run();
                LTPlatform.instance["_cacheOnShowHandle"] = null;
            }
        });
    }

    /**
     * 小游戏退出前台的事件
     */
    protected _OnHide(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnHide", res);
        if (LTPlatform.instance.onPause) {
            LTPlatform.instance.onPause.runWith(res);
        }
        //wx
        // if (this.NavigateToAppSuccess) {
        //     this.NavigateToAppSuccess();
        // }
    }

    ShareAppMessage(shareInfo: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        console.log("分享消息", shareInfo);

        let shareObj = WXPlatform._WrapShareInfo(shareInfo);
        this.base.shareAppMessage(shareObj);

        if (onSuccess) {
            onSuccess.run();
        }
    }

    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) {
        if (this.base['loadSubpackage'] == null) {
            console.log("无加载子包方法,跳过加载子包", name);
            if (onSuccess) {
                onSuccess.run();
            }
            return;
        }
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

            if (Laya.Browser.onMobile) {
                console.log("分包加载进度", res);
            }

            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }

    RecordEvent(eventId: string, param: object) {
        console.log("记录事件", eventId, param);
        let aldSendEvent = this.base["aldSendEvent"];
        if (aldSendEvent == null) {
            console.error("阿拉丁sdk尚未接入,请检查配置");
            return;
        }
        if (param != null) {
            aldSendEvent(eventId, param);
        } else {
            aldSendEvent(eventId);
        }
    }

    /**
     * 创建分享视频按钮
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    public CreateShareVideoBtn(x: number, y: number, width: number, height: number) {
        let btnObj = {} as any;
        btnObj.style = {
            left: x * this._cacheScreenScale,
            top: y * this._cacheScreenScale,
            height: height * this._cacheScreenScale,
            width: width * this._cacheScreenScale
        };
        btnObj.share = {
            query: {
                tick: 1
            },
            bgm: "",
            timeRange: [0, 60 * 1000]
        };
        if (this._shareVideoBtn == null) {
            this._shareVideoBtn = this.base.createGameRecorderShareButton(btnObj);
        } else {
            this._shareVideoBtn.show();
        }
    }

    /**
     * 隐藏分享视频按钮
     */
    public HideShareVideoBtn() {
        if (this._shareVideoBtn != null) {
            this._shareVideoBtn.hide();
        }
    }

    ShowToast(str: string) {
        this.base.showToast(
            {
                title: str,
                duration: 2000
            }
        );
    }
    gamebox: any;
    OpenGameBox(appIds: string[]) {
        if (!LTSDK.instance.configs.isADEnable) return;
        this.HideBannerAd();
        if (!this.gamebox) {
            this.creatGamebox();
        }
        this.gamebox?.show();

    }
    HideGameBox() {
        this.gamebox?.hide();
    }
    creatGamebox() {
        if (!LTSDK.instance.configs.isADEnable) return;
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;

        if (!this.gamebox) {
            this.gamebox = this.base.createCustomAd({
                adUnitId: this.platformData.gameBoxAdId,
                style: {
                    left: 0,
                    top: windowHeight - 228,
                    width: windowWidth,
                    height: 226
                }
            });
            this.gamebox.onLoad((res) => {
                console.log("gamebox onload", res);
            });
            this.gamebox.onError((res) => {
                console.log("gamebox err", res);
            });
        }
    }
    NavigateToAppSuccess: () => void = null;
    NavigateToApp(appid: string, path?: string, extra?: any, showGC?: boolean, isbanner?: boolean, adid?: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (showGC) {
                // GlobalUnit.gameManager.GameOver();
            }
            // this.NavigateToAppSuccess = null;
            wx.navigateToMiniProgram({
                appId: appid,
                path: path,
                extraData: extra,
                envVersion: '',
                success: (res) => {
                    if (isbanner) {
                        LTSDK.instance.ReportClickAd(adid, 19, true);
                    } else {
                        LTSDK.instance.ReportClickAd(adid, 5, true);
                    }
                    console.log('小游戏跳转成功', res);
                    // this.NavigateToAppSuccess = () => {
                    // };
                    resolve(true);
                },
                fail: () => {
                    console.log('小游戏跳转失败：');
                    if (isbanner) {
                        LTSDK.instance.ReportClickAd(adid, 19, false);
                    } else {
                        LTSDK.instance.ReportClickAd(adid, 5, false);
                    }
                    reject(false);
                    if (showGC) {
                        // UI_GameCenterMediator.instance.Show();
                    }
                },
                complete: () => { }
            });
        })
    }
    createShortcut(): any {
        console.log('暂未实现');
    }
    public GetStorage(key: string): any {
        if (this.base && this.base.getStorageSync && key) {
            try {
                return this.base.getStorageSync(key);
            } catch (error) {
                console.log('getStorageSync error: ', JSON.stringify(error));
                return null;
            }
        }
    }
    public SetStorage(key: string, data: any) {
        if (this.base && this.base.getStorageSync && key) {
            try {
                return this.base.setStorageSync(key, data);
            } catch (error) {
                console.log('setStorageSync error: ', JSON.stringify(error));
            }
        }
    }
    followOfficialAccount(): any {
        console.error("当前平台", LTPlatform.platformStr, "暂不支持关注");
    }
    checkFollowState(): any {
        console.error("当前平台", LTPlatform.platformStr, "暂不支持关注");
    }

    SetClipboardData(str: string) {
        this.base.setClipboardData({ data: str });
    }

    /** 往开放域推送数据 */
    public postMsg(msg: object): void {
        let context = this.base.getOpenDataContext();
        context.postMessage(msg);
    }
    customAdLeft: any;
    customAdRight: any;
    boxBanner: any;
    /**原生模板广告 侧面 */
    showGameBoxBannerAd() {
        if (!LTSDK.instance.configs.isADEnable) return;
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        //单个格子默认 68*106 底部多个格子默认 360*106

        if (!this.customAdLeft) {
            this.customAdLeft = this.base.createCustomAd({
                adUnitId: this.platformData.nativeinpageIds[0],
                style: {
                    left: 3,
                    top: windowHeight / 2 - 80,
                    width: 68,
                    height: 200
                }
            });
            this.customAdLeft.onLoad((res) => {
                console.log("customAdLeft onload", res);
            });
            this.customAdLeft.onError((res) => {
                console.log("customAdLeft err", res);
            });
        }
        if (!this.customAdRight) {
            this.customAdRight = this.base.createCustomAd({
                adUnitId: this.platformData.nativeinpageIds[1],
                style: {
                    left: windowWidth - 75,
                    top: windowHeight / 2 + 80,
                    width: 68,
                    height: 200
                }
            });
            this.customAdRight.onLoad((res) => {
                console.log("customAdRight onload", res);
            });
            this.customAdRight.onError((res) => {
                console.log("customAdRight err", res);
            });
        }
        this.customAdRight?.show();
        this.customAdLeft?.show();
    }
    _showGameBoxBannerAd() {
        if (!LTSDK.instance.configs.isADEnable) return;
        this.HideBannerAd();
        this.creatCustom();
        // if (this.customAdLeft) {
        //     this.customAdLeft.show();
        // }
        // if (this.customAdRight) {
        //     this.customAdRight.show();
        // }
        if (this.boxBanner) {
            this.boxBanner.show();
        }
    }
    private creatCustom() {
        if (!LTSDK.instance.configs.isADEnable) return;
        let windowWidth = this.base.getSystemInfoSync().windowWidth;
        let windowHeight = this.base.getSystemInfoSync().windowHeight;
        //单个格子默认 68*106 底部多个格子默认 360*106

        if (!this.boxBanner) {
            this.boxBanner = this.base.createCustomAd({
                adUnitId: this.platformData.gameBoxBannerId,
                style: {
                    left: (windowWidth - 360) / 2,
                    top: windowHeight - 108,
                    width: windowWidth,
                    height: 106
                }
            });
            this.boxBanner.onLoad((res) => {
                console.log("boxBanner onload", res);
            });
            this.boxBanner.onError((res) => {
                console.log("boxBanner err", res);
            });
        }
    }
    private _hideGameBoxBannerAd() {
        if (this.boxBanner) {
            this.boxBanner.destroy();
            this.boxBanner = null;
        }
    }
    hideGameBoxBannerAd() {
        this.customAdRight?.destroy();
        this.customAdRight = null;
        this.customAdLeft?.destroy();
        this.customAdLeft = null;
    }
}