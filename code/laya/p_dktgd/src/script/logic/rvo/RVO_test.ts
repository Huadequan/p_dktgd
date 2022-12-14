
import RVODebug from "./RVODebug";

import GlobalUnit from "../../common/GlobalUnit";
import { Simulator } from "./Simulator";
import { Vector2 } from "./Vector2";
import { RVOMath } from "./RVOMath";
import MathEx from "../../../LTGame/LTUtils/MathEx";

export default class RVO_test {
    private simulator: Simulator

    constructor() {

        console.log("================================================");
        console.log("RVO_test");
        console.log("================================================");
        this.simulator = new Simulator();
        let simulator = this.simulator;
        simulator.setTimeStep(1);
        simulator.setAgentDefaults(
            //在寻找周围邻居的搜索距离，这个值设置越大，会让小球在越远距离做出避障行为
            40, // neighbor distance (min = radius * radius)

            //寻找周围邻居的最大数目，这个值设置越大，最终计算的速度越 精确，但会加大计算量
            5, // max neighbors

            //计算动态的物体时的时间窗口
            100, // time horizon

            //代表计算静态的物体时的时间窗口，比如在RTS游戏中，小兵 向城墙移动时，没必要做出避障，这个值需要设置的很
            1, // time horizon obstacles

            20,
            2,
        )

        let counts = 100;
        for (let i = 0; i < counts; i++) {

            let x = 30 * Math.round(i / 5) - 50;
            if (i < counts >> 1) {
                x -= 100;
            } else {
                x += 100;
            }

            let y = 30 * (i % 10) - 50;
        
            y += Laya.stage.height / 2;

            // simulator.addAgent(new Vector2(x,y));
            let radius =  MathEx.Random(20, 40);
            simulator.addAgent(new Vector2(x,y), radius);
            // simulator.agents_[i].neighborDist_ = radius * 2 * 10;
            // agent.position.setXY(x, y);
        }

        for (let i = 0; i < simulator.getNumAgents(); i++) {
            let goal = simulator.getAgentPosition(i).clone()//.scale(-1);
            if (i < counts >> 1) {
                goal.x += 300;
            } else {
                goal.x -= 300;
            }
            
            
            simulator.setAgentGoal(i, goal.x, goal.y);
        }


        let obstacle1: Vector2[] = [];
        obstacle1.push(new Vector2(-10, 40));
        obstacle1.push(new Vector2(-80, 40));
        obstacle1.push(new Vector2(-80, 10));
        obstacle1.push(new Vector2(-10, 10));
        for (let i = 0; i < obstacle1.length; i++) {
            let pos = obstacle1[i];
            pos.x += 300;
            pos.y += 500
        }
        simulator.addObstacle(obstacle1);

        let obstacle2: Vector2[] = [];
        obstacle2.push(new Vector2(50.0, 60));
        obstacle2.push(new Vector2(30.0, 30));
        obstacle2.push(new Vector2(50.0, -10));
        obstacle2.push(new Vector2(80.0, 20));
        obstacle2.push(new Vector2(70.0, 60));
        for (let i = 0; i < obstacle2.length; i++) {
            let pos = obstacle2[i];
            pos.x += 300;
            pos.y += 800
        }
        simulator.addObstacle(obstacle2);

     
        Laya.timer.once(2000, this, ()=>{
            let obstacle3: Vector2[] = [];
            obstacle3.push(new Vector2(100.0, -60.0));
            obstacle3.push(new Vector2(40.0, -60.0));
            obstacle3.push(new Vector2(40.0, -100.0));
            obstacle3.push(new Vector2(100.0, -100.0));

            for (let i = 0; i < obstacle3.length; i++) {
                let pos = obstacle3[i];
                pos.x += 300;
                pos.y += 800
            }
            simulator.addObstacle(obstacle3);
            simulator.processObstacles();
        })
        let obstacle4: Vector2[] = [];
        obstacle4.push(new Vector2(-100.0, -60.0));
        obstacle4.push(new Vector2(-100.0, -100.0));
        obstacle4.push(new Vector2(-40.0, -100.0));
        obstacle4.push(new Vector2(-40.0, -60.0));
        simulator.addObstacle(obstacle4);

        simulator.processObstacles();

        console.log(simulator)

        RVODebug.ins.start(simulator);
        Laya.timer.frameLoop(1, this, this.step);
    }

    step() {
        
        let simulator = this.simulator;
        for (let i = 0; i < simulator.getNumAgents(); ++i) {
            let goalVec = simulator.getAgentGoal(i).moins(simulator.getAgentPosition(i));
            if (Vector2.absSq(goalVec) < RVOMath.RVO_EPSILON) {
                // Agent is within one radius of its goal, set preferred velocity to zero
                simulator.setAgentPrefVelocity(i, new Vector2(0,0));
                // console.log('finish ' + i);
            } else {
                // Agent is far away from its goal, set preferred velocity as unit vector towards agent's goal.
                // let v = RVOMath.normalize(simulator.getGoal(i).minus(simulator.getAgentPosition(i))).scale(2);
                simulator.setAgentPrefVelocity(i,  Vector2.normalize(goalVec));
            }
        }

        simulator.doStep();
        RVODebug.ins.Draw();
        // console.log(simulator)
        // if (simulator.reachedGoal()) {
        //     Laya.timer.clear(this, this.step);
        //     console.log('finish')
        // }
    }

}