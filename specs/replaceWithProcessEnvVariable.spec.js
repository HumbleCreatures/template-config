const expect = require("expect.js");
const path = require("path");
process.env.CONFIG_BASE_PATH = path.resolve(__dirname);
process.env.ENV_PROP = "this is an environment property";
const config = require("../index");

describe("when ENV_PROP is not set and a variable with that name is used", () => {
  it("the property should have that value", () => {
    expect(config.envProp).to.be(process.env.ENV_PROP);
  });
});
