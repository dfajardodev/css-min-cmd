const fs = require("fs");

function fileExistsSync(path) {
  try {
    const stat = fs.statSync(path);
    return stat.isFile();
  } catch (e) {
    return false;
  }
}

function dirExistsSync(path) {
  try {
    const stat = fs.statSync(path);
    return stat.isDirectory();
  } catch (e) {
    return false;
  }
}

module.exports = { fileExistsSync, dirExistsSync }