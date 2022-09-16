import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_ShareResult from "./UI/LTGame/UI_ShareResult";
import LTPlatform from "../../Platform/LTPlatform";
import LTUI from "../LTUI";



export class UI_ShareResultMediator extends BaseUIMediator<UI_ShareResult> {
    private static _instance: UI_ShareResultMediator;
    public get ui(): UI_ShareResult {
        return this._ui;
    }

    public static get instance(): UI_ShareResultMediator {
        if (this._instance == null) {
            this._instance = new UI_ShareResultMediator();
            this._instance._classDefine = UI_ShareResult;
        }
        return this._instance;
    }
    videoID: string;
    _OnShow() {
        super._OnShow();
        this.videoID = this._openParam;
        this.ui.m_btn_yes.onClick(this, this.copyId);
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_txt_show.text = `分享成功：\n\r${this.videoID}`;
    }
    copyId() {
        if (this.videoID) {
            LTPlatform.instance.SetClipboardData(this.videoID);
            LTUI.Toast("复制成功");
        } else {
            LTUI.Toast("获取视频id错误");
        }
    }
    protected _OnHide() { }
}
