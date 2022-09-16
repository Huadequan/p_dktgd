
import SDK_YQ from "../../../../SDK/Impl/SDK_YQ";
import LTSDK from "../../../../SDK/LTSDK";
import { CommonEventId } from "../../../Commom/CommonEventId";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import UI_bottomGames from "../UI/LTGame/UI_bottomGames";
import UI_CommonEndSliderADs from "../UI/LTGame/UI_CommonEndSliderADs";
import UI_view_item_game100 from "../UI/LTGame/UI_view_item_game100";

export const ON_BANNER_SHOWN = "ON_BANNER_RESIZE";
export default class View_BottomGames {
    /**__gamebox 750*225  */
    static CreateView(tagUI: fgui.GComponent): View_BottomGames {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther) {
            tagUI.dispose();
            return null;
        }
        if (!LTSDK.instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }
        let uiInstance = null;
        uiInstance = UI_bottomGames.createInstance()
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_BottomGames(uiInstance);
    }

    private _ui: UI_bottomGames;
    public get ui(): UI_bottomGames {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];

    private _posId: number = 0;

    private constructor(ui: any) {
        this._ui = ui;
        this._Init();
    }
    scrollOri: number = 1;
    private _Init() {

        this._posId = 6;

        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        if (this._cacheAds == null) {
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        } else {
            this.ui.m_list.setVirtualAndLoop();
            this.ui.m_list.scrollPane.bouncebackEffect = true;
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = this._cacheAds.length;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);

            Laya.timer.loop(1, this, () => {

                if (this.ui.m_list.scrollPane.isRightMost) {
                    this.scrollOri = -1;
                }
                this.ui.m_list.scrollPane.scrollRight(0.01 * this.scrollOri, true);
            });
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad: any = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('bottom', this._cacheAds, ads);

            LTSDK.instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);

    }
    resetPos(bannerHight: number) {
        this.ui.y = Laya.stage.height - bannerHight - this.ui.height;
    }
    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;

    }

    private _OnAdItemRender(index: number, adUI: UI_view_item_game100) {
        let data = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.m_icon.url = data.ad_img;
        adUI.m_text_name.text = data.ad_name.length > 4 ? (data.ad_name).substring(0, 4) + '..' : data.ad_name;

    }

    private _OnClickGameItem(item: UI_view_item_game100) {
        let data = this._cacheAds[item.data as number];
        let uid = data.ad_appid;
        switch (LTPlatform.instance.platform) {
            case EPlatformType.Oppo:
            case EPlatformType.Vivo:
                uid = data.ad_package;
                break;
            default:
                break;
        }
        LTPlatform.instance.NavigateToApp(uid, data.ad_path, null, true, false, data.ad_id).then(() => {
            LTSDK.instance.ReportClickAd(data.ad_id, this._posId, true, '猜你喜欢');
        }).catch(() => {
            LTSDK.instance.ReportClickAd(data.ad_id, this._posId, false, '猜你喜欢');
        });

    }

}