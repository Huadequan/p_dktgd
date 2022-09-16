/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_normal_btn from "./LTG_UI_normal_btn";

export default class LTG_UI_view_screenshoot extends fgui.GComponent {

	public m_img_display:fgui.GGraph;
	public m_view_play:fgui.GComponent;
	public m_reward_icon:fgui.GLoader;
	public m_btn_share:fgui.GButton;
	public m_btn_close:LTG_UI_normal_btn;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://6ctaayzkoegw5l";

	public static createInstance():LTG_UI_view_screenshoot {
		return <LTG_UI_view_screenshoot><any>(fgui.UIPackage.createObject("LTCom","view_screenshoot"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_display = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view_play = <fgui.GComponent><any>(this.getChildAt(2));
		this.m_reward_icon = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_btn_share = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_close = <LTG_UI_normal_btn><any>(this.getChildAt(5));
		this.m_t0 = this.getTransitionAt(0);
	}
}