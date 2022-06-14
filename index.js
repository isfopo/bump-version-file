const core = require("@actions/core");
const github = require("@actions/github");

try {
  const path = core.getInput("path");

  // get version number from file

  // bump patch version

  // write new version back to file

  // commit change

  // output new version

  core.setOutput("content", time);
} catch (error) {
  core.setFailed(error.message);
}
