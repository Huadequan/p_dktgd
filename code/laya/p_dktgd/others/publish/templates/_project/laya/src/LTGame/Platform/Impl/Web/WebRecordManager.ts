import DefaultRecordManager from "../../DefaultRecordManager";

export class WebRecordManager extends DefaultRecordManager {

    supportRecord = true;

    ShareVideo(onSuccess: Laya.Handler, onCancel: Laya.Handler, onFailed: Laya.Handler) {
        if (this.supportRecord) {
            console.log("强制模拟成功");
            if (onSuccess) {
                onSuccess.run();
            }
        } else {
            console.log("强制模拟失败");
            if (onFailed) {
                onFailed.run();
            }
        }

    }
}