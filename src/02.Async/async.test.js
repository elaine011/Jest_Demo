import { fetchData } from "./async";

it("return async", () => {
  // eslint-disable-next-line jest/valid-expect-in-promise
  return fetchData().then((data) => {
    expect(data.length).toBe(30);
  });
});
