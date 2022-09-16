import AudioManager from "../../script/manager/AudioManager";
import Awaiters from "../Async/Awaiters";
import LTUI from "../UIExt/LTUI";
import LTPlatformData from "./Data/LTPlatformData";
import { VivoDevice } from "./DefaultDevice";
import DefaultPlatform from "./DefaultPlatform";
import DefaultRecordManager from "./DefaultRecordManager";
import { EPlatformType } from "./EPlatformType";
import { IDevice } from "./IDevice";
import IRecordManager from "./IRecordManager";
import LTPlatform from "./LTPlatform";
import { ShareInfo } from "./ShareInfo";

export default class VivoPlatform extends DefaultPlatform {
    userInfo: LTGame.UserInfo;
    isIOS: boolean = false;
    base: any;
    platformData: LTPlatformData;
    onPause: Laya.Handler;
    appId: string;
    platform: EPlatformType = EPlatformType.Vivo;
    safeArea: LTGame.SafeArea = null;
    lauchOption: LTGame.LaunchOption;
    loginState: LTGame.LoginState;
    onLoginEnd: Laya.Handler;
    onResume: Laya.Handler;
    recordManager: IRecordManager = new DefaultRecordManager();
    device: IDevice = new VivoDevice();
    systemInfo: any = null;
    boxBannerAd: any;
    private _banner: any;
    private _rewardVideo: any;

    /**
     * 是否支持直接跳转到其他小程序
     * 默认平台进行强制fake true,方便进行调试
     */
    isSupportJumpOther: boolean = true;
    _cacheScreenScale: number;
    _rewardSuccessed: Laya.Handler;
    _rewardSkipped: Laya.Handler;

    Init(platformData: LTPlatformData) {
        this.loginState = {
            isLogin: false,
            code: null
        };
        this.base = window["qg"];
        if (this.base == null) {
            console.error("平台初始化错误", LTPlatform.platformStr);
            return;
        }
        this.platformData = platformData;
        this._InitLauchOption();
        this.getSystemInfo();
        this.createVideo();
    }
    protected _InitLauchOption() {
        // 绑定onShow事件
        this.base.onShow(this._OnShow);
        this.base.onHide(this._OnHide);
        // 自动获取一次启动参数
        let res = this.base.getLaunchOptionsSync() as LTGame.LaunchOption;
        this._OnShow(res);
    }
    /**
     * 小游戏回到前台的事件
     */
    protected _OnShow(res: LTGame.LaunchOption) {
        console.log(LTPlatform.platformStr, "OnShow", res);
        LTPlatform.instance.lauchOption = res;
        LTPlatform.instance._CheckUpdate();
        AudioManager.instance.Resume();
        Awaiters.NextFrame().then(() => {
            if (LTPlatform.instance.onResume) {
                LTPlatform.instance.onResume.runWith(res);
            }
            let cacheOnShow = LTPlatform.instance["_cacheOnShowHandle"];
            console.log(cacheOnShow);
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
        AudioManager.instance.Pause();
        if (LTPlatform.instance.onPause) {
            LTPlatform.instance.onPause.runWith(res);
        }

    }
    getSystemInfo() {
        this.base.getSystemInfo({
            success: (res) => {
                this.systemInfo = res;
                console.log('systeminfo', this.systemInfo);
                if (!this.safeArea) {
                    this.safeArea = { top: res['statusBarHeight'], bottom: res['screenHeight'], left: 0, right: res['screenWidth'], height: res['screenHeight'], width: res['screenWidth'] }
                }
                this._cacheScreenScale = this.systemInfo.screenWidth / Laya.stage.width;
                console.log(this.safeArea);
                if (res['platformVersionCode'] >= 1053) {
                    this.base.login({
                        success: (res) => {
                            console.log('vovo登陆成功', res)
                            this.loginState.isLogin = true;
                            this.loginState.code = res.token;
                            this.onLoginEnd && this.onLoginEnd.run();
                        },
                        fail: () => {
                            console.log('vovo登陆失败')
                        }
                    })
                }
            },
            fail: () => { },
            complete: () => { }
        });
    }

    IsBannerAvaliable(): boolean {
        return;
    }
    IsVideoAvaliable(): boolean {
        return;
    }
    IsInterstitalAvaliable(): boolean {
        return;
    }
    ShowInterstitalAd() {
        console.log('todo');
        let interad = this.base.createInterstitialAd({
            posId: this.platformData.interstitialId
        });
        if (interad) {
            interad.show();
        }
    }

    ShowBannerAd() {
        if (this._banner) {
            this._banner.show();
            console.log('展示已有banner');
            return;
        }
        this.HideBannerAd();
        this._banner = this.base.createBannerAd({
            posId: this.platformData.bannerId
        });
        let isBannerLoading: boolean = true;
        let loadSuccess: boolean = false;
        this._banner.show().then((res) => {
            console.log("banner加载成功", res);
            if (res['code'] == 0) {
                loadSuccess = true;
            }
            isBannerLoading = false;
        }).catch((res) => {
            console.error("banner加载失败", res);
            isBannerLoading = false;
        })
    }
    HideBannerAd() {
        if (this._banner) {
            this._banner.hide();
        }
    }

    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler) {
        this._rewardSuccessed = onSuccess;
        this._rewardSkipped = onSkipped;
        return new Promise<void>(async (resolve, reject) => {
            AudioManager.instance.Pause();
            if (this._rewardVideo) {
                await this._rewardVideo.load();
                this._rewardVideo.show().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            } else {
                this._rewardVideo = window['qg'].createRewardedVideoAd({
                    posId: this.platformData.rewardVideoId
                });
                this._rewardVideo.onLoad(() => {
                    console.log("视频广告加载成功");
                });
                this._rewardVideo.onError((res) => {
                    console.error("视频广告加载失败", res);
                });
                this._rewardVideo.onClose((res) => {
                    let isEnd = res["isEnded"] as boolean;
                    Awaiters.NextFrame().then(() => {
                        AudioManager.instance.Resume();
                        if (isEnd) {
                            if (this._rewardSuccessed) this._rewardSuccessed.run();
                        } else {
                            if (this._rewardSkipped) this._rewardSkipped.run();
                        }
                    });
                });
                await this._rewardVideo.load();
                this._rewardVideo.show().then(() => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            }
        });
    }
    private createVideo() {
        this._rewardVideo = this.base.createRewardedVideoAd({
            posId: this.platformData.rewardVideoId
        });
        this._rewardVideo.onLoad(() => {

            console.log("视频广告加载成功");
        });
        this._rewardVideo.onError((res) => {
            console.error("视频广告加载失败", res);
        });
        this._rewardVideo.onClose((res) => {
            console.log("视频回调", res);
            let isEnd = res["isEnded"] as boolean;
            Awaiters.NextFrame().then(() => {
                AudioManager.instance.Resume();
                if (isEnd) {
                    if (this._rewardSuccessed) this._rewardSuccessed.run();
                } else {
                    if (this._rewardSkipped) this._rewardSkipped.run();
                }
            });
        });

    }

    GetFromAppId(): string {
        return null;
    }
    ShareAppMessage(obj: ShareInfo, onSuccess: Laya.Handler = null, onFailed: Laya.Handler = null) {
        console.log("分享消息", obj);
        if (onSuccess) {
            onSuccess.run();
        }
    }
    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler) {
        this.base.loadSubpackage({
            name: name,
            success: () => {
                console.log("vivo分包加载完成", `${name}`);
                if (onSuccess) {
                    onSuccess.run();
                }
            },
            fail: (err) => {
                console.error("vivo分包加载出错", err);
                if (onFailed) {
                    onFailed.run();
                }
            },
            complete: () => {
            }
        });
    }

    RecordEvent(eventId: string, param: object) {
        console.log("记录事件", eventId, param);
    }

    ShareVideoInfo() {
        console.log(LTPlatform.platformStr, "暂未实现录屏功能");
    }

    _CheckUpdate() {
        this.base.onUpdateReady(function (res) {
            console.log(`isUpdate--- ${res}`)
            if (res == 1) {
                this.base.applyUpdate();
            }
        });
    }

    ShowToast(str: string) {
        LTUI.Toast(str);
    }

    boxPortalAd: any;
    OpenGameBox() {
        this.HideBannerAd();
        this._banner?.destroy();
        if (this.base.createBoxPortalAd) {
            this.boxPortalAd = this.base.createBoxPortalAd({
                posId: this.platformData.gameBoxAdId,
                marginTop: 200
            });
            this.boxPortalAd.onError(function (err) { console.log("盒子九宫格广告加载失败", err) })
            // 广告数据加载成功后展示
            this.boxPortalAd.show().then(function () { console.log('show success') })
        } else {
            console.log('暂不支持互推盒子相关 API')
        }
    }
    HideGameBox() {
        if (this.boxPortalAd) {
            this.boxPortalAd.destroy();
        }
    }
    NavigateToApp(appid: string, path?: string, extra?: any): Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.error("当前平台", LTPlatform.platformStr, `暂不支持小程序跳转appid:${appid}`);
            // 这里使用resolve
            resolve(false);
        });
    }
    hasShortcutInstalled(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.base.hasShortcutInstalled({
                success: (status) => {
                    if (status) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            })
        });
    }
    createShortcut(): Promise<boolean> {
        console.log('创建桌面图标');
        return new Promise<boolean>((resolve, reject) => {
            this.base.installShortcut({
                success: () => {
                    console.log('创建桌面图标成功');
                    resolve(true);
                }
            });
        });
    }
    GetStorage(key: string) {
        console.log('读本地存储');
        return Laya.LocalStorage.getItem(key);
    }
    SetStorage(key: string, data: any): void {
        console.log('写本地存储');
        Laya.LocalStorage.setItem(key, data);

    }
    followOfficialAccount(): Promise<boolean> {
        console.log('暂不支持');
        return;
    }
    checkFollowState(): Promise<boolean> {
        console.log('暂不支持');
        return;
    }

    SetClipboardData(str: string) {
        this.base.setClipboardData({ data: str });
    }
    showGameBoxBannerAd() {
        if (!this.base.createBoxBannerAd) return;
        if (!this.boxBannerAd) {
            this.createBoxBannerAd();
        }
        this.boxBannerAd.show();

    }
    private createBoxBannerAd() {
        if (this.base.createBoxBannerAd) {
            this.boxBannerAd = this.base.createBoxBannerAd({
                posId: this.platformData.gameBoxBannerId
            });
        } else {
            console.log('暂不支持互推盒子相关 API');
        }
    }

    hideGameBoxBannerAd() {
        if (!this.base.createBoxBannerAd) return;
        if (this.boxBannerAd) {
            this.boxBannerAd.hide();
        }
    }
    getNativeAd(adid: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (!LTPlatform.instance.base.createCustomAd) return resolve(false);

            const customAd = LTPlatform.instance.base.createCustomAd({
                posId: adid,
                style: {
                    left: 0,
                    top: (Laya.stage.height / 2)
                }
            });
            customAd.onError(err => {
                console.log("原生模板广告加载失败", err);
            });
            customAd.show().then(() => {
                console.log('原生模板广告展示完成');
                resolve({
                    ad: customAd,
                    data: null
                });
            }).catch((err) => {
                console.log('原生模板广告展示失败', JSON.stringify(err));
            })
        });


    }
}