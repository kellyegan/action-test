const fs = require('fs');

console.log("Hello github actions!");

getDate = () => {
  return new Intl.DateTimeFormat('en-US').format(Date.now()))
}

fs.writeFile("public/index.html", `<h1>The date is ${getDate()}</h1>`, (error) => {
  if(error) {
    return console.log(error);
  }
});
