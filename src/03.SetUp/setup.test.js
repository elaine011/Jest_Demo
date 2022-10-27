let nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
// beforeAll(() => {
//   nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
// });
beforeEach(() => {
  nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
});
// afterEach(() => {
//   nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
// });
// afterAll(() => {
//   nameList = ["yarchiee", "chloe", "elaine", "hippo", "frank", "hane"];
// });
describe("name array", () => {
  it("add jay to the end", () => {
    nameList.push("jay");
    expect(nameList[nameList.length - 1]).toBe("jay");
  });
  it("add kay to the beginning", () => {
    nameList.unshift("kay");
    expect(nameList[0]).toBe("kay");
  });
  it("to let initial length of 6", () => {
    expect(nameList.length).toBe(6);
  });
  //   it.only("to let initial length of 6", () => {
  //     expect(nameList.length).toBe(6);
  //   });
});
