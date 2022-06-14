const core = require("@actions/core");
const fs = require("fs");

try {
  const path = core.getInput("path");
  let versionNumber = fs.readFileSync(path, "utf-8");

  const splitVersion = versionNumber.split(".");
  splitVersion[2] = parseInt(splitVersion[2]) + 1;

  versionNumber = splitVersion.join(".");

  fs.writeFileSync(path, versionNumber);

  core.setOutput("content", versionNumber);
} catch (error) {
  core.setFailed(error.message);
}
