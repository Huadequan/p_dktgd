/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_text_01 from "./UI_btn_text_01";
import UI_com_joystick from "./UI_com_joystick";

export default class UI_Fight extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_btn_start:UI_btn_text_01;
	public m_com_joy:UI_com_joystick;
	public static URL:string = "ui://c6t3i6k8r0x74";

	public static createInstance():UI_Fight {
		return <UI_Fight>(fgui.UIPackage.createObject("Main", "Fight"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_btn_start = <UI_btn_text_01>(this.getChildAt(1));
		this.m_com_joy = <UI_com_joystick>(this.getChildAt(2));
	}
}