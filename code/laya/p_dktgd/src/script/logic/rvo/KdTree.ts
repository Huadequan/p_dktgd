/// <reference path="Vector2.ts" />
/// <reference path="Line.ts" />
/// <reference path="Agent.ts" />
/// <reference path="Obstacle.ts" />
/// <reference path="AgentTreeNode.ts" />
/// <reference path="ObstacleTreeNode.ts" />
/// <reference path="FloatPair.ts" />

import { Agent } from "./Agent";
import { AgentTreeNode } from "./AgentTreeNode";
import { FloatPair } from "./FloatPair";
import { Obstacle } from "./Obstacle";
import { ObstacleTreeNode } from "./ObstacleTreeNode";
import { RVOMath } from "./RVOMath";
import { Simulator } from "./Simulator";
import { Vector2 } from "./Vector2";





export class KdTree {

    private MAX_LEAF_SIZE: number = 10;

    private agents_: Agent[] = [];
    private agentTree_: AgentTreeNode[] = [];
    private obstacleTree_: ObstacleTreeNode;

    constructor() { }

    buildAgentTree() {        
            //    this.agents_ = new Agent[Simulator.Instance().agents_.length];
            for (var i = 0; i < Simulator.Instance().agents_.length; ++i) {
                this.agents_[i] = Simulator.Instance().agents_[i];
            }

            // this.agentTree_ = new AgentTreeNode[2 *this. agents_.length];
            for (var i = 0; i < this.agents_.length * 2; ++i) {
                this.agentTree_[i] = new AgentTreeNode();

            }
        

        if (this.agents_.length != 0) {

            this.buildAgentTreeRecursive(0, this.agents_.length, 0);
        }
    }



    buildAgentTreeRecursive(begin: number, end: number, node: number) {
        // console.log(node); 


        this.agentTree_[node].begin = begin;
        this.agentTree_[node].end = end;
        this.agentTree_[node].minX = this.agentTree_[node].maxX = this.agents_[begin].position_.x;
        this.agentTree_[node].minY = this.agentTree_[node].maxY = this.agents_[begin].position_.y;

        for (var i = begin + 1; i < end; ++i) {
            this.agentTree_[node].maxX = Math.max(this.agentTree_[node].maxX, this.agents_[i].position_.x);
            this.agentTree_[node].minX = Math.min(this.agentTree_[node].minX, this.agents_[i].position_.x);
            this.agentTree_[node].maxY = Math.max(this.agentTree_[node].maxY, this.agents_[i].position_.y);
            this.agentTree_[node].minY = Math.min(this.agentTree_[node].minY, this.agents_[i].position_.y);
        }

        if (end - begin > this.MAX_LEAF_SIZE) {

            var isVertical: boolean = (this.agentTree_[node].maxX - this.agentTree_[node].minX > this.agentTree_[node].maxY - this.agentTree_[node].minY);
            var splitValue: number = (isVertical ? 0.5 * (this.agentTree_[node].maxX + this.agentTree_[node].minX) : 0.5 * (this.agentTree_[node].maxY + this.agentTree_[node].minY));

            var left: number = begin;
            var right: number = end;

            while (left < right) {
                while (left < right && (isVertical ? this.agents_[left].position_.x : this.agents_[left].position_.y) < splitValue) {
                    ++left;
                }

                while (right > left && (isVertical ? this.agents_[right - 1].position_.x : this.agents_[right - 1].position_.y) >= splitValue) {
                    --right;
                }

                if (left < right) {
                    // std::swap in c++ to JS
                    var tmp: Agent = this.agents_[left];
                    this.agents_[left] = this.agents_[right - 1];
                    this.agents_[right - 1] = tmp;
                    ++left;
                    --right;
                }
            }

         //   var leftSize: number = left - begin;

            if (left == begin) {
                ++left;
                ++right;
            }

            this.agentTree_[node].left = node + 1;
            this.agentTree_[node].right = node + 2 * (left - begin);

            this.buildAgentTreeRecursive(begin, left, this.agentTree_[node].left);
            this.buildAgentTreeRecursive(left, end, this.agentTree_[node].right);


        }
    }




    computeAgentNeighbors(agent: Agent, rangeSq: number) {

        this.queryAgentTreeRecursive(agent, rangeSq, 0);
    }


    queryAgentTreeRecursive(agent: Agent, rangeSq: number, node: number) {



        if (this.agentTree_[node].end - this.agentTree_[node].begin <= this.MAX_LEAF_SIZE) {
            for (var i = this.agentTree_[node].begin; i < this.agentTree_[node].end; ++i) {


                agent.insertAgentNeighbor(this.agents_[i], Agent.rangeSq);
            }
        }
        else {
            var distSqLeft = RVOMath.sqr(Math.max(0, this.agentTree_[this.agentTree_[node].left].minX - agent.position_.x)) + RVOMath.sqr(Math.max(0, agent.position_.x - this.agentTree_[this.agentTree_[node].left].maxX)) + RVOMath.sqr(Math.max(0, this.agentTree_[this.agentTree_[node].left].minY - agent.position_.y)) + RVOMath.sqr(Math.max(0, agent.position_.y - this.agentTree_[this.agentTree_[node].left].maxY));

            var distSqRight = RVOMath.sqr(Math.max(0, this.agentTree_[this.agentTree_[node].right].minX - agent.position_.x)) + RVOMath.sqr(Math.max(0, agent.position_.x - this.agentTree_[this.agentTree_[node].right].maxX)) + RVOMath.sqr(Math.max(0, this.agentTree_[this.agentTree_[node].right].minY - agent.position_.y)) + RVOMath.sqr(Math.max(0, agent.position_.y - this.agentTree_[this.agentTree_[node].right].maxY));


            if (distSqLeft < distSqRight) {
                if (distSqLeft < Agent.rangeSq) {
                    this.queryAgentTreeRecursive(agent, Agent.rangeSq, this.agentTree_[node].left);

                    if (distSqRight < Agent.rangeSq) {
                        this.queryAgentTreeRecursive(agent, Agent.rangeSq, this.agentTree_[node].right);
                    }
                }
            }
            else {
                if (distSqRight < Agent.rangeSq) {
                    this.queryAgentTreeRecursive(agent, Agent.rangeSq, this.agentTree_[node].right);

                    if (distSqLeft < Agent.rangeSq) {
                        this.queryAgentTreeRecursive(agent, Agent.rangeSq, this.agentTree_[node].left);
                    }
                }
            }

        }

    }

    buildObstacleTree() {

        this.obstacleTree_ = new ObstacleTreeNode();

        var obstacles: Obstacle[] = [];

        for (var i = 0; i < Simulator.Instance().obstacles_.length; ++i) {
            obstacles[i] = Simulator.Instance().obstacles_[i];
             
        }

        this.obstacleTree_ = this.buildObstacleTreeRecursive(obstacles);
    }

    buildObstacleTreeRecursive(obstacles: Obstacle[]): ObstacleTreeNode {

        // console.log("buildObstacleTreeRecursive"); 

        if (obstacles.length == 0) {
            return null;
        }


        var node: ObstacleTreeNode = new ObstacleTreeNode();

        var optimalSplit: number = 0;
        var minLeft: number = obstacles.length;
        var minRight: number = obstacles.length;

        for (var i = 0; i < obstacles.length; ++i) {
            var leftSize: number = 0;
            var rightSize: number = 0;

            var obstacleI1: Obstacle = obstacles[i];
            var obstacleI2: Obstacle = obstacleI1.nextObstacle_;

            /* Compute optimal split node. */
            for (var j = 0; j < obstacles.length; ++j) {
                if (i == j) {
                    continue;
                }

                var obstacleJ1: Obstacle = obstacles[j];
                var obstacleJ2: Obstacle = obstacleJ1.nextObstacle_;

                var j1LeftOfI: number = Vector2.leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ1.point_);
                var j2LeftOfI: number = Vector2.leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ2.point_);

                if (j1LeftOfI >= -RVOMath.RVO_EPSILON && j2LeftOfI >= -RVOMath.RVO_EPSILON) {
                    ++leftSize;
                }
                else if (j1LeftOfI <= RVOMath.RVO_EPSILON && j2LeftOfI <= RVOMath.RVO_EPSILON) {
                    ++rightSize;
                }
                else {
                    ++leftSize;
                    ++rightSize;
                }

                var l: FloatPair = new FloatPair(Math.max(leftSize, rightSize), Math.min(leftSize, rightSize));
                var r: FloatPair = new FloatPair(Math.max(minLeft, minRight), Math.min(minLeft, minRight));

                if (FloatPair.sup_equal(l, r)) {

                    break;
                }
            }

            var l: FloatPair = new FloatPair(Math.max(leftSize, rightSize), Math.min(leftSize, rightSize));
            var r: FloatPair = new FloatPair(Math.max(minLeft, minRight), Math.min(minLeft, minRight));
            if (FloatPair.inf(l, r)) {

                minLeft = leftSize;
                minRight = rightSize;
                optimalSplit = i;
            }
        }


        /* Build split node. */
        var leftObstacles: Obstacle[] = [];
         for (var n = 0; n < minLeft; ++n) leftObstacles[n] = null;
        var rightObstacles: Obstacle[] = [];
          for (var n = 0; n < minRight; ++n) rightObstacles[n] = null;

        var leftCounter: number = 0;
        var rightCounter: number = 0;
        var i: number = optimalSplit;

        var obstacleI1: Obstacle = obstacles[i];
        var obstacleI2: Obstacle = obstacleI1.nextObstacle_;


        for (var j = 0; j < obstacles.length; ++j) {
            if (i == j) {
                continue;
            }

            var obstacleJ1: Obstacle = obstacles[j];
            var obstacleJ2: Obstacle = obstacleJ1.nextObstacle_;

            var j1LeftOfI: number = Vector2.leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ1.point_);
            var j2LeftOfI: number = Vector2.leftOf(obstacleI1.point_, obstacleI2.point_, obstacleJ2.point_);

            if (j1LeftOfI >= -RVOMath.RVO_EPSILON && j2LeftOfI >= -RVOMath.RVO_EPSILON) {
                leftObstacles[leftCounter++] = obstacles[j];
            }
            else if (j1LeftOfI <= RVOMath.RVO_EPSILON && j2LeftOfI <= RVOMath.RVO_EPSILON) {
                rightObstacles[rightCounter++] = obstacles[j];
            }
            else {
                /* Split obstacle j. */
                //  float t = RVOMath.det(obstacleI2.point_ - obstacleI1.point_, obstacleJ1.point_ - obstacleI1.point_) / RVOMath.det(obstacleI2.point_ - obstacleI1.point_, obstacleJ1.point_ - obstacleJ2.point_);

                var t1: number = Vector2.det(obstacleI2.point_.moins(obstacleI1.point_), obstacleJ1.point_.moins(obstacleI1.point_))
                var t2: number = Vector2.det(obstacleI2.point_.moins(obstacleI1.point_), obstacleJ1.point_.moins(obstacleJ2.point_))
                var t: number = t1 / t2;

                //Vector2 splitpoint = obstacleJ1.point_ + t * (obstacleJ2.point_ - obstacleJ1.point_);
                var vMinus: Vector2 = obstacleJ2.point_.moins(obstacleJ1.point_);
                var vMul: Vector2 = vMinus.mul_k(t);

                var splitpoint: Vector2 = obstacleJ1.point_.plus(vMul);


                var newObstacle: Obstacle = new Obstacle();
                newObstacle.point_ = splitpoint;
                newObstacle.prevObstacle_ = obstacleJ1;
                newObstacle.nextObstacle_ = obstacleJ2;
                newObstacle.isConvex_ = true;
                newObstacle.unitDir_ = obstacleJ1.unitDir_;

                newObstacle.id_ = Simulator.Instance().obstacles_.length;

                Simulator.Instance().obstacles_.push(newObstacle);

                obstacleJ1.nextObstacle_ = newObstacle;
                obstacleJ2.prevObstacle_ = newObstacle;

                if (j1LeftOfI > 0) {
                    leftObstacles[leftCounter++] = obstacleJ1;
                    rightObstacles[rightCounter++] = newObstacle;
                }
                else {
                    rightObstacles[rightCounter++] = obstacleJ1;
                    leftObstacles[leftCounter++] = newObstacle;
                }
            }
        }

        node.obstacle = obstacleI1;
        node.left = this.buildObstacleTreeRecursive(leftObstacles);
        node.right = this.buildObstacleTreeRecursive(rightObstacles);
        return node;






    }




    computeObstacleNeighbors(agent: Agent, rangeSq: number) {

        // console.log("compute"); 
        this.queryObstacleTreeRecursive(agent, rangeSq, this.obstacleTree_);
    }


    queryObstacleTreeRecursive(agent: Agent, rangeSq: number, node: ObstacleTreeNode) {
        if (node == null) {
            return;
        }

        var obstacle1: Obstacle = node.obstacle;
        var obstacle2: Obstacle = obstacle1.nextObstacle_;

        var agentLeftOfLine: number = Vector2.leftOf(obstacle1.point_, obstacle2.point_, agent.position_);

        this.queryObstacleTreeRecursive(agent, rangeSq, (agentLeftOfLine >= 0 ? node.left : node.right));

        var distSqLine: number = RVOMath.sqr(agentLeftOfLine) / Vector2.absSq(obstacle2.point_.moins(obstacle1.point_));

        if (distSqLine < rangeSq) {
            if (agentLeftOfLine < 0) {
                /*
                 * Try obstacle at this node only if agent is on right side of
                 * obstacle (and can see obstacle).
                 */
                agent.insertObstacleNeighbor(node.obstacle, rangeSq);

            }

            /* Try other side of line. */
            this.queryObstacleTreeRecursive(agent, rangeSq, (agentLeftOfLine >= 0 ? node.right : node.left));

        }

    }




    queryVisibility(q1: Vector2, q2: Vector2, radius: number): boolean {
        return this.queryVisibilityRecursive(q1, q2, radius, this.obstacleTree_);
    }

    queryVisibilityRecursive(q1: Vector2, q2: Vector2, radius: number, node: ObstacleTreeNode): boolean {

        if (node == null) {
            return true;
        }
        else {
            var obstacle1: Obstacle = node.obstacle;
            var obstacle2: Obstacle = obstacle1.nextObstacle_;

            var q1LeftOfI: number = Vector2.leftOf(obstacle1.point_, obstacle2.point_, q1);
            var q2LeftOfI: number = Vector2.leftOf(obstacle1.point_, obstacle2.point_, q2);
            var invLengthI: number = 1 / Vector2.absSq(obstacle2.point_.moins(obstacle1.point_));

            if (q1LeftOfI >= 0 && q2LeftOfI >= 0) {
                return this.queryVisibilityRecursive(q1, q2, radius, node.left) && ((RVOMath.sqr(q1LeftOfI) * invLengthI >= RVOMath.sqr(radius) && RVOMath.sqr(q2LeftOfI) * invLengthI >= RVOMath.sqr(radius)) || this.queryVisibilityRecursive(q1, q2, radius, node.right));
            }
            else if (q1LeftOfI <= 0 && q2LeftOfI <= 0) {
                return this.queryVisibilityRecursive(q1, q2, radius, node.right) && ((RVOMath.sqr(q1LeftOfI) * invLengthI >= RVOMath.sqr(radius) && RVOMath.sqr(q2LeftOfI) * invLengthI >= RVOMath.sqr(radius)) || this.queryVisibilityRecursive(q1, q2, radius, node.left));
            }
            else if (q1LeftOfI >= 0 && q2LeftOfI <= 0) {
                /* One can see through obstacle from left to right. */
                return this.queryVisibilityRecursive(q1, q2, radius, node.left) && this.queryVisibilityRecursive(q1, q2, radius, node.right);
            }
            else {
                var point1LeftOfQ: number = Vector2.leftOf(q1, q2, obstacle1.point_);
                var point2LeftOfQ: number = Vector2.leftOf(q1, q2, obstacle2.point_);
                var invLengthQ: number = 1 / Vector2.absSq(q2.moins(q1));

                return (point1LeftOfQ * point2LeftOfQ >= 0 && RVOMath.sqr(point1LeftOfQ) * invLengthQ > RVOMath.sqr(radius) && RVOMath.sqr(point2LeftOfQ) * invLengthQ > RVOMath.sqr(radius) && this.queryVisibilityRecursive(q1, q2, radius, node.left) && this.queryVisibilityRecursive(q1, q2, radius, node.right));
            }
        }


    }







};