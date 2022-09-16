import AnimComponent from "../common/AnimComponent";

export default class ModelBase {
    public animCmp: AnimComponent;
    private _layerIndex: number;
    constructor() {
        this._layerIndex = 1;
        
    }
}