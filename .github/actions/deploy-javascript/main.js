// npm install @actions/core @actions/github @actions/exec

// const github = require('./node_modules/@actions/github');
const core = require('./node_modules/@actions/core');
const exec = require('./node_modules/@actions/exec');

function run() {

  core.notice('Hello from the custom JavaScript Action!');

  // Get input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  
  // Upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  // Output
  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.setOutput('website-url', websiteUrl);
}

run();
