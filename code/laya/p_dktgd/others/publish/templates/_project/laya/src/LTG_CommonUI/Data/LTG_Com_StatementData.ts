import { LTG_UI_StatementMediator } from "../Mediator/LTG_UI_StatementMediator";
import { ILTG_Com_Data } from "./ILTG_Com_Data";


export class LTG_Com_StatementData implements ILTG_Com_Data {
    /**
     * 0 选择按钮 1开关选择
     */
    state: number = 0
    /**拒绝 */
    public onClose: Laya.Handler;
    /**接收 */
    public onConfirm: Laya.Handler;
    public Send(): number {
        if (window["__GM"]) return 0;
        LTG_UI_StatementMediator.instance.Show(this);
        return 0;
    }

}