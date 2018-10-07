var fs = require("fs");

var data = {
    name: "Bob"
}

fs.writeFile("data.json", JSON.stringify(data), function(err, data) {
    console.log("write finished", err);
});