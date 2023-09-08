import { describe, expect, it } from "@jest/globals";
import { Calculator } from "../utils/Calculator";

describe("Calculator", () => {
  it("should add two numbers", () => {
    // Arrange
    const calculator = new Calculator();
    const a = 1;
    const b = 2;

    // Act
    const result = calculator.add(a, b);

    // Assert
    expect(result).toBe(3);
  });

  it("should subtract two numbers", () => {
    // Arrange
    const calculator = new Calculator();
    const a = 1;
    const b = 2;

    // Act
    const result = calculator.subtract(a, b);

    // Assert
    expect(result).toBe(-1);
  });

  it("should multiply two numbers", () => {
    // Arrange
    const calculator = new Calculator();
    const a = 2;
    const b = 3;

    // Act
    const result = calculator.multiply(a, b);

    // Assert
    expect(result).toBe(6);
  });

  it("should divide two numbers", () => {
    // Arrange
    const calculator = new Calculator();
    const a = 7;
    const b = 2;

    // Act
    const result = calculator.divide(a, b);

    // Assert
    expect(result).toBe(3.5);
  });

  it("should pow two numbers", () => {
    // Arrange
    const calculator = new Calculator();
    const a = 2;
    const b = 2;

    // Act
    const result = calculator.pow(a, b);

    // Assert
    expect(result).toBe(4);
  });
});
