const fs = require("fs");
const path = require("path");
const error = require("./error");
const minify = require("./minify.js");
const { fileExistsSync, dirExistsSync } = require("./checkExists");

module.exports = (strSource, strOutput) => {

  const outputpath = strOutput.replace(path.basename(strOutput), '')
  const strDirPath = path.join(process.cwd(), outputpath);

  if (!dirExistsSync(strDirPath)) {
    fs.mkdirSync(strDirPath, { recursive: true });
  }

  if (!path.isAbsolute(strSource)) {
    strSource = path.resolve(process.cwd(), strSource);
  }

  if (!fileExistsSync(strSource)) {
    return error(strSource, "File source don't exists");
  }

  fs.readFile(strSource, "utf8", function (objErr, data) {
    
    if (objErr) return error(strSource, objErr);

    fs.writeFile(strOutput, minify(data), function (objErr) {
      if (objErr) return error(strSource, objErr);
      
    });
  });

  return true;
};
