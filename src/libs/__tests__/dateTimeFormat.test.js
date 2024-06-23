import { dateTimeFormat } from "../../utils/dateFormat";

describe("sample test", () => {
  describe("正常系", () => {
    test("test1", () => {
      // Arrange
      const targetDate = new Date("2021-01-01T00:00:00.000Z");

      // Act
      const result = dateTimeFormat(targetDate);

      // Assert
      expect(result).toBe("2021/01/01 09:00:00");
    });
  });
});
