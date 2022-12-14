import UI_CommomToastMediator from "./DefaultUI/UI_CommomToastMediator";
import UI_CommondLoadMediator from "./DefaultUI/UI_CommonLoadMediator";
import UI_CommonLockScreenMediator from "./DefaultUI/UI_CommonLockScreenMediator";
import UI_FlyPanelMediator from "./DefaultUI/UI_FlyPanelMediator";
import LTPlatform from "../Platform/LTPlatform";
import { EPlatformType } from "../Platform/EPlatformType";

export default class LTUI {

    private static _cacheBtnHandle: Laya.Handler;

    public static SetCommonBtnClickCB(handle: Laya.Handler) {
        handle.once = false;
        this._cacheBtnHandle = handle;
    }

    public static TrigerBtnClick() {
        if (this._cacheBtnHandle) {
            this._cacheBtnHandle.run();
        }
    }

    public static Toast(str: string) {
        console.log("[Toast]" + str);
        UI_CommomToastMediator.instance.Show(str);
    }

    public static ShowLoading(str: string, isBig: boolean = false) {
        if (LTPlatform.instance.platform == EPlatformType.TT || LTPlatform.instance.platform == EPlatformType.WX) {
            return LTPlatform.instance.base.showLoading({
                title: str,
                mask: isBig
            });
        }
        if (UI_CommondLoadMediator.instance.isShow) {
            console.log("加载弹窗界面已打开");
            return;
        }
        UI_CommondLoadMediator.instance.Show([str, isBig]);
    }

    public static HideLoading() {
        if (LTPlatform.instance.platform == EPlatformType.TT || LTPlatform.instance.platform == EPlatformType.WX) {
            return LTPlatform.instance.base.hideLoading();
        }
        UI_CommondLoadMediator.instance.Hide();
    }

    public static async BoomObjs(fromObj: fgui.GObject, boomCount: number = 10, flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.BoomObjs(fromObj, boomCount, flyTime, circleRadius);
    }

    public static async FlyObjsTo(fromObj: fgui.GObject, toObj: fgui.GObject, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.FlyObjs(fromObj, toObj, flyCount, flyTime, circleRadius);
    }

    public static async FlyCoinsTo(fromObj: fgui.GObject, toObj: fgui.GObject, flyIcon: string = null, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.FlyCoins(fromObj, toObj, flyIcon, flyCount, flyTime, circleRadius);
    }

    public static async BoomCoins(fromObj: fgui.GObject, flyIcon: string = null, flyCount: number = 10,
        flyTime: number = 1, circleRadius: number = 60) {
        await UI_FlyPanelMediator.instance.BoomCoins(fromObj, flyIcon, flyCount, flyTime, circleRadius);
    }

    public static LockScreen() {
        UI_CommonLockScreenMediator.instance.Show();
    }

    public static UnlockScreen() {
        UI_CommonLockScreenMediator.instance.Hide();
    }
}