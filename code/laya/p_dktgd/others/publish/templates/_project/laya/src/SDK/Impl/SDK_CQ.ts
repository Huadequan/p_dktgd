import { CommonEventId } from "../../LTGame/Commom/CommonEventId";
import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import StringEx from "../../LTGame/LTUtils/StringEx";
import LTHttp from "../../LTGame/Net/LTHttp";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { ShareInfo } from "../../LTGame/Platform/ShareInfo";
import ShareManager from "../../LTGame/Platform/ShareManager";
import TTPlatform from "../../LTGame/Platform/TTPlatform";
import LTUI from "../../LTGame/UIExt/LTUI";
import { ECheckState } from "../common/ECheckState";
import LTSDK from "../LTSDK";
import SDKADManager from "../SDKADManager";
import SDK_Default from "./SDK_Default";

export default class SDK_CQ extends SDK_Default {

    isADConfigInited: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    /**openid */
    uid: string = "sdk_test";
    enableDebug: boolean = true;

    private _headPrefix = "https://games.api.gugudang.com";

    Init(flg: string, channel: string, controlVersion: string, appId: string) {
        super.Init(flg, channel, controlVersion, appId);
        this._RequestShareInfo();
        // this.RecordRankInfo(1, 0); 
    }
    public getToken(): Promise<string> {
        return new Promise<string>((resolve, rej) => {
            if (this.token) {
                resolve(this.token);
            } else {
                let sendData = {
                    appid: LTPlatform.instance.platformData.appId
                };
                LTHttp.Send(`${this._headPrefix}/api/get/youxi/token`, Laya.Handler.create(this, (res) => {
                    console.log(res);
                    res = JSON.parse(res);
                    if (res && res.code == 0) {
                        this.token = res.data.token;
                        resolve(this.token);
                    } else {
                        rej(null);
                    }
                }), null, true, sendData);
            }
        })
    }
    private _RequestShareInfo() {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            uid = LTPlatform.instance.platformData.appKey
        }
        let sendData = {
            appid: uid,
        };
        LTHttp.Send(this._headPrefix + "/api/shares", Laya.Handler.create(this, this._OnRequestShareInfo), Laya.Handler.create(this, (res) => {
            console.log("??????????????????????????????", res);
        }), true, sendData);
    }

    public reportShareInfo(videoId: string, shareId: string) {
        let sendData = {
            appid: this.appId,
            openId: CommonSaveData.instance.uid,
            videoId: videoId,
            shareId: shareId
        };
        try {
            LTHttp.Send(this._headPrefix + "/api/share/video/post", Laya.Handler.create(this, () => {
                console.log('ShareVideo????????????');
            }), Laya.Handler.create(this, (res) => {
                console.log("ShareVideo????????????", res);
            }), true, sendData);
        } catch (error) {
            console.error(error);
        }

    }
    /**
     * ????????????????????? ?????????????????????????????????????????????????????? week_rank_count
     * @param levelID ??????
     * @param score ??????/??????
     */
    public async RecordRankInfo(levelID: number, score: number): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName)) {
                await LTPlatform.instance.getUserInfo();
            }
            if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName)) {
                resolve(false);
                return LTUI.Toast("????????????????????????");
            }

            let appid = this.appId;
            if (LTPlatform.instance.platform == EPlatformType.Oppo) {
                appid = LTPlatform.instance.platformData.appKey
            }
            let sendData = {
                appid: appid,
                openId: LTSDK.instance.uid,
                times: score,
                nickname: CommonSaveData.instance.nickName,
                avatar: CommonSaveData.instance.avatarUrl,
                type: levelID,
                sort: 2
            };
            LTHttp.Send(this._headPrefix + "/api/rank/times", Laya.Handler.create(this, (res) => {
                let re = this._OnRcordRank(res);
                resolve(re);
            }), Laya.Handler.create(this, (res) => {
                console.log("????????????????????????", res);
                resolve(false);
            }), true, sendData);
        })
    }



    private onGetAdlist(res) {
        let adJson = JSON.parse(res);
        if (adJson.code == 1) {
            console.log("?????????????????????", adJson.data.length, "???");
            let fakePosId = 0;
            for (let posAd of adJson.data) {
                let adList = [];
                fakePosId = parseInt(posAd.code);
                for (let ad of posAd.ads) {
                    let adData = {} as SDK.ADInfoData;
                    adData.ad_appid = ad.appid;
                    adData.ad_id = ad.id;
                    adData.ad_img = ad.logo;
                    adData.ad_name = ad.name;
                    adData.ad_path = ad.path;
                    adData.ad_package = ad.path;
                    adData.ad_count = ad.player;
                    adData.ad_dot = ad.dot;
                    adData.ad_device = ad.device;
                    if (adData.ad_appid != this.appId) {
                        adList.push(adData);
                    }
                }
                // ?????????????????????
                adList = adList.sort((a, b) => {
                    return b.ad_count - a.ad_count;
                });
                this.adManager.InitADs(fakePosId, adList);
            }

        }

    }

    /**??????????????? 
     * @param levelID ??????
     * @param score ??????/??????
    * @param onGetList ????????????
     */
    async GetWeekRankList(levelID: number, score: number, onGetList: Function, sort: number = 2, count: number = 30) {
        if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName)) {
            console.error('?????????????????????');
            await LTPlatform.instance.getUserInfo();
        }
        if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName)) {
            return LTUI.Toast("????????????????????????");
        }
        let Record = await this.RecordRankInfo(levelID, score);
        if (!Record) return onGetList(null);
        let appid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            appid = LTPlatform.instance.platformData.appKey
        }
        let sendData = {
            appid: appid,
            openId: LTSDK.instance.uid,
            times: score,
            nickname: CommonSaveData.instance.nickName,
            avatar: CommonSaveData.instance.avatarUrl,
            type: levelID,
            count: count,
            sort: sort
        };
        // LTHttp.Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, this._OnGetRankList), Laya.Handler.create(this, (res) => {
        //     console.log("????????????????????????????????????", res);
        // }), true, sendData);
        LTHttp.Send(this._headPrefix + "/api/rank/week/time", Laya.Handler.create(this, (res) => {
            let data = JSON.parse(res);
            if (data.code == 1) {
                onGetList(data);
            }
        }), Laya.Handler.create(this, (res) => {
            console.log("?????????????????????????????????", res);
            onGetList(null);
        }), true, sendData);

    }
    /**
     * ??????????????? ?????????????????????????????????????????????????????? week_rank_count
     * @param levelID ??????
     * @param score ??????/??????
     * @param onGetList ????????????
     */
    async GetDayRankList(levelID: number, score: number, onGetList: Function, sort: number = 2, count: number = 10) {
        if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName)) {
            console.error('?????????????????????');
            await LTPlatform.instance.getUserInfo();
        }
        if (StringEx.IsNullOrEmpty(CommonSaveData.instance.nickName)) {
            return LTUI.Toast("????????????????????????");
        }
        let Record = await this.RecordRankInfo(levelID, score);
        if (!Record) return onGetList(null);
        let appid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            appid = LTPlatform.instance.platformData.appKey
        }
        let sendData = {
            appid: appid,
            openId: LTSDK.instance.uid,
            times: score,
            type: levelID,
            count: count,
            nickname: CommonSaveData.instance.nickName,
            avatar: CommonSaveData.instance.avatarUrl,
            sort: sort
        };
        LTHttp.Send(this._headPrefix + "/api/rank/day/time", Laya.Handler.create(this, (res) => {
            let data = JSON.parse(res);
            console.log(res);
            if (data.code == 1) {
                onGetList(data);
            }
        }), Laya.Handler.create(this, (res) => {
            console.log("????????????????????????????????????", res);
            onGetList(null);
        }), true, sendData);

    }

    private _OnRcordRank(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("????????????????????????", getObj);
        }
        if (getObj.code == 1) {
            console.log('??????????????????');
            return true;
        } else {
            console.error("??????????????????????????????", getObj);
            return false;
        }
    }
    private _OnGetRankList(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("????????????????????????", getObj);
        }
        if (getObj.code == 1) {
            console.log('??????????????????');
        } else {
            console.error("??????????????????????????????", getObj);
        }
    }
    private _OnRequestShareInfo(res) {
        let getObj = JSON.parse(res);
        if (this.enableDebug) {
            console.log("??????????????????", getObj);
        }
        if (getObj.code == 1) {
            let shareInfo = getObj.data as SDK.ShareData_CQ;
            if (shareInfo == null) {
                console.log("?????????????????????????????????");
                return;
            }
            let wrapShareInfo = new ShareInfo();
            wrapShareInfo.shareId = shareInfo.id;
            wrapShareInfo.shareImg = shareInfo.picurl;
            wrapShareInfo.shareTitle = shareInfo.title;
            ShareManager.instance.AddShareInfo(wrapShareInfo);
        } else {
            console.error("????????????????????????", getObj);
        }
    }


    ReportShowAd(adList: SDK.ADReportShowData[]) {
        console.log("??????????????????");
    }

    ReportClickAd(adid: number, locationId: number, jumpSuccess: boolean, scene: string = 'defalut_scene') {
        let appid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            appid = LTPlatform.instance.platformData.appKey;
        }
        let sendData = {
            appid: appid,
            openId: LTSDK.instance.uid,
            adId: adid,
            code: locationId,
            scene: scene,
            status: jumpSuccess ? 1 : 0
        }

        LTHttp.Send(this._headPrefix + "/ads/click/post", Laya.Handler.create(this, (res) => {
            console.log("????????????????????????", res);
        }), Laya.Handler.create(this, (res) => {
            console.log("????????????????????????", res);
        }), true, sendData);
    }

    RequestADList() {
        let sendData = {
            appid: LTPlatform.instance.platform == EPlatformType.Oppo ? LTPlatform.instance.platformData.appKey : this.appId,
            openId: LTSDK.instance.uid
        }
        if (LTPlatform.instance.platform == EPlatformType.TT) {
            sendData.appid = "88888888";
        }
        if (LTPlatform.instance.platform == EPlatformType.WX || LTPlatform.instance.platform == EPlatformType.Web) {
            sendData.appid = "wx88888888";
        }
        LTHttp.Send(this._headPrefix + "/ads/get", Laya.Handler.create(this, this.onGetAdlist), Laya.Handler.create(this, (res) => {
            console.log("????????????????????????", res);
        }), true, sendData);
    }

    RequestRemoteConfig() {
        let uid = this.appId;
        if (LTPlatform.instance.platform == EPlatformType.Oppo || LTPlatform.instance.platform == EPlatformType.Vivo) {
            uid = LTPlatform.instance.platformData.appKey;
        }
        let sendData = {
            appid: uid,
            version: this.controlVersion
        }

        LTHttp.Send(this._headPrefix + "/api/game/config", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }

    /**
     * ????????????????????????
     * @param res 
     */
    private _OnRemoteConfigBack(res: any) {
        // ????????????????????????
        if (res.status == null) {
            res = JSON.parse(res as string);
        }
        if (this.enableDebug)
            console.log("??????????????????:", res);
        this.configs.isADEnable = false;
        this.isConfigEnable = true;
        if (res.code == 1) {
            // ??????
            let result = res.data;
            if (result) {
                console.log('??????????????????????????? ???????????? ');

                if (result['payRate']) {
                    this.configs.payRate = parseInt(result['payRate']);
                }
                if (result['isDelayClose']) {
                    this.configs.isDelayClose = (result['isDelayClose']) == "1";
                }
                if (result['isShielding']) {
                    this.configs.isShielding = "1" == (result['isShielding']);
                }
                if (result["isADEnable"]) {
                    this.configs.isADEnable = "1" == (result["isADEnable"]);
                }
                if (result['isNavEnable']) {
                    this.configs.isNavEnable = result['isNavEnable'] == '1';
                }
                if (result["gamecenterLevel"]) {
                    this.configs.gamecenterLevel = parseInt(result['gamecenterLevel']);
                }
                if (result['nativePayRate']) {
                    this.configs.nativePayRate = parseInt(result['nativePayRate']);
                }
                if (result['nativeClickCount']) {
                    this.configs.nativeClickCount = parseInt(result['nativeClickCount']);
                }
                if (result['changeEnable']) {
                    this.configs.changeEnable = result['changeEnable'] == '1';
                }
                if (result["gamecenterLevel"]) {
                    this.configs.gamecenterLevel = parseInt(result['gamecenterLevel']);
                }
                if (result['navLevels']) {
                    let arr = (result['navLevels']).split(',');
                    for (let item in arr) {
                        this.navLevels.push(parseInt(arr[item]));
                    }
                }
                if (result['checkState']) {
                    this.checkState = parseInt(result['checkState']) as ECheckState;
                } else {
                    this.checkState = LTPlatform.instance.platform == EPlatformType.Oppo ? ECheckState.InCheck : ECheckState.Normal;
                }
                if (result['nowtime']) {
                    this.configs.severTime = result['nowtime'];
                }
                if (result['shieldHours']) {
                    this.configs.shieldHours = result['shieldHours'].split(',');
                }
            } else {
                console.log("????????????????????????,?????????????????????");
            }
        }
        else {
            // ??????
            console.error("????????????????????????", res);
        }

        this._UpdateCheckState();
        if (this.controlVersion) {
            this.RequestADList();
        }
        this.isADConfigInited = true;
        Laya.stage.event(CommonEventId.AD_CONFIG_GETTED);
    }

    public _UpdateCheckState() {
        console.log('??????--??????????????????', `????????????:${ECheckState[this.checkState]}`);
        if (this.isShielding || this.checkState == ECheckState.InCheck) {
            //???????????? 
            this.configs.payRate = 0;
            this.configs.nativeClickCount = 0;
            this.configs.nativePayRate = 0;
            this.configs.changeEnable = false;
            this.navLevels = [];
            this.configs.gamecenterLevel = 1000;
        } else {
            //????????????????????? 
            let date = this.configs.severTime.substr(0, 10).replace(/\-/g, '');
            //2021-04-25 11:41:11
            let h = this.configs.severTime.substr(11, 2);
            let isHoliday = this.configs.holiday != 0;
            if (isHoliday) {
                console.log('????????????', date, h);
            } else {
                console.log('?????????', date, h);
                if (this.configs.shieldHours && this.configs.shieldHours.indexOf(h) >= 0) {
                    console.log('??????', this.configs.shieldHours, h);
                    // this.payRate = 0;
                    this.navLevels = [];
                }
            }
        }
        console.log(`${this.appId}---???????????????:${this.controlVersion}`, "???????????????", this.configs);
    }

    Login(code: string, fromAppId: string) {
        console.log('???????????????code:', code);
        let appid = (LTPlatform.instance.platform == EPlatformType.Oppo || LTPlatform.instance.platform == EPlatformType.Vivo) ? LTPlatform.instance.platformData.appKey : this.appId;
        let sendData = {
            appid: appid,
            // flg: this.flg,
            code: code,
            channel: 'own',
            version: this.controlVersion
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["fappid"] = fromAppId;
        }
        LTHttp.Send(this._headPrefix + "/api/login", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }

    private _OnAuthSuccess(res: any) {
        if (this.enableDebug)
            console.log("SDK??????????????????", res);

        res = JSON.parse(res);
        if (res.code == 1) {
            // ??????
            this._OnLoginSuccess(res);
        } else {
            this._OnLoginFailed(res);
        }
    }

    private _OnLoginSuccess(res: SDK.LoginSuccessParam) {
        console.log("SDK????????????", res);
        this.uid = res.openid;
        CommonSaveData.instance.uid = res.openid;
        CommonSaveData.SaveToDisk();
        this.ReportDaily();
        this.reportFromVideo();
    }

    private _OnLoginFailed(res: SDK.LoginResult) {
        console.error("SDK????????????", this.appId, res);
        this.ReportDaily();
        this.reportFromVideo();
    }
    /**????????????????????????*/
    reportFromVideo() {
        // if (!this.reportEnable) return;
        if (LTPlatform.instance.platform == EPlatformType.TT && (LTPlatform.instance as TTPlatform).isDouyin) {
            try {
                let query = LTPlatform.instance.lauchOption.query as any;
                let fromId = 'ytlj';
                let shareId = `ytlj_scene|${LTPlatform.instance.lauchOption.scene}`;
                let fromChannel = 'own';
                if (query) {
                    if (query.openId) {
                        fromId = query.openId;
                    }
                    if (query.shareId) {
                        shareId = query.shareId;
                    }
                    if (query.channelId) {
                        fromChannel = query.channelId;
                    }
                    if (fromChannel == 'own' || fromChannel == 'undefined') {
                        return console.log('?????????????????????');
                    }
                    let sendData = {
                        appid: this.appId,
                        fromId: `${fromId}|${fromChannel}`,
                        openId: CommonSaveData.instance.uid,
                        shareId: shareId
                    };
                    console.log(sendData);
                    LTHttp.Send(this._headPrefix + "/api/share/start/report", Laya.Handler.create(this, () => {
                        console.log('???????????????????????? ????????????');
                    }), Laya.Handler.create(this, (res) => {
                        console.log(" ???????????????????????? ????????????", res);
                    }), true, sendData);
                } else {
                    console.log('?????????????????????');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    ReportStat(isShare: boolean, sid: string) {
        console.log("??????????????????");
    }

    public ReportDaily() {
        let fappid = LTPlatform.instance.GetFromAppId();
        let channel = fappid ? fappid : CommonSaveData.instance.channelId;
        let sendData = {
            appid: this.appId,
            channel: channel,
            timeRub: this.timeRub,
            randomNum: this.randomNum,
            fappid: fappid,
            ttId: CommonSaveData.instance.uid
        };
        console.log(sendData);
        LTHttp.Send(this._headPrefix + "/api/vus/user/repost", Laya.Handler.create(this, () => {
            console.log('??????????????????');
        }), Laya.Handler.create(this, (res) => {
            console.log(" ??????????????????", res);
        }), true, sendData);

    }

}

