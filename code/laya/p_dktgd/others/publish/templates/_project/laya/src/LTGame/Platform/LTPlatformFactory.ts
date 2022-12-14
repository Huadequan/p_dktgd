import IPlatform from "./IPlatform";
import TTPlatform from "./TTPlatform";
import WXPlatform from "./WXPlatform";
import BDPlatform from "./BDPlatform";
import QTTPlatform from "./QTTPlatform";
import QQPlatform from "./QQPlatform";
import DefaultPlatform from "./DefaultPlatform";
import OppoPlatform from "./OppoPlatform";
import { NativeIOSPlatform } from "./Impl/Native_IOS/NativeIOSPlatform";
import VivoPlatform from "./VivoPlatform";
import KSPlatform from "./KSPlatform";
import { NativeAndroidPlatform } from "./Impl/Native_Android/NativeAndroidPlatform";
import HWPlatform from "./HWPlatform";
import { NativeAndroid233Platform } from "./Impl/Native_Android/NativeAndroid233Platform";
import Gamebox4399Platform from "./Impl/4399/Gamebox4399Platform";
import HTML4399Platform from "./Impl/4399/HTML4399Platform";
import { NativeAndroidMMYPlatform } from "./Impl/Native_Android/NativeAndroidMMYPlatform";

export default class LTPlatformFactory {

    public static CreateInstance(): IPlatform {

        let isQTT = window["qttGame"] != null;

        let result: IPlatform;
        if (Laya.Browser.onTTMiniGame) {
            result = new TTPlatform();
        } else if (Laya.Browser.onHWMiniGame) {
            result = new HWPlatform();
        } else if (Laya.Browser.window.h5api) {
            result = new HTML4399Platform();
        } else if (window['gamebox']) {
            result = new Gamebox4399Platform();
        } else if (Laya.Browser.onMiniGame) {
            if (window['ks']) {
                result = new KSPlatform();
            } else {
                result = new WXPlatform();
            }
        } else if (Laya.Browser.onBDMiniGame) {
            result = new BDPlatform();
        } else if (isQTT) {
            result = new QTTPlatform();
        } else if (Laya.Browser.onQQMiniGame) {
            result = new QQPlatform();
        } else if (Laya.Browser.onQGMiniGame) {
            result = new OppoPlatform();
        } else if (Laya.Browser.onVVMiniGame) {
            result = new VivoPlatform();
        } else if (window['conch']) {
            let conchConfig = window['conchConfig'];
            let os = conchConfig.getOS();
            if (os == 'Conch-ios') {
                result = new NativeIOSPlatform();
            } else if (os == 'Conch-android') {
                if (window["GAME233"]) {
                    result = new NativeAndroid233Platform();
                } else if (window["momoyu"]) {
                    result = new NativeAndroidMMYPlatform();
                } else {
                    result = new NativeAndroidPlatform();
                }
            } else {
                result = new DefaultPlatform();
                console.error("???????????????app??????");
            }

        } else {
            console.log("???????????????,???????????????web", Laya.Browser.userAgent);
            result = new DefaultPlatform();
        }
        return result;

    }

}