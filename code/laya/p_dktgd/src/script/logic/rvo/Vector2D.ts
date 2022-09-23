export default class Vector2D {

  static ZERO: Vector2D = new Vector2D();
  static cacheVec2: Vector2D = new Vector2D();
  x = 0;
  y = 0;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public plus(vector: Vector2D): Vector2D {
    return new Vector2D(this.x + vector.x, this.y + vector.y);
  }

  //subtract
  public minus(vector: Vector2D): Vector2D {
    return new Vector2D(this.x - vector.x, this.y - vector.y);
  }

  public multiply(vector: Vector2D): number {
    return this.x * vector.x + this.y * vector.y;
  }

  public scale(k: number): Vector2D {
    return new Vector2D(this.x * k, this.y * k);
  }

  public normalize(): Vector2D {
    return this.scale(1 / this.abs());
  }

  public absSq(): number {
    return this.multiply(this);
  }

  public abs(): number {
    return Math.sqrt(this.absSq());
  }

  public clone(): Vector2D {
    return new Vector2D(this.x, this.y);
  }

  public setXY(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}
