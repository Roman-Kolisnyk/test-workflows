const core = require('@actions/core');
const github = require('@actions/github');

try {
  const userName = core.getInput('user-name');
  console.log(`Hello ${userName}! How are you?`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
