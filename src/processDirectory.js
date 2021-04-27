const fs = require("fs");
const path = require("path");
const processFile = require("./processFile");
const { dirExistsSync } = require("./checkExists");
const error = require("./error");
const cssRegExp = /\.css$/

function processDirectory(strDirPath, strOutput, log, blSingleDirectory) {

  if (!dirExistsSync(strDirPath)) {
    return error(strDirPath, "Path source don't exists");
  }

  try {
      
    let arrFileNames = fs.readdirSync(path.join(process.cwd(), strDirPath));
    let s_out = strOutput.endsWith('/') ? '' : '/';
    let s_dir = strDirPath.endsWith('/') ? '' : '/';

    arrFileNames.forEach(function (strFileName) {

      let strSource = path.join(process.cwd(), strDirPath, strFileName);

      if (cssRegExp.test(strFileName)) {

        if(log) console.log(strDirPath + s_dir + strFileName, ' -> ', strOutput + s_out + strFileName);
        processFile(strSource, strOutput + s_out + strFileName);

      } else if (fs.lstatSync(strSource).isDirectory() && blSingleDirectory === false) {

        processDirectory(strDirPath + s_dir + strFileName, strOutput + s_out + strFileName, log, blSingleDirectory);
      }
    });

  } catch (err) {
    return error(path.join(process.cwd(), strDirPath), err);
  }

  return true;
}

module.exports = processDirectory;