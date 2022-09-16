/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_GameBox extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_list:fgui.GList;

	public static URL:string = "ui://75kiu87kr3yg7h";

	public static createInstance():UI_GameBox {
		return <UI_GameBox><any>(fgui.UIPackage.createObject("LTGame","GameBox"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
		this.m_list = <fgui.GList><any>(this.getChildAt(3));
	}
}