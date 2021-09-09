const yargs = require("yargs");
const notes = require("./notes.js");
const chalk = require("chalk");
const argv = yargs.argv; //returns an object of arguments

var title = yargs.argv.title; //argument object with key as title
var body = yargs.argv.body; //argument object with key as body
var command = yargs.argv._[0];

if (command === "add") {
  notes.addingNote(title, body);
} else if (command === "remove") {
  notes.removeNote(title);
} else if (command === "read") {
  notes.readNote(title);
} else if (command === "list") {
  console.log(chalk.black.bgBlueBright("Your notes:"));
  notes.getAll();
} else {
  console.log("Unknown command was used!");
}
