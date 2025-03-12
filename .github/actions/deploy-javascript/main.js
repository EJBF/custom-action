// npm install @actions/core @actions/github @actions/exec

const core = require('./node_modules/@actions/core');
const github = require('./node_modules/github');
const exec = require('./node_modules/@actions/exec');

function run() {
  core.notice('Hello from the custom JavaScript Action!');
}

run();
