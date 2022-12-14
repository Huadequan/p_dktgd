import { ECheckState } from "../../SDK/common/ECheckState";
import LTSDK from "../../SDK/LTSDK";
import Awaiters from "../Async/Awaiters";
import { CommonEventId } from "../Commom/CommonEventId";
import StringEx from "../LTUtils/StringEx";
import UI_ImageBannerMediator, { FakeBannerData } from "../UIExt/DefaultUI/UI_ImageBannerMediator";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import { OppoDevice } from "./DefaultDevice";
import DefaultPlatform from "./DefaultPlatform";
import DefaultRecordManager from "./DefaultRecordManager";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";

export default class OppoPlatform extends DefaultPlatform {
    userInfo: LTGame.UserInfo;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.Oppo;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new DefaultRecordManager();
    device: IDevice = new OppoDevice();
    systemInfo: any;
    /**盒子广告 */
    oppoBoxAd: any;
    /**
     * 是否支持直接跳转到其他小程序
     */
    isSupportJumpOther: boolean = true;

    protected _data: LTPlatformData;

    protected _bannerAd;
    protected _rewardVideo;
    protected _isBannerLoaded: boolean = false;
    protected _isVideoLoaded: boolean = false;
    protected _isInterstitialLoaded: boolean = false;
    protected _isInterstitialCanShow: boolean = true;
    protected _nativeAdLoaded: boolean = false;
    protected _videoFailedCount: number;
    protected _interstitalFailedCount: number;
    protected _nativeAdFailedCount: number;

    protected _rewardSuccessed: Laya.Handler;
    protected _rewardSkipped: Laya.Handler;

    protected _cacheScreenScale: number;

    protected _shareVideoBtn;

    protected _base: any;

    protected _cacheVideoAD: boolean = false;

    protected _cacheOnShowHandle: Laya.Handler;
    private noAdTime: number = 0;
    private oppoBoxBannerAd: any;
    async Init(platformData: LTPlatformData) {
        this._base = window["qg"];
        if (this._base == null) {
            console.error("平台初始化错误", LTPlatform.platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this._Login();
        // this._InitSystemInfo();
        await this.getSystemInfo();
        if (this.systemInfo.platformVersion >= 1051) {
            // 不需要在进行initAdService
        } else {
            this._base.initAdService({
                appId: platformData.appId,
                isDebug: true,
                success: () => {
                    console.log("oppo广告", "初始化广告服务成功", platformData);
                    // 不提前进行预加载
                    // this._CreateBannerAd();
                    this._CreateVideoAd();
                    // this._CreateInterstitalAd();
                    // this.intersitialAd = new NativeADUnit(platformData.interstitialId);
                    // this.iconNative = new NativeADUnit(platformData.nativeId);
                    // this.nativeAd = new NativeADUnit(platformData.nativeId);
                },
                fail: () => {
                    console.error("oppo广告", "初始化广告服务失败");
                }
            });
        }

        window["iplatform"] = this;
    }
    protected _InitSystemInfo() {
        this.base = this._base;
        try {
            this.systemInfo = this._base.getSystemInfoSync();
            console.log("系统信息已获取", this.systemInfo);

            this.safeArea = this.systemInfo.safeArea as LTGame.SafeArea;
            this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    private async getSystemInfo() {
        this.base = this._base;
        this._base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', this.systemInfo);
                if (!this.safeArea) {
                    this.safeArea = { top: res['notchHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'] - res['notchHeight'], width: res['screenWidth'] }
                }
                this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                console.log(this.safeArea);
            },
            fail: () => { },
            complete: () => {
                this.createGameBox();
            }
        });
    }
    /**
     * 上报数据
     */
    reportMonitor() {
        console.log('oppo上报数据', this.systemInfo);
        if (this.systemInfo && this.systemInfo.platformVersion >= 1060) {
            this._base.reportMonitor('game_scene', 0);
        }
        if (this.onLoginEnd != null) {
            this.onLoginEnd.run();
        }
        Laya.timer.loop(1000, this, this.bannerTimer);
    }

    _CheckUpdate() {

    }

    protected _Login() {
        this.loginState = {
            isLogin: false,
            code: ""
        };
        let loginData = {} as LTGame.LoginData;
        loginData.success = (res) => {
            this._OnLoginSuccess(res);
        };
        loginData.fail = (res) => {
            console.error(LTPlatform.platformStr, "登录失败", res);
            this.loginState.isLogin = false;
            this.loginState.code = "";
        };
        loginData.complete = (res) => {
            if (this.onLoginEnd != null) {
                this.onLoginEnd.run();
            }
        };
        // this._base.login(loginData);
    }

    protected _OnLoginSuccess(res: any) {
        console.log(LTPlatform.platformStr, "登录成功", res);
        this.loginState.isLogin = true;
        this.loginState.code = res.token;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler, onFailed: Laya.Handler) {

    }
    protected _InitLauchOption() {
        // 绑定onShow事件
        this._base.onShow(this._OnShow);
        this._base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this._base.getLaunchOptionsSync() as LTGame.LaunchOption;
        this._OnShow(res);
    }
    /**
	 * 是否可以创建桌面图标
	 */
    canCreateShortcut(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标是否存在  
                    resolve(res);
                },
                fail: function (err) {
                    reject();
                },
                complete: function () {
                }
            });
        });
    }

    /** 发起创建桌面图标请求 */
    createShortcut(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            let sht = await this.hasShortcutInstalled();
            if (sht == false) {
                let created = false;
                qg['installShortcut']({
                    success: function () {
                        created = (true);
                    },
                    fail: function (err) {
                        created = (false);

                    },
                    complete: function () {
                        resolve(created);
                    }
                })
            } else {
                resolve(false);
            }

        });
    }
    hasShortcutInstalled() {
        return new Promise<boolean>((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: (res) => {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                },
                fail: (err) => {
                    reject();
                },
                complete: () => { }
            });
        });
    }

    protected _CreateInterstitalAd() {
        // if (StringEx.IsNullOrEmpty(this._platformData.interstitialId)) {
        //     console.log("无有效的插页广告ID,取消加载");
        //     return;
        // }
        // this._interstitalFailedCount = 0;
        // let intAdObj = {};
        // intAdObj["adUnitId"] = this._platformData.interstitialId;
        // this._intersitialAd = this._base.createInsertAd(intAdObj);

        // this._intersitialAd.onLoad(() => {
        //     console.log("插页广告加载成功");
        //     this._isInterstitialLoaded = true;
        // });
        // this._intersitialAd.onClose(() => {
        //     console.log("插页广告关闭");
        //     this._isInterstitialLoaded = false;
        //     this._intersitialAd.load();
        // });
        // this._intersitialAd.onError((err) => {
        //     this._interstitalFailedCount++;
        //     console.error("插页广告加载失败", err);
        //     if (this._interstitalFailedCount > 10) {
        //         console.log("第", this._interstitalFailedCount, "次重新加载插页广告");
        //         // 失败自动加载广告
        //         this._intersitialAd.load();
        //     }
        // });
    }

    protected _CreateVideoAd() {
        if (!this._cacheVideoAD) {
            console.log("当前策略为不缓存视频广告");
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
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
        videoObj["adUnitId"] = this.platformData.rewardVideoId;
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

    IsBannerAvaliable() {
        return this.noAdTime <= 0;
    }
    IsVideoAvaliable() {
        return this._isVideoLoaded;
    }
    IsInterstitalAvaliable() {
        return false;// LTSDK.instance.isADEnable && this._isInterstitialCanShow && CommonSaveData.instance.interstitialCount < 888;
    }
    IsNativeAvaliable() {
        return this.noAdTime <= 0;
    }
    bannerTimer() {
        this.noAdTime--;
    }
    async ShowBannerAd() {
        // 先尝试展示普通banner
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            console.log('banner 审核中');
            return;
        }
        if (!this.IsBannerAvaliable()) {
            console.log("banner 尚未准备好", this.noAdTime);
            return;
        }
        if (StringEx.IsNullOrEmpty(this.platformData.bannerId)) {
            console.log("无有效的banner广告ID,取消加载");
            return;
        }
        if (this._bannerAd) {
            this._bannerAd.show();
            this.noAdTime = 5;
            console.log('展示已有banner');
            return;
        }
        this.HideBannerAd();
        this._bannerAd = this._base.createBannerAd(
            {
                adUnitId: this.platformData.bannerId
            });
        let isBannerLoading: boolean = true;
        let loadSuccess: boolean = false;
        this._bannerAd.show().then((res) => {
            console.log("banner加载成功", res);
            if (res['code'] == 0) {
                loadSuccess = true;
            }
            isBannerLoading = false;
        }).catch((res) => {
            console.error("banner加载失败", res);
            isBannerLoading = false;
        })
        while (isBannerLoading) {
            await Awaiters.NextFrame();
        }
        if (loadSuccess) return;

        console.log("banner展示失败,展示native广告");
        // 销毁广告
        if (this._bannerAd) {
            this._bannerAd.destroy();
            this._bannerAd = null;
        }

        // 没有则展示原生
        for (let i = 0; i < this.platformData.nativeIconIds.length; ++i) {
            let ret = await this._ShowNativeBanner(i);
            if (ret) {
                break;
            }
            this._bannerAd.destroy();
        }
    }


    private async _ShowNativeBanner(index: number) {
        let nativeBanner = this.base.createNativeAd({
            adUnitId: this.platformData.nativeBannerIds[index]
        });
        // 转接对象
        this._bannerAd = nativeBanner;

        let loadRet = await nativeBanner.load();
        if (loadRet["code"] == 0) {
            // 加载成功
            let adList = loadRet['adList'] as any[];
            if (adList == null || adList.length == 0) {
                console.error("native banner加载失败", loadRet);
                return false;
            }
            let adData = adList[0] as {
                adId: string,
                imgUrlList: string[],
                logoUrl: string,
                icon: string
            };
            if (adData == null) {
                console.error("native banner加载失败", loadRet);
                return false;
            }
            let fakeData = new FakeBannerData();
            fakeData.imgPath = adData.imgUrlList[0];
            fakeData.noticePath = adData.logoUrl;
            fakeData.adId = adData.adId;
            fakeData.owner = this._bannerAd;
            fakeData.iconPath = adData.icon;
            UI_ImageBannerMediator.instance.Show(fakeData);
            return true;
        } else {
            console.error("native banner加载失败", loadRet);
            return false;
        }
    }

    HideBannerAd() {
        if (this._bannerAd) {
            this._bannerAd.destroy();
            this._bannerAd = null;
        }
        UI_ImageBannerMediator.instance.Hide();
    }
    async ShowNativeAd() {
        this.noAdTime = 5;
        // await this._ShowNative();
    }
    HideNativeAd() {
        if (!this.IsNativeAvaliable()) {
            return;
        }
        // this._HideNative();
    }
    // isNativeInterstitialAvaliable(){
    //     return this.intersitialAd.canShowAD
    // }

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

    protected _DoNoCacheShowVideo(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        if (StringEx.IsNullOrEmpty(this.platformData.rewardVideoId)) {
            console.log("无有效的视频广告ID,取消加载");
            this._rewardSkipped?.run();
            return;
        }
        let createRewardedVideoAd = this._base["createRewardedVideoAd"];
        if (createRewardedVideoAd == null) {
            console.error("无createRewardedVideoAd方法,跳过初始化");
            this._rewardSkipped?.run();
            return;
        }
        if (this._rewardVideo) {
            this._rewardVideo.destroy();
        }
        LTUI.ShowLoading("广告拉取中...");
        let videoObj = {};
        videoObj["adUnitId"] = this.platformData.rewardVideoId; // "adunit-5631637236cf16b6";
        this._rewardVideo = createRewardedVideoAd(videoObj);
        console.log("广告创建完成", videoObj);
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

        this._rewardVideo.onError((err) => {
            console.log("广告组件出现问题", err);
            LTUI.HideLoading();

            LTUI.Toast("暂无广告");
            if (this._rewardSkipped) this._rewardSkipped.run();
        });
        this._rewardVideo.onLoad((res) => {
            console.log("广告加载成功", res);
            LTUI.HideLoading();
        });
        this._rewardVideo.load().then(() => {
            this._rewardVideo.show();
        });


    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        if (this._cacheVideoAD) {
            this._DoCacheShowVideo(onSuccess, onSkipped);
        } else {
            this._DoNoCacheShowVideo(onSuccess, onSkipped);
        }

    }

    private async _ShowNativeInterstital(index: number): Promise<boolean> {
        return;
        // let nativeAd = this._base.createNativeAd({
        //     adUnitId: this.platformData.nativeinterstitialIds[index]
        // });
        // // 转接对象
        // this._intersitialAd = nativeAd;

        // let loadRet = await nativeAd.load();
        // if (loadRet["code"] == 0) {
        //     // 加载成功
        //     let adList = loadRet['adList'] as any[];
        //     if (adList == null || adList.length == 0) {
        //         console.error("native 插页 加载失败", loadRet);
        //         return false;
        //     }
        //     let adData = adList[0] as {
        //         adId: string,
        //         imgUrlList: string[],
        //         logoUrl: string,
        //         icon: string,
        //         title: string,
        //         desc: string
        //     };
        //     console.log('广告数据加载完成', loadRet);

        //     if (adData == null) {
        //         console.error("native 插页 加载失败", loadRet);
        //         return false;
        //     }
        //     let fakeData = new FakeInterstitalData();
        //     fakeData.imgPath = adData.imgUrlList[0];
        //     fakeData.noticePath = adData.logoUrl;
        //     fakeData.adId = adData.adId;
        //     fakeData.desc = adData.desc;
        //     fakeData.iconPath = adData.icon;
        //     fakeData.title = adData.title;
        //     fakeData.owner = nativeAd;
        //     UI_NativeInterstitialMediator.instance.Show(fakeData);
        //     return true;
        // } else {
        //     console.error("native 插页 加载失败", loadRet);
        //     return false;
        // }
    }

    public async _ShowNormalInterstitalAd(): Promise<boolean> {
        return;
        // if (this._intersitialAd) {
        //     this._intersitialAd.destroy();
        // }
        // if (this.systemInfo.platformVersion < 1061) {
        //     console.log("平台版本号不足1061,无法创建普通插页", this.systemInfo.platformVersion);
        //     return false;
        // }
        // console.log("创建普通插页", this.platformData.interstitialId);
        // this._intersitialAd = this._base.createInterstitialAd(
        //     {
        //         adUnitId: this.platformData.interstitialId
        //     }
        // );
        // let isloading = true;
        // let isSuccess = false;
        // this._intersitialAd.load()
        //     .then((res) => {
        //         console.log("普通插页加载成功", res);
        //         isloading = false;
        //         isSuccess = res['code'] == 0;
        //     })
        //     .catch((res) => {
        //         console.error("普通插页加载失败", res);
        //         isloading = false;
        //         isSuccess = false;
        //     });
        // while (isloading) {
        //     await Awaiters.Frames(1);
        // }
        // if (!isSuccess) {
        //     return false;
        // }

        // isloading = true;
        // this._intersitialAd.show()
        //     .then((res) => {
        //         console.log("普通插页展示成功", res);
        //         isloading = false;
        //         isSuccess = res['code'] == 0;
        //     })
        //     .catch((res) => {
        //         console.error("普通插页展示失败", res);
        //         isloading = false;
        //         isSuccess = false;
        //     });
        // while (isloading) {
        //     await Awaiters.Frames(1);
        // }
        // return isSuccess;
    }

    async ShowInterstitalAd() {
        return;
        // if (!this.IsInterstitalAvaliable()) {
        //     console.error(`插页广告不能展示 冷却中：${this._isInterstitialCanShow} 展示次数${CommonSaveData.instance.interstitialCount}`);
        //     return;
        // }
        // if (this._intersitialAd) {
        //     this._intersitialAd.destroy();
        //     UI_NativeInterstitialMediator.instance.Hide();
        // }

        // // 先拉去原生插屏(一个)
        // if (this.platformData.nativeinterstitialIds.length > 0) {
        //     let ret = await this._ShowNativeInterstital(0);
        //     if (ret) {
        //         this._DisableInterstitalAd();
        //         return;
        //     }
        // }

        // // 失败则拉取正常插屏
        // let ret = await this._ShowNormalInterstitalAd();
        // if (ret) {
        //     CommonSaveData.instance.interstitialCount++;
        //     CommonSaveData.SaveToDisk();
        //     this._DisableInterstitalAd();
        //     return;
        // }

        // // 失败再继续拉取剩余原生插屏
        // for (let i = 1; i < this.platformData.nativeinterstitialIds.length; ++i) {
        //     let ret = await this._ShowNativeInterstital(i);
        //     if (ret) {
        //         this._DisableInterstitalAd();
        //         return;
        //     }
        // }
    }

    private async _DisableInterstitalAd() {
        this._isInterstitialCanShow = false;
        await Awaiters.Seconds(60);
        this._isInterstitialCanShow = true;
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
    /** 发起创建桌面图标请求 */
    protected CreatShortcut() {
        return new Promise((resolve, reject) => {
            qg['hasShortcutInstalled']({
                success: function (res) {
                    // 判断图标未存在时，创建图标
                    if (res == false) {
                        qg['installShortcut']({
                            success: function () {
                                resolve();
                            },
                            fail: function (err) {
                                reject();
                            },
                            complete: function () { }
                        })
                    } else {
                        resolve();
                    }
                } as any,
                fail: function (err) {
                    reject();
                },
                complete: function () { }
            });
        });
    }
    /**
     * 小游戏回到前台的事件
     */
    protected _OnShow(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnShow", res);
        LTPlatform.instance.lauchOption = res;
        LTPlatform.instance._CheckUpdate();

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
        let loadTask = this._base.loadSubpackage(loadObj);
        loadTask.onProgressUpdate((res) => {
            console.log("分包加载进度", res);

            if (onProgress) {
                onProgress.runWith(res.progress / 100);
            }
        });
    }

    RecordEvent(eventId: string, param: object) {
        console.log("[记录事件]", eventId, param);
    }

    /**
     * 创建分享视频按钮
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     */
    public CreateShareVideoBtn(x: number, y: number, width: number, height: number) {

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
        this._base.showToast(
            {
                title: str,
                duration: 2000
            }
        );
    }
    /**
     * @param appId oppo vivo传包名
     */
    NavigateToApp(appId: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: appId,
                path: path,
                extraData: extra,
                success: function () {
                    resolve(true);
                    console.log('oppo小游戏跳转成功');
                },
                fail: function (res) {
                    reject(false);
                    console.log('oppo小游戏跳转失败：', JSON.stringify(res));
                }
            });
        })
    }
    canshowBox = false;
    createGameBox() {
        if (!this.platformData.gameBoxAdId) {
            return console.error("没有配置盒子广告ID");
        }

        if (LTPlatform.instance.systemInfo.platformVersionCode >= 1076) {
            this.oppoBoxAd = LTPlatform.instance.base.createGamePortalAd({
                adUnitId: this.platformData.gameBoxAdId
            });
            this.oppoBoxAd.onLoad(() => {
                console.log('互推盒子加载成功');
                this.canshowBox = true;
            });
            this.oppoBoxAd.onError((err) => {
                console.log(err);
                this.canshowBox = false;

            })
            this.oppoBoxAd.onClose(() => {
                this.canshowBox = false;
                this.oppoBoxAd.load();
                console.log('互推盒子九宫格广告关闭');
            });
            this.oppoBoxAd.load();
        } else {
            console.log('快应用平台版本号低于1076，暂不支持互推盒子相关 API');
        }

    }
    OpenGameBox(appIds?: string[]) {
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            return;
        }
        if (!this.oppoBoxAd) {
            this.createGameBox();
        }
        if (this.oppoBoxAd) {
            if (this.canshowBox) {
                this.oppoBoxAd.show();
            } else {
                this.oppoBoxAd.load().then(() => {
                    this.oppoBoxAd.show();
                }).catch(e => {
                    console.log(e);
                });
            }
        }
        // else {
        //     this.oppoBoxAd.destroy();
        //     this.createGameBox();
        // }
    }

    private createGameBannerAd() {
        if (LTPlatform.instance.systemInfo.platformVersionCode >= 1076) {
            this.oppoBoxBannerAd = LTPlatform.instance.base.createGameBannerAd({
                adUnitId: this.platformData.gameBoxBannerId
            });
            this.oppoBoxBannerAd.onLoad(() => {
                console.log('互推横幅加载成功');
            });
        } else {
            console.log('快应用平台版本号低于1076，暂不支持互推盒子相关 API');
        }

    }
    showGameBoxBannerAd() {
        this.HideBannerAd();
        if (this.oppoBoxBannerAd) {
            this.oppoBoxBannerAd.show();
        } else {
            this.createGameBannerAd();
            this.oppoBoxBannerAd.show();
        }
    }
    hideGameBoxBannerAd() {
        if (this.oppoBoxBannerAd) {
            this.oppoBoxBannerAd.hide();
        }
    }
    getNativeAd(adid: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            let nativeAd = this.base.createNativeAd({
                adUnitId: adid
            });
            nativeAd.offLoad();
            nativeAd.offError();
            nativeAd.onLoad((res) => {
                console.log('原生广告加载完成 触发', (res));

                if (res && res.adList) {
                    let data = res.adList[0];
                    data.show_reported = false;
                    data.click_reported = false;
                    resolve({
                        ad: nativeAd,
                        data: data
                    });
                }
            }
            );
            nativeAd.onError((err) => {
                console.log("原生广告加载异常", err);

                resolve(null);
            });
            nativeAd.load();
        });

    }
}
export interface OppoAdData {
    adId: string;
    clickBtnTxt: string;
    creativeType: number;
    desc: string;
    icon: string;
    iconUrlList: Array<string>;
    imgUrlList: Array<string>;
    interactionType: number;
    logoUrl: string;
    title: string;
    /** 是否已上报展示 */
    show_reported?: boolean,
    /** 是否已上报点击 */
    click_reported?: boolean,
    source?: string
}

