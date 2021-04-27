module.exports = (strOutput, err) => {
  console.error(`Error on ${strOutput}`, `\n`, err);
  return false;
}