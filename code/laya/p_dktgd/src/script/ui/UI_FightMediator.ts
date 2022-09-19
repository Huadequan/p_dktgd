import { CmpJoystick } from "../../LTGame/UIExt/Cmp/CmpJoystick";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Fight from "../../ui/Main/UI_Fight";
import UI_Main from "../../ui/Main/UI_Main";

export class UI_FightMediator extends BaseUIMediator<UI_Fight> {

    private static _instance;
    public static get instance(): UI_FightMediator {
        if (this._instance == null) {
            this._instance = new UI_FightMediator();
            this._instance._classDefine = UI_Fight;
        }
        return this._instance;
    }

    public CmpJoy: CmpJoystick;
    _OnShow() {
        super._OnShow();

        this.CmpJoy = new CmpJoystick(this.ui.m_img_bg, this.ui.m_com_joy, this.ui.m_com_joy.m_handle)
    }

}