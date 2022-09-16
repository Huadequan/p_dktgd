/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_native_inter from "./UI_native_inter";
import UI_btn_normal from "./UI_btn_normal";

export default class UI_NativeInterstital extends fgui.GComponent {

	public m_ad:UI_native_inter;
	public m_btn_close:UI_btn_normal;
	public m_btn_ok:UI_btn_normal;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://75kiu87kctnoiy";

	public static createInstance():UI_NativeInterstital {
		return <UI_NativeInterstital><any>(fgui.UIPackage.createObject("LTGame","NativeInterstital"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = <UI_native_inter><any>(this.getChildAt(1));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(2));
		this.m_btn_ok = <UI_btn_normal><any>(this.getChildAt(3));
		this.m_t0 = this.getTransitionAt(0);
	}
}