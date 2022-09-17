/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_text_01 from "./UI_btn_text_01";

export default class UI_Main extends fgui.GComponent {

	public m_btn_start:UI_btn_text_01;
	public m_btn_shop:UI_btn_text_01;
	public m_btn_roll:UI_btn_text_01;
	public m_btn_sign:UI_btn_text_01;
	public m_btn_addshortcut:UI_btn_text_01;
	public m_btn_statement:UI_btn_text_01;
	public static URL:string = "ui://c6t3i6k8qqmy1";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("Main", "Main"));
	}

	protected onConstruct():void {
		this.m_btn_start = <UI_btn_text_01>(this.getChildAt(1));
		this.m_btn_shop = <UI_btn_text_01>(this.getChildAt(2));
		this.m_btn_roll = <UI_btn_text_01>(this.getChildAt(3));
		this.m_btn_sign = <UI_btn_text_01>(this.getChildAt(4));
		this.m_btn_addshortcut = <UI_btn_text_01>(this.getChildAt(5));
		this.m_btn_statement = <UI_btn_text_01>(this.getChildAt(6));
	}
}