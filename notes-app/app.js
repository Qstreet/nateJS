// Chap 18 Storing data w JSON

// const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    },
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    console.log('Title: ' + argv.title);
    console.log("Body: " + argv.body);
  }
});

// Create remove Command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function() {
    console.log("Removing the note");
  }
});

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function() {
    console.log("Listing your Notes!");
  }
});

// Create remove Command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function() {
    console.log("Reading the note");
  }
});

// add, remove, read, list
yargs.parse();
// console.log(yargs.argv);
