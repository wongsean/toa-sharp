import { Shape } from "../src";

test("constructor and property", () => {
  const s = Shape.make((s) => s.String);

  expect(s.decoder).toHaveProperty("decode");
});