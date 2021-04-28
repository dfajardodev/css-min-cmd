#!/usr/bin/env node
const path = require("path");
const processFile = require("./src/processFile");
const processDirectory = require("./src/processDirectory");
const checkParameters = require("./src/checkParameters");
const { file, out_file, dir, out_dir, log, single_directory } = require("./src/yargs-conf");
const strv = require("./package.json").version;
const showlogo = require("./src/logo");

if (file && out_file) {
  
  if(processFile(path.join(process.cwd(), file), out_file))
    console.log(`File processed successfull '${file}' to '${out_file}' done!`);

} else if (dir && out_dir) {

  const [arrSource, arrOutput, blParametersOk] = checkParameters(dir, out_dir);
  if(!blParametersOk) return;
  if(log) showlogo(strv);

  for (let i = 0; i < arrSource.length; i++) {
    if(processDirectory(arrSource[i], arrOutput[i], log, single_directory))
      console.log((log ? '\n': '') + `Folder processed successfull '${arrSource[i]}' to '${arrOutput[i]}' done!` + (log ? '\n': ''));
  }
}