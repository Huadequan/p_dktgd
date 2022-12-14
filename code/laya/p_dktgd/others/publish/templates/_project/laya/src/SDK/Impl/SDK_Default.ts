import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import StringEx from "../../LTGame/LTUtils/StringEx";
import LTHttp from "../../LTGame/Net/LTHttp";
import { ECheckState } from "../common/ECheckState";
import FakeAdDefine from "../common/FakeAdDefine";
import { ISDK, RemoteConfig } from "../Interface/ISDK";
import SDKADManager from "../SDKADManager";
import md5 from "./../Libs/md5.js";

export default class SDK_Default implements ISDK {
    configs: RemoteConfig;
    checkState: ECheckState;
    get isShielding(): boolean {
        return this.configs.isShielding;
    }
    get isDelayClose(): boolean {
        return this.configs.isDelayClose;
    }
    get isADEnable(): boolean {
        return this.configs.isADEnable;
    }
    get isNavEnable(): boolean {
        return this.configs.isNavEnable;
    }
    get isInCheck() {
        return this.checkState == ECheckState.InCheck;
    }

    isADConfigInited: boolean;
    isConfigEnable: boolean;
    flg: string;
    channel: string;
    appId: string;
    controlVersion: string;
    adManager: SDKADManager;
    uid: string = "";
    navLevels: number[];
    token: string;
    timeRub: number;
    randomNum: string;
    Init(flg: string, channel: string, controlVersion: string, appid: string) {
        this.timeRub = Date.now();
        this.randomNum = Math.random().toString(36).substr(2, 8);
        this.configs = new RemoteConfig();
        this.isADConfigInited = true;
        this.navLevels = [];
        this.configs.payRate = 0;
        this.checkState = ECheckState.Normal;
        this.isConfigEnable = true;
        this.flg = flg;
        this.channel = channel;
        this.controlVersion = controlVersion;
        this.appId = appid;
        if (StringEx.IsNullOrEmpty(CommonSaveData.instance.uid)) {
            let uuid = md5.hex_md5(`${this.appId}#${this.timeRub}#${this.randomNum}#43b49394197b65540979c7143da7c8a8`);
            CommonSaveData.instance.uid = uuid;
            CommonSaveData.SaveToDisk();
        }
        this.uid = CommonSaveData.instance.uid;
        this.configs.severTime = "";
        this.configs.shieldHours = [];
        this.adManager = new SDKADManager();
        console.log("SDK:Init", this);
    }
    public getToken(): Promise<string> {
        return new Promise<string>((resolve, rej) => { 
        })
    }

    reportShareInfo(videoId: string, shareId: string) {

    }



    private _OnGetSelfAdInfosFailed(res: string) {
        console.error("???????????????????????????", res);
    }

    private _OnGetSelfAdInfos(res: string) {
        let adJson = JSON.parse(res) as FakeAdDefine[];
        console.log("?????????????????????", adJson.length, "???");
        let fakePosId = 0;
        let adList = [];
        for (let fakeAd of adJson) {
            let adData = {} as SDK.ADInfoData;
            adData.ad_appid = fakeAd.id;
            adData.ad_img = fakeAd.icon;
            adData.ad_name = fakeAd.title;
            adData.ad_package = fakeAd.package;
            if (adData.ad_appid != this.appId) {
                adList.push(adData);
            }
        }

        // ?????????????????????
        this.adManager.InitADs(fakePosId, adList);

    }

    Login(code: string, fromAppId: string) {
        console.log("SDK:Login", code, fromAppId);
    }

    RequestRemoteConfig() {
        console.log("SDK:RequestRemoteConfig");
    }

    /**?????????????????? */
    RequestADList() {
        let configFile = 'SelfAdConfig.json';
        LTHttp.Send(`https://file.gugudang.com/res/down/public/configs/${configFile}`, Laya.Handler.create(this, this._OnGetSelfAdInfos),
            Laya.Handler.create(this, this._OnGetSelfAdInfosFailed), true);
    }

    ReportClickAd(ad_id: number, locationId: number, jumpSuccess: boolean) {
        console.log("SDK:ReportClickAd", ad_id);
    }

    ReportShowAd(adList: SDK.ADReportShowData[]) {
        console.log("SDK:ReportShowAd", adList);
    }

    ReportStat(isShare: boolean, sid: string) {
        console.log("SDK:ReportStat", isShare, sid);
    }
    ReportLogin() {

    }
    ReportDaily() { }
    /**??????????????? 
* @param levelID ??????
* @param score ??????/??????
* @param onGetList ????????????
*/
    GetWeekRankList(levelID: number, score: number, onGetList: Function, sort?: number, count?: number) {

    }
    /**??????????????? 
   * @param levelID ??????
   * @param score ??????/??????
    *@param onGetList ????????????
   */
    GetDayRankList(levelID: number, score: number, onGetList: Function, sort?: number, count?: number, ) {

    }
    /**
     * ????????????????????? 
     * @param levelID ??????
     * @param score ??????/??????
     */
    RecordRankInfo(levelID: number, score: number): Promise<boolean> {
        return new Promise<boolean>(() => { });
    }
}