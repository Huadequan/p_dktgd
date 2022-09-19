/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Main from "./UI_Main";
import UI_btn_text_01 from "./UI_btn_text_01";
import UI_Fight from "./UI_Fight";
import UI_com_joystick from "./UI_com_joystick";

export default class MainBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
		fgui.UIObjectFactory.setExtension(UI_btn_text_01.URL, UI_btn_text_01);
		fgui.UIObjectFactory.setExtension(UI_Fight.URL, UI_Fight);
		fgui.UIObjectFactory.setExtension(UI_com_joystick.URL, UI_com_joystick);
	}
}