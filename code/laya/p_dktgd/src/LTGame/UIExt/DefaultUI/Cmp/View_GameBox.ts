
import LTSDK from "../../../../SDK/LTSDK";
import LTPlatform from "../../../Platform/LTPlatform";
import { EPlatformType } from "../../../Platform/EPlatformType";
import { CommonEventId } from "../../../Commom/CommonEventId";
import SDK_YQ from "../../../../SDK/Impl/SDK_YQ";
import UI_GameBox from "../UI/LTGame/UI_GameBox";
import UI_view_item_game100 from "../UI/LTGame/UI_view_item_game100";
export default class View_GameBox {

    /**__gamebox 750*400  */
    static CreateView(tagUI: fgui.GComponent): View_GameBox {
        if (tagUI == null) return null;

        // 额外判定一次是否支持交叉推广,如果不支持,则隐藏交叉推广
        if (!LTPlatform.instance.isSupportJumpOther && LTPlatform.instance.platform != EPlatformType.Web) {
            console.log('不支持跳转')
            tagUI.dispose();
            return null;
        }
        if (!LTSDK.instance.configs.isNavEnable) {
            tagUI.dispose();
            return null;
        }

        let uiInstance = UI_GameBox.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_GameBox(uiInstance);
    }

    private _ui: UI_GameBox;
    public get ui(): UI_GameBox {
        return this._ui;
    }

    /**
     * 储存的广告
     */
    private _cacheAds: SDK.ADInfoData[];
    private showingIndexs: number[] = [0, 1, 2, 3];

    private _posId: number = 0;

    private constructor(ui: UI_GameBox) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {

        this._posId = 6;

        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        this.ui.m_btn_close.onClick(this, this.hide);
        if (this._cacheAds == null) {
            Laya.stage.on(CommonEventId.SELF_AD_INITED, this, this._OnAdInited);
            this.ui.visible = false;
        } else {
            this.ui.m_list.setVirtual();
            console.error(this._cacheAds);
            this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
            this.ui.m_list.on(fgui.Events.CLICK_ITEM, this, this.clickItem);
            this.ui.m_list.numItems = this._cacheAds.length;

        }
    }
    hide() {
        this.ui.visible = false;
    }
    refresh() {

    }
    private _OnAdInited(posId: number) {
        if (posId != this._posId) return;
        this._cacheAds = LTSDK.instance.adManager.GetADListByLocationId(this._posId);
        // this.ui.m_list.itemRenderer = Laya.Handler.create(this, this.renderItem, null, false);
        // this.ui.m_list.numItems = this._cacheAds.length;
        // this.ui.m_list.on(fairygui.Events.CLICK_ITEM, this, this.clickItem);
        this.ui.visible = true;

    }

    clickItem(item: UI_view_item_game100) {
        let data = this._cacheAds[item['idx']];;
        console.log(data.ad_name);
        LTSDK.instance.ReportClickAd(data.ad_id, this._posId, true);
        LTPlatform.instance.NavigateToApp(data.ad_appid, data.ad_path, null, true, false, data.ad_id);

    }
    renderItem(index: number, item: UI_view_item_game100) {
        let ind = index;
        let data = this._cacheAds[ind];
        item.m_text_name.text = data.ad_name.length > 4 ? (data.ad_name).substring(0, 4)+'..' : data.ad_name;;
        item.m_icon.m_icon.url = data.ad_img;
        item['idx'] = index;
        //  item.m_shake.play();
        // item.onClick(item, () => this.clickItem(index));
        // let ad: any = {};
        // ad.ad_id = data.ad_id;
        // ad.location_id = 5;
        // ad.num = 1;
        // LTSDK.instance.RecordShowAd([ad]);
    }


}