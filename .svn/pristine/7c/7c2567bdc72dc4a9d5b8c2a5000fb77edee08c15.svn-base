import { IDevice } from "../../IDevice";

export class AndroidDevice implements IDevice {
    base: any;
    constructor(bridge: any) {
        this.base = bridge;
        console.log('android device')
    }
    surportVibrate: boolean = true;

    Vibrate(isLong: boolean) {
        console.log('调用振动', isLong);
        if (this.base) {
            if (isLong) {
                this.base.call("vibrate", 200);
            } else {
                this.base.call("vibrate", 50);
            }
        }
    }
}