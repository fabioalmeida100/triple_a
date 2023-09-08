import { describe, expect, it } from "@jest/globals";
import { Calculator } from "../utils/Calculator";

describe("Calculator", () => {
  it("should add two numbers", () => {
    // Arrange
    const calculator = new Calculator();

    // Act
    const result = calculator.add(1, 2);

    // Assert
    expect(result).toBe(3);
  });

  it("should subtract two numbers", () => {
    // Arrange
    const calculator = new Calculator();

    // Act
    const result = calculator.subtract(1, 2);

    // Assert
    expect(result).toBe(-1);
  });

  it("should multiply two numbers", () => {
    // Arrange
    const calculator = new Calculator();

    // Act
    const result = calculator.multiply(1, 2);

    // Assert
    expect(result).toBe(2);
  });

  it("should divide two numbers", () => {
    // Arrange
    const calculator = new Calculator();

    // Act
    const result = calculator.divide(1, 2);

    // Assert
    expect(result).toBe(0.5);
  });

  it("should pow two numbers", () => {
    // Arrange
    const calculator = new Calculator();

    // Act
    const result = calculator.pow(2, 2);

    // Assert
    expect(result).toBe(4);
  });
});
