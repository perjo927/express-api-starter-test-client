/* eslint-disable no-undef */

import { encodeParams } from "../src/utils/encode";

describe("encode utils", () => {
  describe("encodeParams", () => {
    test("should encode url params that have truthy values", () => {
      const params = { a: "a", b: "b", c: undefined };
      const expectedParams = "a=a&b=b";
      const encodedParams = encodeParams(params);

      expect(encodedParams).toStrictEqual(expectedParams);
    });
  });
});
