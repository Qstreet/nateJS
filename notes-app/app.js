const validator = require("validator");
const getNotes = require("./notes.js");

getNotes();

console.log(validator.isURL("nateblehcom"));
