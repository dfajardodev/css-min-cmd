const error = require("./error");

function checkParameters(dir, out_dir) {
  
  let arrSource = getParameter([], dir), arrOutput = getParameter([], out_dir), blNumberParameters = true;

  if(arrSource.length != arrOutput.length)
    blNumberParameters = error(process.cwd(), `wrong number of parameters.`);

  return [arrSource, arrOutput, blNumberParameters];
}

function getParameter(arr, obj) {
  switch (typeof obj) {
    case 'string':
      arr.push(obj);
      break;
    case 'object':
      arr = [...obj];
      break;
  }
  return arr;
}

module.exports = checkParameters;