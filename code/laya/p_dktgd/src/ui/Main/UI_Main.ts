/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_text_01 from "./UI_btn_text_01";

export default class UI_Main extends fgui.GComponent {

	public m_btn_start:UI_btn_text_01;
	public static URL:string = "ui://c6t3i6k8qqmy1";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("Main", "Main"));
	}

	protected onConstruct():void {
		this.m_btn_start = <UI_btn_text_01>(this.getChildAt(1));
	}
}