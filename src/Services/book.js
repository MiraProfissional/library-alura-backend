const fs = require("fs");

function getAllBooks () {
  return JSON.parse(fs.readFileSync("books.json"));
}

module.exports = {
  getAllBooks
}
