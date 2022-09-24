/// <reference path="Obstacle.ts" />

import { Obstacle } from "./Obstacle";


export class ObstacleTreeNode {

    left:ObstacleTreeNode;
    obstacle:Obstacle;
    right:ObstacleTreeNode;

}