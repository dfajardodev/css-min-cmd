const path = require("path");

module.exports = (strSource, type) => {
  switch (type) {
    case 'file':

      if (!strSource) return 'min.css';
  
      let strFullFileName = path.basename(strSource);
      let intIndex = strFullFileName.lastIndexOf('.');
      let strFileName = strFullFileName.substr(0, intIndex);
      let strExtension = strFullFileName.substr(intIndex + 1);
    
      return strSource.replace(strFullFileName, strFileName + '.min.' + strExtension)
  
    case 'dir':

      if (!strSource) return 'dist';

      let strRoot = path.dirname(strSource);
      return strSource.replace(strRoot, strRoot.replace(/\w+/, 'dist'))
  }
}