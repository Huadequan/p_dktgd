/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_iconVdieo from "./LTG_UI_iconVdieo";

export default class LTG_UI_top3 extends fgui.GComponent {

	public m_bg:fgui.GLoader;
	public m_icon:LTG_UI_iconVdieo;
	public m_rank:fgui.GLoader;
	public m_digs:fgui.GTextField;
	public m_nickname:fgui.GTextField;

	public static URL:string = "ui://6ctaayzkoegw8x";

	public static createInstance():LTG_UI_top3 {
		return <LTG_UI_top3><any>(fgui.UIPackage.createObject("LTCom","top3"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_icon = <LTG_UI_iconVdieo><any>(this.getChildAt(2));
		this.m_rank = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_digs = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_nickname = <fgui.GTextField><any>(this.getChildAt(7));
	}
}