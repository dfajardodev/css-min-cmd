const empty = require("./empty")
const argv = require("yargs")
  .usage("Usage: css-min-cmd <options> <option source> [source] <option output> [output]")

  .alias("v", "version")
  .describe("v", "show version info")
  .boolean("v")

  .alias("l", "log")
  .describe("l", "show the log, in process directory mode")
  .boolean("l")

  .alias("f", "file")
  .describe("f", "specify a css source file")
  .string("f")
  
  .alias("of", "out-file")
  .describe("of", "specify a minified css output directory")
  .string("of")

  .alias("d", "dir")
  .describe("d", "specify a css source directory")
  .string("d")

  .alias("od", "out-dir")
  .describe("od", "specify a minified css output folder directory")
  .string("od")

  .alias("sd", "single-directory")
  .describe("sd", "specifies that minify only the files in the source directory")
  .boolean("sd")

  .help("h")
  .alias("h", "help")
  .describe("h", "show help info").argv;

module.exports = {
  log: argv.l,
  file: argv.f,
  out_file: argv.of === undefined && argv.f !== undefined ? empty(argv.f, 'file') : argv.of,
  dir:  argv.d,
  out_dir: argv.od  === undefined && argv.d !== undefined ? empty(argv.d, 'dir') : argv.od,
  single_directory: argv.sd !== undefined,
  version: argv.v
};