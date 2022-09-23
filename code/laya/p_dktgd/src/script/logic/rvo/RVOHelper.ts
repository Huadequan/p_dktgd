import GlobalUnit from "../../common/GlobalUnit";
import Agent from "./Agent";
import RVOMath from "./RVOMath";
import Simulator from "./Simulator";
import Vector2D from "./Vector2D";

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
            100, // max neighbors

            //计算动态的物体时的时间窗口
            1, // time horizon

            //代表计算静态的物体时的时间窗口，比如在RTS游戏中，小兵 向城墙移动时，没必要做出避障，这个值需要设置的很
            1, // time horizon obstacles
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
        let vec2 = new Vector2D(pos.x, pos.z);
        return this._simulator.addAgent(vec2, radius);
    }

    public CreateObstacle() {

    }


    public Step(dt: number) {
        let simulator = this._simulator;
        simulator.timeStep = dt;
        for (let i = 0; i < simulator.getNumAgents(); ++i) {
            let agent = simulator.getAgent(i);
        }
        // for (let i = 0; i < simulator.getNumAgents(); ++i) {
        //     let agent = simulator.getAgent(i);
        //     let goal = agent.goal;

        //     if (RVOMath.distance(goal, agent.position) < RVOMath.RVO_EPSILON) {
        //         // Agent is within one radius of its goal, set preferred velocity to zero
        //         // simulator.setAgentPrefVelocity(i, 0, 0);
        //         agent.prefVelocity.setXY(0,0);
        //     } else {
        //         // Agent is far away from its goal, set preferred velocity as unit vector towards agent's goal.

        //         let v = RVOMath.normalize(goal.minus(agent.position)).scale(agent.maxSpeed);
        //         // simulator.setAgentPrefVelocity(i, v.x, v.y);
        //         agent.prefVelocity.setXY(v.x , v.y);
        //     }
        // }

        simulator.run();
      
        // if (simulator.reachedGoal()) {
        //     console.log('finish')
        // }
    }
}