import { ECheckState } from "../../../../SDK/common/ECheckState";
import SDK_YQ from "../../../../SDK/Impl/SDK_YQ";
import LTSDK from "../../../../SDK/LTSDK";
import Awaiters from "../../../Async/Awaiters";
import { CommonEventId } from "../../../Commom/CommonEventId";
import MathEx from "../../../LTUtils/MathEx";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import UI_HotGames from "../UI/LTGame/UI_HotGames";
import UI_item_hotgames from "../UI/LTGame/UI_item_hotgames";
//**火爆游戏  爆款推荐 750 *200 */
export default class View_HotGames {

    static CreateView(tagUI: fgui.GComponent): View_HotGames {
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
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // 只有oppo支持
            console.log("hotgame,审核");
            tagUI.dispose();
            return null;
        }
        if (LTPlatform.instance.platform != EPlatformType.TT && LTPlatform.instance.platform != EPlatformType.Web && LTPlatform.instance.platform != EPlatformType.WX) {
            console.log("hotgame,不支持");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof UI_HotGames) {
            return new View_HotGames(tagUI);
        }
        let uiInstance = UI_HotGames.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_HotGames(uiInstance);
    }

    private _ui: UI_HotGames;
    public get ui(): UI_HotGames {
        return this._ui;
    }

    private constructor(ui: UI_HotGames) {
        this._ui = ui;
        this._Init();
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];

    private _posId: number = 0;

    private _Init() {
        this._posId = 4;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);

        if (this._cacheAds == null) {
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        } else {
            if (this._cacheAds.length < 5) {
                this.ui.dispose();
                return console.error("广告配置错误");
            }
            // this.ui.m_list.setVirtual();
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
            this.ui.m_list.numItems = 5;
            this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
            let ads = [];
            for (let i = 0; i < this._cacheAds.length; i++) {
                const adData = this._cacheAds[i];
                let ad: any = {};
                ad.ad_id = adData.ad_id;
                ad.location_id = this._posId;
                ad.num = 1;
                ads.push(ad);
            }
            console.log('hots', this._cacheAds, ads);

            LTSDK.instance.ReportShowAd(ads);
        }
        // Laya.stage.on(ON_BANNER_SHOWN, this, this.resetPos);

    }

    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_list.itemRenderer = Laya.Handler.create(this, this._OnAdItemRender, null, false);
        this.ui.m_list.numItems = this._cacheAds.length;
        this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this._OnClickGameItem);
        this.ui.visible = true;

    }

    private _OnAdItemRender(index: number, adUI: UI_item_hotgames) {
        let adData = this._cacheAds[index];
        adUI.data = index;
        adUI.m_icon.icon = adData.ad_img;
        adUI.m_txt_name.text = adData.ad_name;
    }

    private _OnClickGameItem(item: UI_item_hotgames) {
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
            LTSDK.instance.ReportClickAd(data.ad_id, this._posId, true, '精品好游');
        }).catch(() => {
            LTSDK.instance.ReportClickAd(data.ad_id, this._posId, false, '精品好游');
        });

    }


}