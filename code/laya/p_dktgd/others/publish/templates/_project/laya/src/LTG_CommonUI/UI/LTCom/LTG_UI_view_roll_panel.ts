/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_item_view_roll from "./LTG_UI_item_view_roll";

export default class LTG_UI_view_roll_panel extends fgui.GComponent {

	public m_item_01:LTG_UI_item_view_roll;
	public m_item_02:LTG_UI_item_view_roll;
	public m_item_03:LTG_UI_item_view_roll;
	public m_item_04:LTG_UI_item_view_roll;
	public m_item_05:LTG_UI_item_view_roll;
	public m_item_06:LTG_UI_item_view_roll;

	public static URL:string = "ui://6ctaayzkoegw52";

	public static createInstance():LTG_UI_view_roll_panel {
		return <LTG_UI_view_roll_panel><any>(fgui.UIPackage.createObject("LTCom","view_roll_panel"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_item_01 = <LTG_UI_item_view_roll><any>(this.getChildAt(1));
		this.m_item_02 = <LTG_UI_item_view_roll><any>(this.getChildAt(2));
		this.m_item_03 = <LTG_UI_item_view_roll><any>(this.getChildAt(3));
		this.m_item_04 = <LTG_UI_item_view_roll><any>(this.getChildAt(4));
		this.m_item_05 = <LTG_UI_item_view_roll><any>(this.getChildAt(5));
		this.m_item_06 = <LTG_UI_item_view_roll><any>(this.getChildAt(6));
	}
}