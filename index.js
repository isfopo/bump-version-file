const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  const path = core.getInput("path");

  // get version number from file
  const version = fs.readFileSync(path, "utf-8");

  // bump patch version
  const splitVersion = version.split(".");
  splitVersion[2] = parseInt(splitVersion[2]) + 1;

  version = splitVersion.join(".");

  // write new version back to file
  fs.writeFileSync(path, version);

  // commit change

  // output new version

  core.setOutput("content", version);
} catch (error) {
  core.setFailed(error.message);
}
