import CommonSaveData from "../../LTGame/Commom/CommonSaveData";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import { SignConfig } from "../../script/config/SignConfig";
import { LTG_Com_SignData } from "../Data/LTG_Com_SignData";
import LTG_UI_Sign from "../UI/LTCom/LTG_UI_Sign";
import LTG_UI_view_item_sign_01 from "../UI/LTCom/LTG_UI_view_item_sign_01";
import LTUI from "../../LTGame/UIExt/LTUI";
import LTSDK from "../../SDK/LTSDK";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";

export default class LTG_UI_SignMediator extends BaseUIMediator<LTG_UI_Sign> {

    private static _instance: LTG_UI_SignMediator;
    public static get instance(): LTG_UI_SignMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_SignMediator();
            this._instance._classDefine = LTG_UI_Sign;
        }
        return this._instance;
    }

    private _currentReward: SignConfig.config;
    private _cacheUIItem: fgui.GObject;

    private _isToggled: boolean;

    private _cacheConfig: LTG_Com_SignData;

    _OnShow() {
        super._OnShow();
        // your code

        this._cacheConfig = this._openParam as LTG_Com_SignData;
        if (this._cacheConfig == null) {
            throw new Error("请调用LTG_Com_SignData进行界面打开操作");
        }

        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        for (let i = 1; i < 7; i++) {
            this.ui.m_view[`m_day_${i}`].m_text_name.text = SignConfig.data[i].show_str;
            this.ui.m_view[`m_day_${i}`].m_loader_icon.url = SignConfig.data[i].show_icon;
        }

        this.ui.m_view.m_day_7.m_loader_icon.url = SignConfig.data[7].show_icon;
        this.ui.m_view.m_state.selectedIndex = CommonSaveData.instance.isSigned ? 1 : 0;

        this.ui.m_view.m_day_2.m_mode.selectedIndex = 1;

        if (CommonSaveData.instance.isSigned) {
            let displayDay = CommonSaveData.instance.signDayCount % 7;
            for (let i = 0; i < displayDay; ++i) {
                let itemUI = this.ui.m_view['m_day_' + (i + 1)] as LTG_UI_view_item_sign_01;
                itemUI.m_state_get.selectedIndex = 2;
            }

            this.ui.m_view.m_btn_watchad.visible = false;
        } else {
            let displayDay = CommonSaveData.instance.signDayCount % 7;
            for (let i = 0; i < displayDay; ++i) {
                let itemUI = this.ui.m_view['m_day_' + (i + 1)] as LTG_UI_view_item_sign_01;
                itemUI.m_state_get.selectedIndex = 2;
            }
            let itemUI = this.ui.m_view['m_day_' + (displayDay + 1)] as LTG_UI_view_item_sign_01;
            itemUI.m_state_get.selectedIndex = 1;
            this._currentReward = SignConfig.data[displayDay + 1];
            this._cacheUIItem = itemUI;
            this.ui.m_view.m_text_signed.visible = false;
            this.ui.m_view.m_btn_normal.m_bg.visible = LTSDK.instance.isInCheck || LTPlatform.instance.platform == EPlatformType.TT;
            this.ui.m_view.m_btn_normal.onClick(this, this._OnClickGet);
            this.ui.m_view.m_btn_watchad.onClick(this, this._OnClickWatchAd);
        }
        LTPlatform.instance.ShowBannerAd();
    }



    private _OnClickGet() {
        LTUI.TrigerBtnClick();
        CommonSaveData.instance.isSigned = true;
        CommonSaveData.instance.signDayCount++;
        CommonSaveData.SaveToDisk();
        this._cacheConfig.onSign?.runWith([this._currentReward, false]);
        this.Hide();
    }

    private async _OnClickWatchAd(evt: Laya.Event) {
        evt.stopPropagation();
        LTUI.TrigerBtnClick();
        LTPlatform.instance.RecordEvent('ad_sign', {});
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            CommonSaveData.instance.isSigned = true;
            CommonSaveData.instance.signDayCount++;
            CommonSaveData.SaveToDisk();
            this._cacheConfig.onSign?.runWith([this._currentReward, true]);
            this.Hide();
        }
    }

    private _OnClickClose() {
        if (CommonSaveData.instance.isSigned) {
            LTUI.TrigerBtnClick();
            this.Hide();
        } else {
            this._OnClickGet();
        }
    }

    _OnHide() {
        LTPlatform.instance.HideBannerAd();
        this._cacheConfig.onClose?.run();
    }

}