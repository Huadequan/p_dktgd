/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_roll_panel from "./LTG_UI_view_roll_panel";

export default class LTG_UI_view_roll extends fgui.GComponent {

	public m_view_roll:LTG_UI_view_roll_panel;
	public m_progress_supper:fgui.GProgressBar;
	public m_text_notice:fgui.GTextField;
	public m_anim_special:fgui.Transition;

	public static URL:string = "ui://6ctaayzkoegw51";

	public static createInstance():LTG_UI_view_roll {
		return <LTG_UI_view_roll><any>(fgui.UIPackage.createObject("LTCom","view_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_view_roll = <LTG_UI_view_roll_panel><any>(this.getChildAt(0));
		this.m_progress_supper = <fgui.GProgressBar><any>(this.getChildAt(1));
		this.m_text_notice = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_anim_special = this.getTransitionAt(0);
	}
}