/// <reference path="Vector2.ts" />
/// <reference path="Dijkstra.ts" />

import { Vector2 } from "./Vector2";

export class RoadmapVertex {

    position : Vector2;
    neighbors: number[];
    distToGoal: number[];

}