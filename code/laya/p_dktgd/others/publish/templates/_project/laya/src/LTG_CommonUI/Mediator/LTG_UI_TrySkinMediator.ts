import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import { EPlatformType } from "../../LTGame/Platform/EPlatformType";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import { CmpSceneDisplay } from "../../LTGame/UIExt/Cmp/CmpSceneDisplay";
import { CmpSimpleLoader } from "../../LTGame/UIExt/Cmp/CmpSimpleLoader";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import GameData from "../../script/common/GameData";
import LTSDK from "../../SDK/LTSDK";
import { LTG_Com_TrySkinData } from "../Data/LTG_Com_TrySkinData";
import LTG_UI_TrySkin from "../UI/LTCom/LTG_UI_TrySkin";


export default class LTG_UI_TrySkinMediator extends BaseUIMediator<LTG_UI_TrySkin> {

    private static _instance: LTG_UI_TrySkinMediator;
    public static get instance(): LTG_UI_TrySkinMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_TrySkinMediator();
            this._instance._classDefine = LTG_UI_TrySkin;
        }
        return this._instance;
    }

    private _cacheData: LTG_Com_TrySkinData;

    private _displayScene: CmpSceneDisplay;
    private _displayPlayer: CmpSimpleLoader;
    _OnShow() {
        super._OnShow();
        // your code

        this._cacheData = this._openParam as LTG_Com_TrySkinData;
        if (this._cacheData == null) {
            throw new Error("请调用LTG_Com_TrySkinData进行界面打开操作");
        }
        if (this._cacheData.tryProgress) {
            this.ui.m_view.m_progress.text = this._cacheData.tryProgress;
        } else {
            this.ui.m_view.visible = false;
        }
        // this.ui.m_view.m_loader_title.url = this._cacheData.tryConfig.intro_url;
        this.ui.m_btn_no.onClick(this, this._OnClickClose);
        this.ui.m_btn_close.onClick(this, this._OnClickClose);
        this.ui.m_btn_try.onClick(this, this._OnClickWatchAd);
        if (this._cacheData.tryData && this._cacheData.tryData.display_model_path) {
            this._cacheData.tryIcon = null;
            this._cacheData.modelPath = this._cacheData.tryData.display_model_path;
            this._displayScene = new CmpSceneDisplay(this.ui.m_img_display);
            this._CreateScene();
        } else if (this._cacheData.tryIcon) {
            this.ui.m_img_display.icon = this._cacheData.tryIcon;
        } else {
            this._displayScene = new CmpSceneDisplay(this.ui.m_img_display);
            this._CreateScene();
        }
        this.initBtns();
    }
    initBtns() {
        this.ui.m_btn_no.m_bg.visible = LTPlatform.instance.platform == EPlatformType.TT || LTSDK.instance.isInCheck;
        if (LTSDK.instance.isInCheck) return;
        if (LTPlatform.instance.platform == EPlatformType.Vivo || LTPlatform.instance.platform == EPlatformType.Oppo) {
            this.ui.m_state.selectedIndex = 2;
            LTPlatform.instance.HideBannerAd();
        } else {
            this.ui.m_state.selectedIndex = GameData.instance.levelId % 2;
        }

    }
    private async _CreateScene() {
        LTUI.ShowLoading('资源加载中');

        await this._displayScene.LoadScene('ZS_EggUnlock');
        this._displayScene.camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
        this._displayPlayer = new CmpSimpleLoader(LTUtils.FindChild(this._displayScene.s3d, 'ZS_01/xuanzhuan/jiaose') as Laya.Sprite3D);
        await this._displayPlayer.LoadObj(this._cacheData.modelPath);
        //this._displayPlayer.loadObj.transform.localScale = new Laya.Vector3(1,1,1);
        LTUI.HideLoading();
    }


    _OnHide() {
        this._displayScene?.Dispose();
    }

    private _OnClickClose() {
        LTUI.TrigerBtnClick();
        this.Hide();
        this._cacheData.onClose?.runWith(false);
    }

    private async _OnClickWatchAd(evt: Laya.Event) {
        evt.stopPropagation();
        LTUI.TrigerBtnClick();
        let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (result) {
            this.Hide();
            this._cacheData.onClose?.runWith(true);
        }
    }

}