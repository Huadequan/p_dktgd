/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_HotGames extends fgui.GComponent {

	public m_list:fgui.GList;

	public static URL:string = "ui://75kiu87kmdx8iv";

	public static createInstance():UI_HotGames {
		return <UI_HotGames><any>(fgui.UIPackage.createObject("LTGame","HotGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_list = <fgui.GList><any>(this.getChildAt(2));
	}
}