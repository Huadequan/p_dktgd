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

    protected list: LTList<ModelBase>;
    public InitLayer(){
        this.list = new LTList(); 
    }
    
    public PushModel(model: ModelBase) {
        this.list.Add(model);
    }

    private _AnalyseLayerIndex(){
        
    }

    public OnUpdate(dt: number) {

    }
}