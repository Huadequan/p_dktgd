/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_ShareResult extends fgui.GComponent {

	public m_txt_show:fgui.GTextField;
	public m_btn_yes:fgui.GButton;
	public m_btn_close:fgui.GButton;

	public static URL:string = "ui://75kiu87kgn6shg";

	public static createInstance():UI_ShareResult {
		return <UI_ShareResult><any>(fgui.UIPackage.createObject("LTGame","ShareResult"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_txt_show = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_btn_yes = <fgui.GButton><any>(this.getChildAt(3));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(4));
	}
}