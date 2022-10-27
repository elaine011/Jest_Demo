import { sum } from "./sum";

describe("testing match", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
    expect(result).toBeGreaterThan(2);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThan(4);
    expect(result).toBeLessThanOrEqual(3);
  });
});
