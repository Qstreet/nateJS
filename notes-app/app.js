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
  handler: function() {
    console.log("Adding a new Note!");
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

console.log(yargs.argv);
