/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_item_view_roll extends fgui.GComponent {

	public m_selected:fgui.Controller;
	public m_reward:fgui.GImage;
	public m_text_name:fgui.GTextField;
	public m_loader_icon:fgui.GLoader;
	public m_loader_title:fgui.GLoader;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://6ctaayzkoegw54";

	public static createInstance():LTG_UI_item_view_roll {
		return <LTG_UI_item_view_roll><any>(fgui.UIPackage.createObject("LTCom","item_view_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_selected = this.getControllerAt(0);
		this.m_reward = <fgui.GImage><any>(this.getChildAt(0));
		this.m_text_name = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_loader_title = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_t0 = this.getTransitionAt(0);
	}
}