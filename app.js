const fs = require('fs');

console.log("Hello github actions!");

fs.writeFile("public/index.html", `<h1>${Date.now()}</h1>`, (error) => {
  if(error) {
    return console.log(error);
  }
});
