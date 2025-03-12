// npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const github = require('github');
const exec = require('@actions/exec');

function run() {
  core.notice('Hello from the custom JavaScript Action!');
}

run();
