const expect = require("expect.js");
const path = require("path");
process.env.CONFIG_BASE_PATH = path.resolve(__dirname);

describe("when NODE_ENV is not set", function() {
  let config;
  before(() => {
    config = require("../index");
  });
  it("should use the development configuration file", function() {
    expect(config.environment).to.be("development");
  });
});

describe("when environment is set to specs", function() {
  let config;
  before(() => {
    delete require.cache[require.resolve("../index")];
    process.env.NODE_ENV = "specs";
    config = require("../index");
  });

  it("should use the specs configuration file", function() {
    expect(config.environment).to.be("specification");
  });
});
