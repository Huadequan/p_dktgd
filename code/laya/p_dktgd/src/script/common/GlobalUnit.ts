import RVO_test from "../logic/rvo/RVO_test";
import { DataManager } from "../manager/DataManager";
import { EffectManager } from "../manager/EffectManager";
import GameManager from "../manager/GameManager";

export default class GlobalUnit {

    static s3d: Laya.Scene3D;

    static dataManager: DataManager;

    static game: GameManager;

    static InitAll(urls: string[]) {
        this.s3d = Laya.stage.addChildAt(new Laya.Scene3D(), 0) as Laya.Scene3D;
        window['s3d'] = this.s3d;

        this.dataManager = new DataManager();
        this.dataManager.InitData();

        this.game = new GameManager();
        this.game.PreLoad(urls);
        window['GlobalUnit'] = this;
    }

    static ResetScene(scene: Laya.Scene3D) {
        if (this.s3d != null && !this.s3d.destroyed) {
            EffectManager.instance.UnloadScene();
            this.s3d.destroy();
        }
        this.s3d = scene;
        Laya.stage.addChildAt(this.s3d, 0);
        EffectManager.instance.ReAddScene();
        window['s3d'] = this.s3d;
    }

    static async FirstCreate() {
        this.game.CreateGame();

        // new RVO_test();
    }

}