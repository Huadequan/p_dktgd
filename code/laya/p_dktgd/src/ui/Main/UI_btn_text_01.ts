/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btn_text_01 extends fgui.GButton {

	public m_bg:fgui.GLoader;
	public static URL:string = "ui://c6t3i6k8qqmy2";

	public static createInstance():UI_btn_text_01 {
		return <UI_btn_text_01>(fgui.UIPackage.createObject("Main", "btn_text_01"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GLoader>(this.getChildAt(0));
	}
}