/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_item_hotgames extends fgui.GComponent {

	public m_icon:fgui.GButton;
	public m_txt_name:fgui.GTextField;

	public static URL:string = "ui://75kiu87kmdx8iw";

	public static createInstance():UI_item_hotgames {
		return <UI_item_hotgames><any>(fgui.UIPackage.createObject("LTGame","item_hotgames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GButton><any>(this.getChildAt(0));
		this.m_txt_name = <fgui.GTextField><any>(this.getChildAt(1));
	}
}