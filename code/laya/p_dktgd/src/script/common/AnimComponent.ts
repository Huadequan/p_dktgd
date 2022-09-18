import { AnimFrameConfig } from "../config/AnimFrameConfig";

export default class AnimComponent extends Laya.Script{
    private _material: Laya.BlinnPhongMaterial;
 
    private _playIndex: number;
    private _frameIndex: number;
    private _cacheFrameTime: number;
    private _cacheVec4: Laya.Vector4;
    protected config: AnimFrameConfig.config;
    constructor (skin: Laya.Sprite3D, config: AnimFrameConfig.config) {
        super();
       
        this.config = config;
        this._cacheVec4 = new Laya.Vector4();

        this._cacheFrameTime = 0;
        this._frameIndex = 0;
        this._material = (skin as Laya.MeshSprite3D).meshRenderer.sharedMaterial as Laya.BlinnPhongMaterial;
        this.play(0);
    }

    public play(index: number = 0) {
        if (this._playIndex == index) return;
        
        if (!this.config.act_indexes[index]) {
            console.error("*********无效动作**********");
            return;
        }

        this._playIndex = index;
        this._frameIndex = 0;
        this._changeAnimFrame();
    }

    private _changeAnimFrame() {
        let config = this.config;
        let indesx = config.act_indexes[this._playIndex];
        if (this._frameIndex >= indesx.length) {
            this._frameIndex = 0;
        }

        let index = indesx[this._frameIndex];
        let X = index % config.atlas_grid[0];
        let y = Math.floor(index / config.atlas_grid[0]);

        this._cacheVec4.x = 1 / config.atlas_grid[0];
        this._cacheVec4.y = 1 / config.atlas_grid[1];
        this._cacheVec4.z = X * this._cacheVec4.x;
        this._cacheVec4.w = 1 - this._cacheVec4.y;

        this._material.tilingOffset = this._cacheVec4;

        this._cacheFrameTime = 0;
        this._frameIndex++;
    }

    public onUpdate() {
        let dt = Laya.timer.delta * 0.001;

        this._cacheFrameTime += dt;
        let config = this.config;

        let frameTime = 1 / config.sampling_speed[this._playIndex];
        if (this._cacheFrameTime >= frameTime) {
            this._changeAnimFrame();
        } 
    }
}