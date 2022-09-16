import { LTG_Com_NativeData } from "../../../LTG_CommonUI/Data/LTG_Com_nativeData";
import GameData from "../../../script/common/GameData";
import LTSDK from "../../../SDK/LTSDK";
import { EPlatformType } from "../../Platform/EPlatformType";
import LTPlatform from "../../Platform/LTPlatform";
import { OppoAdData } from "../../Platform/OppoPlatform";
import UI_NativeInterstital from "./UI/LTGame/UI_NativeInterstital";


export default class UI_NativeInterstitalMediator {

    private static _instance: UI_NativeInterstitalMediator;
    _openParam: any;
    public static get instance(): UI_NativeInterstitalMediator {
        if (this._instance == null) {
            this._instance = new UI_NativeInterstitalMediator();
            this._instance.ui = UI_NativeInterstital.createInstance();
            fgui.GRoot.inst.addChild(this.instance.ui);
            this.instance.ui.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
            this.instance.ui.sortingOrder = Number.MAX_SAFE_INTEGER - 1;
        }
        return this._instance;
    }
    ui: UI_NativeInterstital;
    data: OppoAdData;
    ad: any;
    Show(obj: any = null) {
        this._openParam = obj;
        this._OnShow();
        this.ui.visible = true;
    }
    async   _OnShow() {
        // your code
        if (!this._openParam) return this.Hide();

        this.data = (this._openParam as LTG_Com_NativeData).native.data;
        this.ad = (this._openParam as LTG_Com_NativeData).native.ad;
        if (LTPlatform.instance.platform == EPlatformType.Oppo) {
            await this.initAd();
            this.ui.m_ad.visible = true;
        } else {
            this.ui.m_btn_close.visible = false
            this.ui.m_btn_ok.visible = !LTSDK.instance.configs.isADEnable;
            this.ad.onClose(() => { this.Hide() })
            this.ui.m_ad.visible = false;
        }
        //this.ui.m_btn_ok.visible = true;// LTPlatform.instance.platform == EPlatformType.Oppo;
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_btn_ok.onClick(this, this._OnClickClose);
        this.ui.m_ad.onClick(this, this._OnClickAd);

    }
    private async initAd() {
        LTPlatform.instance.HideBannerAd();
        this.ui.m_ad.icon = this.data.icon;
        this.ui.m_ad.m_img.url = this.data.imgUrlList[0];
        this.ui.m_ad.m_txt_desc.text = this.data.desc;
        this.ui.m_ad.m_txt_title.text = this.data.title;
        this.ad.reportAdShow({
            adId: this.data.adId
        });
    }

    _OnClickAd() {
        this.ad.reportAdClick({
            adId: this.data.adId
        });
        this.Hide();
    }

    private _OnClickClose() {
        this.Hide();
    }
    _OnHide() {
        if (GameData.instance.levelId % 2 == 0) {
            LTPlatform.instance.createShortcut();
        }
        this.ui.m_btn_close.offClick(this, this._OnClickClose);
        this.ui.m_btn_ok.offClick(this, this._OnClickClose);
        this.ui.m_ad.offClick(this, this._OnClickAd);
    }
    Hide() {
        this.ui.visible = false;
        if (LTPlatform.instance.platform == EPlatformType.Vivo && this.ad) {
            this.ad.destroy();
        }
        this._OnHide();
    }

}