/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_item_sign_01 from "./LTG_UI_view_item_sign_01";
import LTG_UI_view_item_sign_07 from "./LTG_UI_view_item_sign_07";
import LTG_UI_normal_btn from "./LTG_UI_normal_btn";
import LTG_UI_normal_btn_ad from "./LTG_UI_normal_btn_ad";

export default class LTG_UI_view_sign extends fgui.GComponent {

	public m_state:fgui.Controller;
	public m_day_1:LTG_UI_view_item_sign_01;
	public m_day_2:LTG_UI_view_item_sign_01;
	public m_day_3:LTG_UI_view_item_sign_01;
	public m_day_4:LTG_UI_view_item_sign_01;
	public m_day_5:LTG_UI_view_item_sign_01;
	public m_day_6:LTG_UI_view_item_sign_01;
	public m_day_7:LTG_UI_view_item_sign_07;
	public m_text_signed:fgui.GTextField;
	public m_btn_normal:LTG_UI_normal_btn;
	public m_btn_watchad:LTG_UI_normal_btn_ad;

	public static URL:string = "ui://6ctaayzkoegw6s";

	public static createInstance():LTG_UI_view_sign {
		return <LTG_UI_view_sign><any>(fgui.UIPackage.createObject("LTCom","view_sign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state = this.getControllerAt(0);
		this.m_day_1 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(2));
		this.m_day_2 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(3));
		this.m_day_3 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(4));
		this.m_day_4 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(5));
		this.m_day_5 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(6));
		this.m_day_6 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(7));
		this.m_day_7 = <LTG_UI_view_item_sign_07><any>(this.getChildAt(8));
		this.m_text_signed = <fgui.GTextField><any>(this.getChildAt(9));
		this.m_btn_normal = <LTG_UI_normal_btn><any>(this.getChildAt(10));
		this.m_btn_watchad = <LTG_UI_normal_btn_ad><any>(this.getChildAt(11));
	}
}