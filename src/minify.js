module.exports = (str) => {
  str = str.replace(/\/\*(.|\n|\r?\n)*?\*\//g, "");
  str = str.replace(/\s*(\{|\}|\>|\]|\(|\:|\;|\,)\s*/g, "$1");
  str = str.replace(/#([\da-fA-F])\1([\da-fA-F])\2([\da-fA-F])\3/g, "#$1$2$3");
  str = str.replace(/:[\+\-]?0(rem|em|ec|ex|px|pc|pt|vh|vw|vmin|vmax|%|mm|cm|in)/g, ":0");
  str = str.replace(/\r?\n|\r/g, "");
  str = str.replace(/;\}/g, "}");
  str = str.replace(/^\s+|\s+$/g, "");
  return str;
};