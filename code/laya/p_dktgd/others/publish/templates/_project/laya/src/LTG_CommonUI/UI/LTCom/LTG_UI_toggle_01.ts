/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_toggle_01 extends fgui.GComponent {

	public m_toggle_state:fgui.Controller;

	public static URL:string = "ui://6ctaayzkoegw69";

	public static createInstance():LTG_UI_toggle_01 {
		return <LTG_UI_toggle_01><any>(fgui.UIPackage.createObject("LTCom","toggle_01"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_toggle_state = this.getControllerAt(0);
	}
}