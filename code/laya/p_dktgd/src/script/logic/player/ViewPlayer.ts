import LTRes from "../../../LTGame/Res/LTRes";
import GlobalUnit from "../../common/GlobalUnit";
import ResDefine from "../../common/ResDefine";
import { PlayerConfig } from "../../config/PlayerConfig";
import ModelBase from "../ModelBase";

export default class ViewPlayer extends ModelBase{
    protected config: PlayerConfig.config;
    public SetPlayerId(id: number) {
        this.config = PlayerConfig.data[id];
    }

    public PreLoad(urls: string[]) {
        urls.push(ResDefine.FixPath(this.config.model_path));
    }

    public CreatePlayer(point: Laya.Sprite3D) {
        this.root = LTRes.Get(ResDefine.FixPath(this.config.model_path));
        
    }
}