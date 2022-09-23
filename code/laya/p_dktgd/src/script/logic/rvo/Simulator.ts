
import Vector2D from "./Vector2D";
import Obstacle from "./Obstacle";
import Agent from "./Agent";
import RVOMath from "./RVOMath";
import KdTree from "./KdTree";
import Line from "./Line";
import MathEx from "../../../LTGame/LTUtils/MathEx";


export default class Simulator {
  public cacheAgentId: number = 0;
  public agents: Agent[] = [];
  public obstacles: Obstacle[] = [];
  // private goals: Vector2D[] = [];
  public kdTree: KdTree = new KdTree();

  public timeStep = 1;

  private defaultAgent: Agent; // Agent

  private time = 0;

  constructor() {
    this.kdTree.simulator = this;
    this.kdTree.MAXLEAF_SIZE = 1000;
  }

  getGlobalTime(): number {
    return this.time;
  }

  getNumAgents(): number {
    return this.agents.length;
  }

  getAgent(i: number): Agent {
    return this.agents[i];
  }

  getTimeStep(): number {
    return this.timeStep;
  }

  setAgentPrefVelocity(i: number, vx: number, vy: number) {
    this.agents[i].prefVelocity.setXY(vx, vy);
  }

  setAgentPosition(i: number, x: number, y: number) {
    this.agents[i].position.setXY(x, y);
  }

  setAgentGoal(i: number, x: number, y: number) {
    // this.goals[i].setXY(x, y);
    this.getAgent(i).goal.setXY(x, y);
  }

  setTimeStep(timeStep: number) {
    this.timeStep = timeStep;
  } 
  
  setAgentMoveSpeed(i: number, speed: number) {
    this.agents[i].maxSpeed = speed;
  }

  getAgentPosition(i: number): Vector2D {
    return this.agents[i].position;
  }

  getAgentPrefVelocity(i: number): Vector2D {
    return this.agents[i].prefVelocity;
  }

  getAgentVelocity(i: number): Vector2D {
    return this.agents[i].velocity;
  }

  getAgentRadius(i: number): number {
    return this.agents[i].radius;
  }

  getAgentOrcaLines(i: number): Line[] {
    return this.agents[i].orcaLines;
  }

  getAgentMoveSpeed(i: number): number {
    return this.agents[i].maxSpeed;
  }

  addAgent(position: Vector2D = new Vector2D(), radius: number = 1): Agent {
    if (!this.defaultAgent) {
      throw new Error("no default agent");
    }

    var agent = new Agent();
    agent.prefVelocity = Vector2D.ZERO.clone();
    agent.position = position;
    agent.maxNeighbors = this.defaultAgent.maxNeighbors;

    agent.radius = radius;
    // agent.radius = MathEx.Random(5, 10);
   
    agent.maxSpeed = 2;
    // agent.maxSpeed = MathEx.Random(2,5);
   
    agent.neighborDist = this.defaultAgent.neighborDist;
    agent.timeHorizon = this.defaultAgent.timeHorizon;
    agent.timeHorizonObst = this.defaultAgent.timeHorizonObst;
    agent.velocity = this.defaultAgent.velocity;
    agent.simulator = this;
    agent.goal = position.clone()

    agent.id = this.cacheAgentId++;
    this.agents.push(agent);

    // return this.agents.length - 1;
    return agent;
  }

  //  /** float */ neighborDist, /** int */ maxNeighbors, /** float */ timeHorizon, /** float */ timeHorizonObst, /** float */ radius, /** float*/ maxSpeed, /** Vector2 */ velocity)
  setAgentDefaults(
    neighborDist: number,
    maxNeighbors: number,
    timeHorizon: number,
    timeHorizonObst: number,
   ) {
    if (!this.defaultAgent) {
      this.defaultAgent = new Agent();
    }

    this.defaultAgent.maxNeighbors = maxNeighbors;
   
    this.defaultAgent.neighborDist = neighborDist;

    this.defaultAgent.timeHorizon = timeHorizon;
    this.defaultAgent.timeHorizonObst = timeHorizonObst;
    
    this.defaultAgent.velocity = Vector2D.ZERO.clone();
    this.defaultAgent.simulator = this;
  }

  run() {
    this.kdTree.buildAgentTree();

    for (var i = 0; i < this.getNumAgents(); i++) {
      this.agents[i].computeNeighbors();
      this.agents[i].computeNewVelocity();
      this.agents[i].update();
    }

    this.time += this.timeStep;
  }

  reachedGoal(): boolean {

    for (var i = 0, len = this.getNumAgents(); i < len; ++i) {
      let agent = this.getAgent(i);
      let pos = agent.position;
      if (RVOMath.absSq(agent.goal.minus(pos)) > RVOMath.RVO_EPSILON) {
        return false;
      }
    }
    return true;
  }

  getGoal(i: number): Vector2D {
    return this.getAgent(i).goal;
  }

  /** 添加障碍 */
  addObstacle(vertices: Vector2D[]): number {
    if (vertices.length < 2) {
      return -1;
    }

    var obstacleNo = this.obstacles.length;

    for (var i = 0, len = vertices.length; i < len; ++i) {
      var obstacle = new Obstacle();
      obstacle.point = vertices[i];
      if (i != 0) {
        obstacle.previous = this.obstacles[this.obstacles.length - 1];
        obstacle.previous.next = obstacle;
      }
      if (i == vertices.length - 1) {
        obstacle.next = this.obstacles[obstacleNo];
        obstacle.next.previous = obstacle;
      }
      obstacle.unitDir = RVOMath.normalize(vertices[(i == vertices.length - 1 ? 0 : i + 1)].minus(vertices[i]))

      if (vertices.length == 2) {
        obstacle.isConvex = true;
      } else {
        obstacle.isConvex = (
          RVOMath.leftOf(vertices[(i == 0 ? vertices.length - 1 : i - 1)],
            vertices[i], vertices[(i == vertices.length - 1 ? 0 : i + 1)]) >= 0);
      }

      obstacle.id = this.obstacles.length;

      this.obstacles.push(obstacle);
    }

    return obstacleNo;
  }

  removeObstacle(obstacleNo: number) {
      
  }

  /** 更新障碍树 */
  processObstacles() {
    this.kdTree.buildObstacleTree();
  }

  queryVisibility(point1: Vector2D, point2: Vector2D, radius: number): boolean {
    return this.kdTree.queryVisibility(point1, point2, radius);
  }

  getObstacles(): Obstacle[] {
    return this.obstacles;
  }

}
