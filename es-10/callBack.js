const fs = require("node:fs")

fs.writeFile("message.txt", "Hello!!!", { encoding: "utf-8" }, function(error) {
    if (error) throw error;
    console.log(error)
})