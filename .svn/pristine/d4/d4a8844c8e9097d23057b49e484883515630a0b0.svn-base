import { LTG_Com_StatementData } from "../../../../LTG_CommonUI/Data/LTG_Com_StatementData";
import CommonSaveData from "../../../Commom/CommonSaveData";
import { EPlatformType } from "../../../Platform/EPlatformType";
import LTPlatform from "../../../Platform/LTPlatform";
import UI_Statement from "../UI/LTGame/UI_Statement";
//**隐私声明按钮  m___stm */
export default class View_Statement {

    static CreateView(tagUI: fgui.GComponent): View_Statement {
        if (tagUI == null) return null;


        if (LTPlatform.instance.platform != EPlatformType.Vivo && LTPlatform.instance.platform != EPlatformType.Oppo) {
            // 只有oppo支持
            console.log("Statement 平台不需要");
            tagUI.dispose();
            return null;
        }
        if (tagUI instanceof UI_Statement) {
            return new View_Statement(tagUI);
        }
        let uiInstance = UI_Statement.createInstance();
        tagUI.parent.addChildAt(uiInstance, tagUI.parent.getChildIndex(tagUI));
        uiInstance.setXY(tagUI.x, tagUI.y);
        tagUI.dispose();
        return new View_Statement(uiInstance);
    }

    private _ui: UI_Statement;
    public get ui(): UI_Statement {
        return this._ui;
    }

    private constructor(ui: UI_Statement) {
        this._ui = ui;
        this._Init();
    }

    private _Init() {
        this.ui.onClick(this, this.onShowStatement);
        if (!CommonSaveData.instance.statementSigned) {
            this.onShowStatement();
        }
    }
    onShowStatement() {
        let data = new LTG_Com_StatementData();
        data.onConfirm = Laya.Handler.create(this, () => {
            CommonSaveData.instance.statementSigned = true;
            CommonSaveData.SaveToDisk();
        });
        data.Send();
    }

}