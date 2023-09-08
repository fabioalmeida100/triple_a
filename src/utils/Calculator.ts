export class Calculator {
  public add(a: number, b: number): number {
    return a + b;
  }

  public subtract(a: number, b: number): number {
    return a - b;
  }

  public multiply(a: number, b: number): number {
    return a * b;
  }

  public divide(a: number, b: number): number {
    return a / b;
  }

  public pow(a: number, b: number): number {
    return Math.pow(a, b);
  }

  public sqrt(a: number): number {
    return Math.sqrt(a);
  }
}
