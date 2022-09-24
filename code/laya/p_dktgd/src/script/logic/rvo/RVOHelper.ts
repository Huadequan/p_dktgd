import GlobalUnit from "../../common/GlobalUnit";
import { Agent } from "./Agent";
import { Simulator } from "./Simulator";
import { Vector2 } from "./Vector2";


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
        this._simulator.setTimeStep(1);
        this._simulator.setAgentDefaults(
            //在寻找周围邻居的搜索距离，这个值设置越大，会让小球在越远距离做出避障行为
            0.6, // neighbor distance (min = radius * radius)

            //寻找周围邻居的最大数目，这个值设置越大，最终计算的速度越 精确，但会加大计算量
            5, // max neighbors

            //计算动态的物体时的时间窗口
            100, // time horizon

            //代表计算静态的物体时的时间窗口，比如在RTS游戏中，小兵 向城墙移动时，没必要做出避障，这个值需要设置的很
            1, // time horizon obstacles

            //半径
            0.3,
            //最大速度
            0.5,
        )
    }

    public CreateAgent(colliderObj: Laya.Sprite3D): Agent {
        let cmp: Laya.PhysicsCollider = colliderObj.getComponent(Laya.PhysicsCollider)
        if (!cmp) {
            console.error("碰撞体错误");
            return;
        }

        let shape = cmp.colliderShape as Laya.SphereColliderShape;
        let radius = colliderObj.transform.localScale.x * shape.radius;
        let pos = colliderObj.transform.position;
        let vec2 = new Vector2(pos.x, pos.z);
        return this._simulator.addAgent(vec2, radius);
    }

    public CreateObstacle() {

    }


    public Step(dt: number) {
        let simulator = this._simulator;
        simulator.doStep();
    }
}