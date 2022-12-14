import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_Main from "../../ui/Main/UI_Main";
import GlobalUnit from "../common/GlobalUnit";
import { UI_FightMediator } from "./UI_FightMediator";

export class UI_MainMediator extends BaseUIMediator<UI_Main> {

    private static _instance;
    public static get instance(): UI_MainMediator {
        if (this._instance == null) {
            this._instance = new UI_MainMediator();
            this._instance._classDefine = UI_Main;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();

        this.ui.m_btn_start.onClick(this, this.StartGame);
    }

    StartGame() {
        
        // this.Hide();
        GlobalUnit.game.StartGame(); 
    }
}