import ColorEx from "../../../LTGame/LTUtils/ColorEx";
import { LTStart } from "../../../LTGame/Start/LTStart";
import { Simulator } from "./Simulator";

export default class RVODebug{
    private static _ins: RVODebug;
    public static get ins() : RVODebug {
        if (!this._ins) {
            this._ins = new RVODebug();
        }
        return this._ins;
    }
    
    simulaor: Simulator;
    sprite: Laya.Sprite;
    graphics: Laya.Graphics;
    public start(simulaor: Simulator) {
        this.simulaor = simulaor;
        let sprite = new Laya.Sprite();
        Laya.stage.addChild(sprite);
        this.sprite = sprite;
        this.sprite.width = Laya.stage.width;
        this.sprite.height = Laya.stage.height;
        
        this.sprite.graphics.drawRect(0,0,Laya.stage.width, Laya.stage.height, "#006666");
        let temp = new Laya.Sprite();
        this.sprite.addChild(temp);
        temp.width = Laya.stage.width;
        temp.height = Laya.stage.height;
        this.graphics = temp.graphics;

        this.sprite.on(Laya.Event.MOUSE_DOWN, this, this.ClickStart);
        this.sprite.on(Laya.Event.CLICK, this, this.ClickOver);
        this.sprite.on(Laya.Event.MOUSE_MOVE, this, this.ClickMove);
    }

    private ClickStart(event: Laya.Event) {
        console.log("点击");

        for (let i = 0; i < this.simulaor.getNumAgents(); i++) {
           
            // let goal = new Vector2D(100, 100);
            this.simulaor.setAgentGoal(i, event.stageX, event.stageY);
        }
    }

    private ClickMove(event: Laya.Event) {
        for (let i = 0; i < this.simulaor.getNumAgents(); i++) {
           
            // let goal = new Vector2D(100, 100);
            this.simulaor.setAgentGoal(i, event.stageX, event.stageY);
        }
    }

    private ClickOver(event: Laya.Event) {
        console.log("松开");

        // for (let i = 0; i < this.simulaor.getNumAgents(); i++) {
        //     // this.simulaor.setAgentPrefVelocity(i, 0,0);
        //     let goal = this.simulaor.getAgentPosition(i);
        //     this.simulaor.setAgentGoal(i, goal.x, goal.y);
        // }
    }

    public Draw() {
        
        this.graphics.clear()
        let color = "#99CC33";
        for (let i = 0; i < this.simulaor.getNumAgents(); ++i) {
            let pos = this.simulaor.getAgentPosition(i);
            let radius = this.simulaor.getAgentRadius(i);
            
            this.graphics.drawCircle(pos.x, pos.y, radius,color, "#231564", 2)
        }

        let obstacles = this.simulaor.obstacles_;
        let convexs = [];
        let rect = [];
        for (let i = 0; i < obstacles.length; ++i) {
            
            let obstacle = obstacles[i];
            rect.push(obstacle.point_.x);
            rect.push(obstacle.point_.y);

            let next = obstacle.nextObstacle_;
            if (next.id_ < obstacle.id_) {

                rect.push(next.point_.x);
                rect.push(next.point_.y);
                convexs.push(rect);
                rect = [];
            }
        }

        for (let i = 0; i < convexs.length; ++i) {
            let rect = convexs[i];
           
            this.graphics.drawPoly(0, 0, rect, color, color, 2);
            // this.sprite.graphics.drawLines(0, 0, rect, color, 2);
        }
    }
}