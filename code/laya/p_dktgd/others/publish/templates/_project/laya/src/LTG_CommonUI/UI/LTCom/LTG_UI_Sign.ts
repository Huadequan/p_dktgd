/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_sign from "./LTG_UI_view_sign";

export default class LTG_UI_Sign extends fgui.GComponent {

	public m_view:LTG_UI_view_sign;
	public m_btn_close:fgui.GButton;
	public m_anim_enter:fgui.Transition;
	public m_anim_exit:fgui.Transition;

	public static URL:string = "ui://6ctaayzkoegw6q";

	public static createInstance():LTG_UI_Sign {
		return <LTG_UI_Sign><any>(fgui.UIPackage.createObject("LTCom","Sign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_view = <LTG_UI_view_sign><any>(this.getChildAt(1));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
		this.m_anim_enter = this.getTransitionAt(0);
		this.m_anim_exit = this.getTransitionAt(1);
	}
}