import DefaultPlatform from "../../DefaultPlatform";
import LTPlatformData from "../../Data/LTPlatformData";
import DefaultRecordManager from "../../DefaultRecordManager";
import DefaultDevice from "../../DefaultDevice";
import { EPlatformType } from "../../EPlatformType";
var gamebox = window['gamebox'];
export default class Gamebox4399Platform extends DefaultPlatform {
    platform: EPlatformType = EPlatformType.Gamebox4399;
    interstitialAd: any;
    rewardAd: any;
    Init(platformData: LTPlatformData) {
        this.base = gamebox;
        this.platformData = platformData;
        this._login();
        this._InitSystemInfo();
        this.recordManager = new DefaultRecordManager();
        this.device = new DefaultDevice();
    }
    _login() {
        console.log('gamebox.login');
        let loginObj = {
            success: (res) => {
                if (res.code) {
                    //发起网络请求
                    gamebox.request({
                        url: 'https://test.com/onLogin',
                        data: {
                            code: res.code
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        }
        gamebox.checkSession({
            success: () => {
                //session_key 未过期，并且在本生命周期一直有效
            },
            fail: () => {
                // session_key 已经失效，需要重新执行登录流程
                gamebox.login(loginObj)//重新登录
            }
        });

    }
    protected _InitSystemInfo() {
        try {
            console.log(window.innerWidth, window.innerHeight)
            this.safeArea = {} as LTGame.SafeArea;
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = window.innerHeight
            this.safeArea.top = 0;
            this.safeArea.width = window.innerWidth;
            this.safeArea.height = window.innerHeight - this.safeArea.top;
            console.log("初始化安全区域完成");
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler, onFailed: Laya.Handler) {
        if (!this.rewardAd) {
            this.rewardAd = gamebox.createRewardedVideoAd();
            //监听 激励视频 广告加载事件回调函数
            const onLoadCb = (res) => { console.info('RewardedVideo onLoad' + res) };
            //监听 激励视频 广告错误事件回调函数
            const onErrorCb = (res) => {
                console.info('RewardedVideo onError' + res);
                onFailed.run();
            };
            //监听 激励视频 广告关闭事件回调函数
            const onCloseCb = (res) => { 
                console.info('RewardedVideo onClose' + JSON.stringify(res));
                if (res.isEnded) {
                    onSuccess.run();
                } else {
                    onSkipped.run();
                }
            };
            //监听 激励视频 广告播放完毕事件回调函数
            const onCompletedCb = (res) => {
                console.info('RewardedVideo onCompleted' + JSON.stringify(res)) 
            };
            this.rewardAd.onError(onErrorCb)
            this.rewardAd.onLoad(onLoadCb);
            this.rewardAd.onClose(onCloseCb);
            this.rewardAd.onCompleted(onCompletedCb)
        }
        this.rewardAd.show().catch(() => {
            // 失败重试
            this.rewardAd.load()
                .then(() => this.rewardAd.show())
                .catch(err => {
                    console.log('激励视频 广告显示失败', err)
                })
        })

    }
    ShowInterstitalAd() {
        if (!this.interstitialAd) {
            //监听 InterstitialAd 广告加载事件回调函数
            this.interstitialAd = gamebox.createInterstitialAd();
            const onLoadCb = (res) => { console.info('InterstitialAd onLoad' + res) }
            //监听 InterstitialAd 广告关闭回调函数
            const onCloseCb = (res) => { console.info('InterstitialAd onClose' + res) }
            //监听 InterstitialAd 广告错误事件回调函数
            const onErrorCb = (res) => { console.info('InterstitialAd onError' + res) }
            //监听 InterstitialAd 广告加载事件
            this.interstitialAd.onLoad(onLoadCb)
            //监听 InterstitialAd 广告关闭
            this.interstitialAd.onClose(onCloseCb)
            //监听 InterstitialAd 广告错误
            this.interstitialAd.onError(onErrorCb)
        }

        this.interstitialAd.show().catch(() => {
            // 失败重试
            this.interstitialAd.load()
                .then(() => this.interstitialAd.show())
                .catch(err => {
                    console.log('InterstitialAd 广告显示失败', err)
                })
        });

    }

    LoadSubpackage(name: string, onSuccess: Laya.Handler, onFailed: Laya.Handler, onProgress: Laya.Handler) {
        const loadTask = gamebox.loadSubpackage({
            name: name, // name 可以填 name 或者 root
            success: (res) => {
                // 分包加载成功后通过 success 回调
                onSuccess.run();
            },
            fail: (res) => {
                // 分包加载失败通过 fail 回调
                onFailed.run();
            }
        })

        loadTask.onProgressUpdate(res => {
            console.log('下载进度', res.progress)
            console.log('已经下载的数据长度', res.totalBytesWritten)
            console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
            onProgress.runWith(res);
        })
    }
}