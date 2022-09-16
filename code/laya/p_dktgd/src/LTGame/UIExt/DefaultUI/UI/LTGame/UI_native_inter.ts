/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_native_inter extends fgui.GButton {

	public m_img:fgui.GLoader;
	public m_btn_ad:fgui.GButton;
	public m_txt_title:fgui.GTextField;
	public m_txt_desc:fgui.GTextField;
	public m_tag:fgui.GTextField;

	public static URL:string = "ui://75kiu87kctnoj1";

	public static createInstance():UI_native_inter {
		return <UI_native_inter><any>(fgui.UIPackage.createObject("LTGame","native_inter"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_btn_ad = <fgui.GButton><any>(this.getChildAt(3));
		this.m_txt_title = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_txt_desc = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_tag = <fgui.GTextField><any>(this.getChildAt(7));
	}
}