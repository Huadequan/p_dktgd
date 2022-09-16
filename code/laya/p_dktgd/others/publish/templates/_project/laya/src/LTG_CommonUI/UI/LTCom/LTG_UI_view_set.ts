/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_toggle_01 from "./LTG_UI_toggle_01";
import LTG_UI_btn_refuse from "./LTG_UI_btn_refuse";

export default class LTG_UI_view_set extends fgui.GComponent {

	public m_toggle_music:LTG_UI_toggle_01;
	public m_toggle_shake:LTG_UI_toggle_01;
	public m_btn_code:fgui.GButton;
	public m_btn_close:fgui.GButton;
	public m_btn_statement:LTG_UI_btn_refuse;

	public static URL:string = "ui://6ctaayzkoegw62";

	public static createInstance():LTG_UI_view_set {
		return <LTG_UI_view_set><any>(fgui.UIPackage.createObject("LTCom","view_set"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_toggle_music = <LTG_UI_toggle_01><any>(this.getChildAt(4));
		this.m_toggle_shake = <LTG_UI_toggle_01><any>(this.getChildAt(5));
		this.m_btn_code = <fgui.GButton><any>(this.getChildAt(10));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(11));
		this.m_btn_statement = <LTG_UI_btn_refuse><any>(this.getChildAt(12));
	}
}