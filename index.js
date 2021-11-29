const questions = require("./questions");

const fs = require("fs");

fs.writeFileSync("questions.json", JSON.stringify(questions));
