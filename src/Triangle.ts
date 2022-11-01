/**
 * This class creates a triangle
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-10-18
 */

class Triangle {
  private readonly side1: number
  private readonly side2: number
  private readonly side3: number

  constructor(length1: number, length2: number. length3: number)
    this.side1 = length1
    this.side2 = length2
    this.side3 = length3
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
    let perimeter1

    if (this.isValid()) {
      perimeter1 = this.Side1 + this.Side2 + this.Side3
    } else {
      perimeter1 = -1
    }
    return perimeter1
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
    if (!this.isValid()) {
      const semiPerimeter = -1
      return semiPerimeter
   } else {
      const semiperimeter = (this.sideA + this.sideB + this.sideC) / 2
      return semiperimeter
    }
  }


  public getArea(): number {
          const semiP = this.getSemiPerimeter
          return Math.sqrt(
                  semiP * (semiP - this.side1) * (semiP - this.side2) * (semiP - this.side3)
          )
  }

  getType(): string {
    if (!this.isValid()) {
      const shape = '-1'
      return shape
    } else if (this.sideA === this.sideB && this.sideB === this.sideC) {
      const shape = 'Equilateral Triangle'
      return shape
    } else if (
      this.sideA === this.sideB ||
      this.sideB === this.sideC ||
      this.sideA === this.sideC
    ) {
      const shape = 'Isosceles Triangle'
      return shape
    } else if (
      this.sideA * this.sideA + this.sideB * this.sideB ===
        this.sideC * this.sideC ||
      this.sideC * this.sideC + this.sideB * this.sideB ===
        this.sideA * this.sideA ||
      this.sideC * this.sideC + this.sideA * this.sideA ===
        this.sideB * this.sideB
    ) {
      const shape = 'Right angle Triangle'
      return shape
    } else {
      const shape = 'Scalene Triangle!'
      return shape
    }
  }

  public angle (angleNumber: number): number {
    if (this.isValid() && angleNumber > 0 && angleNumber < 4) {
      // I do not want to redo this, so I will leave the array here.
      const radianAngles = [
        Math.acos(
          (Math.pow(this.Side1, 2) +
            Math.pow(this.Side2, 2) -
            Math.pow(this.Side3, 2)) /
            (2 * this.Side1 * this.Side2)
        ),
        Math.acos(
          (Math.pow(this.Side2, 2) +
            Math.pow(this.Side3, 2) -
            Math.pow(this.Side1, 2)) /
            (2 * this.Side2 * this.Side3)
        ),
        Math.acos(
          (Math.pow(this.Side3, 2) +
            Math.pow(this.Side1, 2) -
            Math.pow(this.Side2, 2)) /
            (2 * this.Side3 * this.Side1)
        )
      ]

      return radianAngles[angleNumber - 1]
    } else {
      return -1
    }
  }
}
export = Triangle
