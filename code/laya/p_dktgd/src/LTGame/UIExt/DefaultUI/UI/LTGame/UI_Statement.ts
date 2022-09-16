/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Statement extends fgui.GButton {

	public m_type:fgui.Controller;

	public static URL:string = "ui://75kiu87khcckj2";

	public static createInstance():UI_Statement {
		return <UI_Statement><any>(fgui.UIPackage.createObject("LTGame","Statement"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_type = this.getControllerAt(0);
	}
}