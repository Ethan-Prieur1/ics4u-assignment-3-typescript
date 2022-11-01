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
  } else if (
      this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side1 === this.side3
    ) {
      triangleType = 'Isoceles'
    } else {
      triangleType = 'Scalene'
    }
    return triangleType
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
  
}

export = Vehicle
