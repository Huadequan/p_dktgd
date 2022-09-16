import MathEx from "../../LTGame/LTUtils/MathEx";
import LTPlatform from "../../LTGame/Platform/LTPlatform";
import UI_NativeInterstitalMediator from "../../LTGame/UIExt/DefaultUI/UI_NativeInterstitalMediator";
import { ILTG_Com_Data } from "./ILTG_Com_Data";



export class LTG_Com_NativeData implements ILTG_Com_Data {

    native: any;
    Send(): number {
        let showNativeInterstitial = async () => {
            let ad = await LTPlatform.instance.getNativeAd(MathEx.RandomFromArray(LTPlatform.instance.platformData.nativeinpageIds));
            if (ad) {
                this.native = ad;
                UI_NativeInterstitalMediator.instance.Show(this);
                return 0;
            }
        }
        showNativeInterstitial();
        return 0;
    }


}