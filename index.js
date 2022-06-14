const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  const path = core.getInput("path");
  const token = core.getInput("token");

  // get versionNumber number from file
  let versionNumber = fs.readFileSync(path, "utf-8");

  // bump patch versionNumber
  const splitVersion = versionNumber.split(".");
  splitVersion[2] = parseInt(splitVersion[2]) + 1;

  versionNumber = splitVersion.join(".");

  // write new versionNumber back to file
  fs.writeFileSync(path, versionNumber);

  // commit change
  // if (token) {
  //   const octokit = github.getOctokit(token);

  //   await octokit.rest.git.createCommit({
  //     message: "automated versionNumber bump",
  //     owner:
  //   })
  // }

  // output new versionNumber

  core.setOutput("content", versionNumber);
} catch (error) {
  core.setFailed(error.message);
}
