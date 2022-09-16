/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_normalg from "./LTG_UI_btn_normalg";
import LTG_UI_item_rank from "./LTG_UI_item_rank";

export default class LTG_UI_RankList extends fgui.GComponent {

	public m_opencontext:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_txt_rank:fgui.GTextField;
	public m_txt_nikename:fgui.GTextField;
	public m_txt_count:fgui.GTextField;
	public m_btn_close:LTG_UI_btn_normalg;
	public m_btn_pre:LTG_UI_btn_normalg;
	public m_btn_next:LTG_UI_btn_normalg;
	public m_openView:fgui.GGraph;
	public m_list_rank:fgui.GList;
	public m_item_self:LTG_UI_item_rank;

	public static URL:string = "ui://6ctaayzkoegw4r";

	public static createInstance():LTG_UI_RankList {
		return <LTG_UI_RankList><any>(fgui.UIPackage.createObject("LTCom","RankList"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_opencontext = this.getControllerAt(0);
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_txt_rank = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_txt_nikename = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_txt_count = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_btn_close = <LTG_UI_btn_normalg><any>(this.getChildAt(6));
		this.m_btn_pre = <LTG_UI_btn_normalg><any>(this.getChildAt(7));
		this.m_btn_next = <LTG_UI_btn_normalg><any>(this.getChildAt(8));
		this.m_openView = <fgui.GGraph><any>(this.getChildAt(9));
		this.m_list_rank = <fgui.GList><any>(this.getChildAt(10));
		this.m_item_self = <LTG_UI_item_rank><any>(this.getChildAt(11));
	}
}