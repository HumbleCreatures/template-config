"use strict";
const fs = require("fs");
const path = require("path");
const environmentName = process.env.NODE_ENV || "development";

const basePath = process.env.CONFIG_BASE_PATH || process.cwd();
let configPath = path.join(basePath, "config", environmentName + ".js");

let result = {};
if (fs.existsSync(configPath)) {
  const configContent = fs.readFileSync(configPath).toString();
  const templatedString = eval('`'+configContent+'`');
  eval("result="+templatedString);
} else {
  throw `Configuration file ${configPath} could not be found.`;
}

module.exports = result;
