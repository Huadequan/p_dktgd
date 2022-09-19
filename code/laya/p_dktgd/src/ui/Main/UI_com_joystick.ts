/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_com_joystick extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_handle:fgui.GGraph;
	public static URL:string = "ui://c6t3i6k8r0x75";

	public static createInstance():UI_com_joystick {
		return <UI_com_joystick>(fgui.UIPackage.createObject("Main", "com_joystick"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_handle = <fgui.GGraph>(this.getChildAt(1));
	}
}