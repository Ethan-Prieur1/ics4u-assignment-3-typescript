/**
 * This class creates a triangle
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-18
 */

class Triangle {
  public side1: number
  public side2: number
  public side3: number

  constructor(
    side1: number,
    side2: number,
    side3: number
  ) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
  }

  // getters
  public getSide1(): number {
    return this.side1
  }

  public getSide2(): number {
    return this.side2
  }

  public getSide3(): number {
    return this.side3
  }

  private getPerimeter(): number {
   return this.side1 + this.side2 + this.side3
  }

  public isValid(): boolean {
    if (
            this.side1 + this.side2 > this.side3 &&
            this.side1 + this side3 > this.side2 &&
            this.side2 + this.side2 > this.side1
      ) { 
              return true

        }
              return false
        }

  public getSemiPerimeter(): number {
    return this.getPerimeter / 2
  }


  public getArea(): number {
          const semiP = this.getSemiPerimeter
          return Math.sqrt(
                  semiP * (semiP - this.side1) * (semiP - this.side2) * (semiP - this.side3)
          )
  }

  public getType(): string {
          let triangleType
          if (this.side1 == this.side2 && this.side2 == this.side3) {
                  triangleType = 'Equilateral'
  } else if (
          this.side1 ** 2 + this.side2 ** 2 === this.side3 ** 2||
          this.side3 ** 2 - this.side2 ** 2 === this.side1 ** 2||
          this.side1 ** 2 + this.side3 ** 2 === this.side2 ** 2
                triangleType = 'Right Angle'
  public status(): void {
    console.log(
      `        --> Side1: ${this.side1}
        --> Side2: ${this.side2}
        --> Side3: ${this.side3}`
    )
  }
}

export = Vehicle
