/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_normal_btn_ad extends fgui.GButton {

	public m_ctrl:fgui.Controller;
	public m_bg:fgui.GLoader;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://6ctaayzkoegw7q";

	public static createInstance():LTG_UI_normal_btn_ad {
		return <LTG_UI_normal_btn_ad><any>(fgui.UIPackage.createObject("LTCom","normal_btn_ad"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ctrl = this.getControllerAt(1);
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}