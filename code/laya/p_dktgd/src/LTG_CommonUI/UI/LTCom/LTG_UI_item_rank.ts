/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_item_rank extends fgui.GComponent {

	public m_txt_nickname:fgui.GTextField;
	public m_txt_rank:fgui.GTextField;
	public m_txt_score:fgui.GTextField;

	public static URL:string = "ui://6ctaayzkoegw4z";

	public static createInstance():LTG_UI_item_rank {
		return <LTG_UI_item_rank><any>(fgui.UIPackage.createObject("LTCom","item_rank"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_txt_nickname = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_txt_rank = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_txt_score = <fgui.GTextField><any>(this.getChildAt(3));
	}
}