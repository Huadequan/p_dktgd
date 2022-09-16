import View_OtherGames from "../DefaultUI/Cmp/View_OtherGames";
import View_HotGame from "../DefaultUI/Cmp/View_HotGame";
import { View_NativeInPage } from "../DefaultUI/Cmp/View_NativeInpage";
import { View_NativeIcon } from "../DefaultUI/Cmp/View_NativeIcon";
import View_BottomGames from "../DefaultUI/Cmp/View_BottomGames";
import View_SideGames from "../DefaultUI/Cmp/View_SideGames";
import View_EndSlideGames from "../DefaultUI/Cmp/View_EndSlideGames";
import View_WxSideGames from "../DefaultUI/Cmp/View_WxSideGames";
import View_End3X3Games from "../DefaultUI/Cmp/View_End3X3Games";
import View_HotGames from "../DefaultUI/Cmp/View_HotGames";
import View_Statement from "../DefaultUI/Cmp/View_Statement";
import View_GameBox from "../DefaultUI/Cmp/View_GameBox";

export class SelfADHelper {

    static InitSelfAD(ui: fgui.GObject) {
        let othergames = View_OtherGames.CreateView(ui['m___othergames']);
        if (othergames) {
            ui['m___othergames'] = othergames.ui;
        } else {
            delete ui['m___othergames'];
            // ui['m___othergames'] = undefined;
        }

        let hotGame = View_HotGame.CreateView(ui['m___hotgame']);
        if (hotGame) {
            ui['m___hotgame'] = hotGame.ui;
        } else {
            delete ui['m___hotgame'];
            // ui['m___hotgame'] = undefined;
        }
        let hotGames = View_HotGames.CreateView(ui['m___hotgames']);
        if (hotGames) {
            ui['m___hotgames'] = hotGames.ui;
        } else {
            delete ui['m___hotgames'];
            // ui['m___hotgames'] = undefined;
        }
        let nativeinpage = View_NativeInPage.CreateView(ui['m___nativeinpage']);
        if (nativeinpage) {
            ui['m___nativeinpage'] = nativeinpage;
        } else {
            delete ui['m___nativeinpage'];
            // ui['m___nativeinpage'] = undefined;
        }

        let nativeicon = View_NativeIcon.CreateView(ui['m___nativeicon']);
        if (nativeicon) {
            ui['m___nativeicon'] = nativeicon;
        } else {
            delete ui['m___nativeicon'];
            // ui['m___nativeicon'] = undefined;
        }

        let bottomgames = View_BottomGames.CreateView(ui['m___bottomgames']);
        if (bottomgames) {
            ui['m___bottomgames'] = bottomgames.ui;
        } else {
            delete ui['m___bottomgames'];
            // ui['m___bottomgames'] = undefined;
        }
        let sidegames = View_SideGames.CreateView(ui['m___sidegames']);
        if (sidegames) {
            ui['m___sidegames'] = sidegames.ui;
        } else {
            delete ui['m___sidegames'];
            // ui['m___sidegames'] = undefined;
        }
        let endslide = View_EndSlideGames.CreateView(ui['m___endSG']);
        if (endslide) {
            ui['m___endSG'] = endslide.ui;
        } else {
            delete ui['m___endSG'];
            // ui['m___endSG'] = undefined;
        }

        let m___wxSG = View_WxSideGames.CreateView(ui['m___wxSG']);
        if (m___wxSG) {
            ui['m___wxSG'] = m___wxSG.ui;
        } else {
            delete ui['m___wxSG'];
            // ui['m___wxSG'] = undefined;
        }
        let end3x3 = View_End3X3Games.CreateView(ui['m___end3x3']);
        if (end3x3) {
            ui['m___end3x3'] = end3x3.ui;
        } else {
            delete ui['m___end3x3'];
            // ui['m___end3x3'] = undefined;
        }
        if (ui['m___stm']) {
            let st = View_Statement.CreateView(ui['m___stm']);
            if (st) {
                ui['m___stm'] = st.ui;
            } else {
                delete ui['m___stm'];
                // ui['m___stm'] = undefined;
            }

        }
        if (ui['m___gamebox']) {
            let st = View_GameBox.CreateView(ui['m___gamebox']);
            if (st) {
                ui['m___gamebox'] = st.ui;
            } else {
                delete ui['m___gamebox'];
                // ui['m___gamebox'] = undefined;
            }

        }
    }

}