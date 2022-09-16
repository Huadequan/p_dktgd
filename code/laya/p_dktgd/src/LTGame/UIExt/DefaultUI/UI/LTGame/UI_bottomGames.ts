/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_bottomGames extends fgui.GComponent {

	public m_list:fgui.GList;
	public m_ad:fgui.GImage;

	public static URL:string = "ui://75kiu87kt3oybk";

	public static createInstance():UI_bottomGames {
		return <UI_bottomGames><any>(fgui.UIPackage.createObject("LTGame","bottomGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_list = <fgui.GList><any>(this.getChildAt(1));
		this.m_ad = <fgui.GImage><any>(this.getChildAt(2));
	}
}