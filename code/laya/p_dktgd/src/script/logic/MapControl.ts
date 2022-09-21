import StringEx from "../../LTGame/LTUtils/StringEx";
import LTRes from "../../LTGame/Res/LTRes";
import GlobalUnit from "../common/GlobalUnit";

export class MapData {
    enable: boolean;
    block: Laya.Sprite3D;
    strPos: string;
    pos: Laya.Vector2;
}

export default class MapControl {

    constructor() {
        this._rect = new Laya.Vector2();
        this._mapList = {};
        this._blockPool = []
    }

    private _rect: Laya.Vector2;
    private _mapList: {[string: string]: MapData};
    private _mapContent: Laya.Sprite3D;
    private _blockPool: Laya.Sprite3D[];
    private _mapPath: string;
    public InitMapData(content: Laya.Sprite3D, mapPath: string) {
        this._mapContent = content;
        this._mapPath = mapPath;

        let block = this._GetBlock();
        let rect = block.getChildByName("__rect__") as Laya.Sprite3D;
        this._rect.setValue(rect.transform.localScaleX, rect.transform.localScaleY);
      
        this._blockPool.push(block);
        this._RefreshMap();
    }

    private _GetBlock() :Laya.Sprite3D{
        let item = this._blockPool.pop();
        if (!item) {
            item = LTRes.Get(this._mapPath) as Laya.Sprite3D;
        } 
      
        return item;
    }

    private _RefreshMap() {
        let pos = this._GetMapPos();
        let x = pos[0];
        let y = pos[1];

        let initMap = [
            [x,y],
            [x-1,y],
            [x+1,y],

            [x,y+1],
            [x-1,y+1],
            [x+1,y+1],

            [x,y-1],
            [x-1,y-1],
            [x+1,y-1],
        ]

        for (let i = 0; i < initMap.length; i++) {
            let data = initMap[i];
            let strPos = data[0]+"_"+data[1];
            let mapData = this._mapList[strPos];
            if (!mapData || !mapData.enable) {
                this._AddMap(data[0], data[1]);
            }
            
        }
    }

    private _GetMapPos(): number[] {
        let pos = GlobalUnit.game.player.pos;
        let x = Math.floor(Math.abs(pos.x) / this._rect.x) * (pos.x < 0 ? -1 : 1);
        let y = Math.floor(Math.abs(pos.y) / this._rect.y) * (pos.y < 0 ? -1 : 1);
        return [x, y];
    }

    private _AddMap(x: number, y: number) {

        let strPos = x + "_" + y;
        let mapData = this._mapList[strPos];

        if (!mapData) {
            mapData = new MapData();
            this._mapList[strPos] = mapData;
            mapData.strPos = strPos;
            mapData.pos = new Laya.Vector2(x,y);
        }
        
        let block = this._GetBlock();
        mapData.block = block;
        mapData.enable = true;
        this._mapContent.addChild(block);
        let old = block.transform.position;
        old.z = 0;
        old.x = x * this._rect.x;
        old.y = y * this._rect.y;

        block.transform.position = old;
    }

    private _RemoveMap(map: MapData) {
        let strPos = map.strPos;
        let mapData = this._mapList[strPos];
        mapData.enable = false;
        let block = mapData.block;
        mapData.block.removeSelf();
        mapData.block = null;
        this._blockPool.push(block);
    }

    public UpdateMap() {
        let data = this._GetMapPos();
        for (let k in this._mapList) {
            let mapData = this._mapList[k];
            if (!this._mapList[k].enable) continue;
       
            let x = mapData.pos.x;
            let y = mapData.pos.y;
       
            if (x > data[0] + 1 || 
                x < data[0] - 1 ||
                y > data[1] + 1 || 
                y < data[1] - 1) {
                this._RemoveMap(mapData);
            }
        }
        this._RefreshMap();
    }
}
