/**
 * This class creates a triangle
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-11-1
 */

class Triangle {
  private readonly Side1: number;
  private readonly Side2: number;
  private readonly Side3: number;

  constructor(Side1: number, Side2: number, Side3: number) {
    this.Side1 = Side1;
    this.Side2 = Side2;
    this.Side3 = Side3;
  }

  // getters
  public getSide1(): number {
    return this.Side1;
  }

  public getSide2(): number {
    return this.Side2;
  }

  public getSide3(): number {
    return this.Side3;
  }

  private perimeter(): number {
    let perimeter1;

    if (this.isValid()) {
      perimeter1 = this.Side1 + this.Side2 + this.Side3;
    } else {
      perimeter1 = -1;
    }
    return perimeter1;
  }

  public isValid(): boolean {
    let valid = false;
    const sides = [this.Side1, this.Side2, this.Side3];
    if (!(Math.min(...sides) < 0)) {
      const sides = [this.Side1, this.Side2, this.Side3];
      sides.sort(function (a, b) {
        return a - b;
      });
      valid = sides[0] + sides[1] > sides[2];
    }

    return valid;
  }

  public area(): number {
    const semiP = this.semiPerimeter();
    const area = Math.sqrt(
      semiP * (semiP - this.Side1) * (semiP - this.Side2) * (semiP - this.Side3)
    );
    return area;
  }

  public getType(): string {
    let triangle = "";
    if (this.Side1 === this.Side2 && this.Side2 === this.Side3) {
      triangle = "Equilateral Triangle";
    } else if (
      (this.Side1 === this.Side2 && this.Side1 !== this.Side3) ||
      (this.Side2 === this.Side3 && this.Side2 !== this.Side1) ||
      (this.Side3 === this.Side1 && this.Side3 !== this.Side2)
    ) {
      triangle = "Isoceles Triangle";
    } else {
      const allAngles = [this.angle(1), this.angle(2), this.angle(3)];
      let angleCheck = false;

      for (let count = 0; count < allAngles.length; count++) {
        if (allAngles[count] * (180 / Math.PI) === 90) {
          angleCheck = true;
          break;
        }
      }

      if (angleCheck) {
        triangle = "Right Angle Triangle";
      } else {
        triangle = "Scalene Triangle";
      }
    }
    return triangle;
  }

  public semiPerimeter(): number {
    let sPerimeter;
    if (this.isValid()) {
      sPerimeter = this.perimeter() / 2;
    } else {
      sPerimeter = -1;
    }
    return sPerimeter;
  }

  public angle(angleNumber: number): number {
    if (this.isValid() && angleNumber > 0 && angleNumber < 4) {
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
        ),
      ];

      return radianAngles[angleNumber - 1];
    } else {
      return -1;
    }
  }
}
export = Triangle;
