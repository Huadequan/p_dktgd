import Simulator from "./Simulator";

export default class RVOHelper {
    private static _instance: RVOHelper;
    public static get instance() : RVOHelper {
        if (!this._instance) {
            this._instance = new RVOHelper();
        }

        return this._instance;
    }

    private _simulator: Simulator;

    public InitRVO() {
        this._simulator = new Simulator();
        
    }
}