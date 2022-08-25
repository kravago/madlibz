const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("Test case #1", () => {
    const output = addCommas(1234)
    expect(typeof output).toBe("string");
    expect(output).toBe("1,234");
  })

  test("Test case #2", () => {
    const output = addCommas(1000000)
    expect(typeof output).toBe("string");
    expect(output).toBe("1,000,000");
  })

  test("Test case #3", () => {
    const output = addCommas(9876543210)
    expect(typeof output).toBe("string");
    expect(output).toBe("9,876,543,210");
  });
});
