import LTList from "../../LTGame/LTUtils/LTList";
import ModelBase from "../logic/ModelBase";

export default class LayerManager {
    private static _instance: LayerManager;
    
    public static get instance() : LayerManager {
        if (!this._instance) {
            this._instance = new LayerManager();
        }
        return this._instance; 
    }

    protected list: ModelBase[];
    public InitLayer(){
        this.list = []; 
    }
    
    public PushModel(model: ModelBase) {
        this.list.push(model);
        
    }

    private _AnalyseLayerIndex(){
        let array = this.list;
        let len = this.list.length;
        for (let i = 0; i < len - 1; ++i) {
            for (let j = i + 1; j < len - 1 - i; j++) {
                if (array[j].depth > array[j + 1].depth) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    array[j].layerIndex = j;
                }
            }
        }


    }

    public OnUpdate(dt: number) {
        this._AnalyseLayerIndex();
    }
}