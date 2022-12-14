import LTHttp from "../../LTGame/Net/LTHttp";
import SDKADManager from "../SDKADManager";
import StringEx from "../../LTGame/LTUtils/StringEx";

import CryptoJS from "./../Libs/hmac-sha256.js";
import md5 from "./../Libs/md5.js";
import ShareManager from "../../LTGame/Platform/ShareManager";
import { ShareInfo } from "../../LTGame/Platform/ShareInfo";
import SDK_Default from "./SDK_Default";
import { ECheckState } from "../common/ECheckState";

export default class SDK_YQ extends SDK_Default {

    isADEnable: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    controlVersion: string;
    appId: string;
    adManager: SDKADManager;
    uid: string = "sdk_test";
    private _headPrefix = "https://api.yz061.com";
    enableDebug: boolean = false;
    Init(flg: string, channel: string, controlVersion: string, appId: string) {
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appId;

        this.isADEnable = false;
        this.isConfigEnable = false;
        this.checkState = ECheckState.Normal;
        this.adManager = new SDKADManager();

    }

    ReportShowAd(adList: SDK.ADReportShowData[]) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["channel"] = this.channel;
        reportData["data"] = adList;
        LTHttp.Send(this._headPrefix + "/exposure", Laya.Handler.create(this, (res) => { console.log('ad SHow', reportData, res) }), null, false, reportData);
    }

    ReportClickAd(ad_id: number, locationId: number, jumpSuccess: boolean) {
        let reportData = {};
        reportData["gflg"] = this.flg;
        reportData["uid"] = this.uid;
        reportData["ad_id"] = ad_id;
        reportData["location_id"] = locationId;
        reportData["channel"] = this.channel;
        if (jumpSuccess) {
            reportData["status"] = "cb";
        }
        LTHttp.Send(this._headPrefix + "/reportad", Laya.Handler.create(this, (res) => { console.log('ad click', reportData, res) }), null, false, reportData);
    }

    RequestADList() {
        LTHttp.Send(this._headPrefix + "/game/" + this.flg, Laya.Handler.create(this, this._OnGetADList), Laya.Handler.create(this, (res) => {
            console.log("???????????????HTTP????????????", res);
        }), true);
    }
    ReportLogin() {
        let reportData = {};
        reportData["flg"] = this.flg;
        reportData["uid"] = this.uid;
        LTHttp.Send(this._headPrefix + "/matter/report", Laya.Handler.create(this, (res) => { console.log('report login', reportData, res) }), null, false, reportData);

    }

    /**
     * ???????????????????????????
     * @param res 
     */
    private _OnGetADList(res: any) {
        if (res.status == null) {
            res = JSON.parse(res);
        }
        if (this.enableDebug)
            console.log("????????????????????????:", res);
        if (res.status == 1) {
            for (let item of res.result) {
                let adItem = item as SDK.ADPosData;
                this._RequestADListOnPos(adItem);
            }
        } else {
            console.error("???????????????????????????", res);
        }
    }

    private _RequestADListOnPos(adPosData: SDK.ADPosData) {
        if (this.enableDebug)
            console.log("??????????????????????????????:", adPosData);
        // ??????
        if (adPosData.matter_type == 1) {
            LTHttp.Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res.status == null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("??????????????????????????????:", res);
                if (res.status == 1) {
                    let adList = [];
                    for (let item of res.result) {
                        let adInfo = item as SDK.ADInfoData;
                        if (adInfo.ad_device == 0) {
                            // ?????????
                            adList.push(adInfo);
                        } else if (adInfo.ad_device == 1 && Laya.Browser.onAndroid) {
                            // android????????????
                            adList.push(adInfo);
                        } else if (adInfo.ad_device == 2 && Laya.Browser.onIOS) {
                            // ios????????????
                            adList.push(adInfo);
                        }
                    }
                    if (adList.length > 0) {
                        // ?????????????????????
                        this.adManager.InitADs(adPosData.location_id, adList);
                    }
                } else {
                    console.error("?????????????????????????????????", res);
                }

            }), Laya.Handler.create(this, (res) => {
                console.log("????????????????????????HTTP????????????", res);
            }), true, { uid: this.uid });
        } else if (adPosData.matter_type == 2) {
            // ??????
            LTHttp.Send(adPosData.url, Laya.Handler.create(this, (res) => {
                if (res != null) {
                    res = JSON.parse(res);
                }
                if (this.enableDebug)
                    console.log("???????????????????????????:", res);
                if (res.status == 1) {
                    for (let item of res.result) {
                        let shareInfo = item as SDK.ShareData;
                        let wrapShareInfo = new ShareInfo();
                        wrapShareInfo.shareId = shareInfo.share_id;
                        wrapShareInfo.shareImg = shareInfo.share_img;
                        wrapShareInfo.sharePath = shareInfo.share_path;
                        wrapShareInfo.shareTitle = shareInfo.share_title;
                        ShareManager.instance.AddShareInfo(wrapShareInfo);
                    }
                } else {
                    console.error("??????????????????????????????", res);
                }
            }), Laya.Handler.create(this, (res) => {
                console.log("??????????????????HTTP????????????", res);
            }), true, { uid: this.uid });
        }

    }

    RequestRemoteConfig() {
        let sendData = {
            flg: this.flg
        }
        LTHttp.Send(this._headPrefix + "/additional", Laya.Handler.create(this, this._OnRemoteConfigBack), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }

    /**
     * ????????????????????????
     * @param res 
     */
    private _OnRemoteConfigBack(res: any) {
        // ????????????????????????
        if (res) {
            res = JSON.parse(res as string);
        }
        console.log("??????????????????:", res);

        if (res.status == 1) {
            // ??????
            let result = res.result;
            if (result != null) {
                let config = result["config"];
                let ad = result["ad"];
                for (let key in config) {
                    if (key == this.controlVersion) {
                        this.isConfigEnable = config[key] == "1" && this.channel != "own";
                        break;
                    }
                }
                for (let key in ad) {
                    if (key == this.controlVersion) {
                        console.log('YQ ad:', key, ad[key]);
                        this.isADEnable = (ad[key] == "1");
                        break;
                    }
                }
            }
        }
        else {
            // ??????
            console.error("????????????????????????", res);
            this.isADEnable = false;
            this.isConfigEnable = false;
        }
        if (!this.isADEnable) {
            this.checkState = ECheckState.Normal;
        }
        console.log("???????????????:", this.controlVersion, "config:", this.isConfigEnable, "ad:", this.isADEnable);
        if (this.controlVersion) {
            this.RequestADList();
        }
    }

    Login(code: string, fromAppId: string) {
        console.log('??????YQ', code, fromAppId);
        let sendData = {
            flg: this.flg,
            code: code
        };
        if (this.channel) {
            sendData["channel"] = this.channel;
        }
        if (fromAppId) {
            sendData["appid"] = fromAppId;
        }
        LTHttp.Send(this._headPrefix + "/auth", Laya.Handler.create(this, this._OnAuthSuccess), Laya.Handler.create(this, (res) => {
            console.log("??????HTTP????????????", res);
        }), true, sendData);
    }

    private _OnAuthSuccess(res: any) {
        res = JSON.parse(res);
        if (this.enableDebug)
            console.log("SDK??????????????????", res);
        if (res.status == 1) {
            // ??????
            this._OnLoginSuccess(res.result);
            this.ReportLogin();
        } else {
            this._OnLoginFailed(res);
        }
    }
    private canShowAds() {

    }
    public ReportDaily() {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["uid"] = this.uid;
        recordData["channel"] = this.channel;
        LTHttp.Send(this._headPrefix + "/daily", null, null, false, recordData);
    }

    ReportStat(isShare: boolean, sid: string) {
        let recordData = {};
        recordData["flg"] = this.flg;
        recordData["channel"] = this.channel;
        recordData["loc"] = isShare ? "share" : "video";
        recordData["uid"] = this.uid;
        if (!StringEx.IsNullOrEmpty(sid)) {
            recordData["sid"] = sid;
        }
        let sign = this._CalcSign(recordData);
        LTHttp.SendPro(this._headPrefix + "/stat?sign=" + sign, Laya.Handler.create(null, (res) => {
            console.log("stat", res);
        }), null, "post", recordData);
    }

    private _CalcSign(obj: object): string {
        let keyList = Object.keys(obj).sort();
        let paramList = [];
        for (let key of keyList) {
            paramList.push(key + "=" + obj[key]);
        }
        let signStr = paramList.join("&");

        return CryptoJS.HmacSHA256(signStr, md5.hex_md5(this.uid + this.flg)).toString();
    }

    private _OnLoginSuccess(res: SDK.LoginSuccessParam) {

        console.log("SDK????????????", res);
        this.uid = res.openid;
        this.ReportDaily();
    }

    private _OnLoginFailed(res: SDK.LoginResult) {
        console.error("SDK????????????", res);
    }

}