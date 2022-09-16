import DefaultPlatform from "../../DefaultPlatform";
import { EPlatformType } from "../../EPlatformType";
import LTPlatformData from "../../Data/LTPlatformData";
import CommonSaveData from "../../../Commom/CommonSaveData";
import AudioManager from "../../../../script/manager/AudioManager";
import LTPlatform from "../../LTPlatform";

 

export default class HTML4399Platform extends DefaultPlatform {
    platform = EPlatformType.HTML4399;
    Init(platformData: LTPlatformData) {
        this.base = Laya.Browser.window.h5api;
        if (this.base == null) {
            console.error("平台初始化错误");
            return;
        }
        this.platformData = platformData;
        this._InitSystemInfo();
        // this._login();
        window["iplatform"] = this;
    }
    protected _InitSystemInfo() {
        try {

            this.safeArea = {} as LTGame.SafeArea;
            this.safeArea.left = 0;
            this.safeArea.right = 0;
            this.safeArea.bottom = 0
            this.safeArea.top = 0;
            this.safeArea.width = 750;
            this.safeArea.height = 1334;
            console.log("初始化安全区域完成");
        } catch (e) {
            console.error(e);
            console.error("获取设备信息失败,执行默认初始化");
            this.safeArea = null;
        }
    }
    private _login() {
        if (!this.base.isLogin()) {
            this.base.login((data) => {
                /* data = {
                    uId: 1234567, // 用户编号
                    userName: '昵称', // 用户昵称
                } */
                console.log("4399登录成功");
                let avatar = '';
                if (data.uId) {
                    avatar = this.base.getUserSmallAvatar(data.uId);
                }

                CommonSaveData.instance.nickName = data.userName;
                CommonSaveData.instance.avatarUrl = avatar;
                CommonSaveData.SaveToDisk();
            });
        }
    }
    ShowRewardVideoAd(onSuccess: Laya.Handler, onSkipped: Laya.Handler, onFailed: Laya.Handler) {
        this.base.canPlayAd((data) => {
            console.error(data);

            this.base.playAd((obj) => {
                console.error(obj);
                if (obj.code === 10000) {
                    console.log('开始播放');
                    AudioManager.instance.Pause();
                } else if (obj.code === 10001) {
                    onSuccess?.run();
                    AudioManager.instance.Resume();

                    console.log('播放结束')
                } else {
                    onSkipped?.run();
                    AudioManager.instance.Resume();
                    console.log('广告异常')
                }
            });

        });

    }
    ShowRewardVideoAdAsync(): Promise<boolean> {
        return new Promise(function (resolve) {
            LTPlatform.instance.ShowRewardVideoAd(Laya.Handler.create(this, () => {
                resolve(true);
            }), Laya.Handler.create(this, () => {
                resolve(false);
            }), Laya.Handler.create(this, () => {
                resolve(null);
            }));
        });
    }
    ShowToast(str: string) {
        this.base.showToast({
            title: str
        });
    }
    ShowBannerAd() { }
    ShowInterstitalAd() { }
    /**
     *  敏感词检测
        10000 没有敏感词
        10001 有敏感词
        10010 未知异常(如网络问题)
     * @param wordStr 敏感词
     */
    checkWords(wordStr: string) {
        this.base.checkWord(wordStr, function (data) {
            console.log('检查状态', data.code, data.words)

        });
    }
    /**
    * 展示排行榜面板
    */
    showRankList() {
        this.base.showRankList()
    }
    /**
         * 
         * @param rankId 排行榜ID
         * @param score 分数
         * @param callback 回调
         */
    submitRankScore(rankId: number, score: number, callback: () => void) {
        this.base.submitRankScore(rankId, score, callback);
    }
    /**
     * 分享
     */
    share() {
        this.base.share();
    }
    OpenGameBox() {
        this.base.showRecommend();
    }
    RecordEvent() { }
}