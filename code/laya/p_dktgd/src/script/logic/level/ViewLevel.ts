import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import ResDefine from "../../common/ResDefine";
import { LevelConfig } from "../../config/LevelConfig";

export default class ViewLevel{
    public config: LevelConfig.config;
    public SetLevelId(id: number) {
        this.config = LevelConfig.data[id];
    }

    public PreLoad(urls: string[]) {
        urls.push(ResDefine.FixScene(this.config.model_path));
    }

    public layerObj: Laya.Sprite3D;
    public CreateLevel() {
        let s3d = LTRes.Get(ResDefine.FixScene(this.config.model_path));
        GlobalUnit.ResetScene(s3d);
        let layer = new Laya.Sprite3D("layerContent");
        s3d.addChild(layer);
        this.layerObj = layer;
    }
}