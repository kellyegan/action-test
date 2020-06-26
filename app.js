const fs = require('fs');

console.log("Hello github actions!");

getDate = () => {
  return new Intl.DateTimeFormat('en-US').format(Date.now());
}

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>This site was last updated ${getDate()}</h1>
  </body>
</html>
`;

fs.writeFile("public/index.html", html, (error) => {
  if(error) {
    return console.log(error);
  }
});
