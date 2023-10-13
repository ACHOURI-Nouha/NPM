const pretty = require("pretty");

const clc = require("cli-color");

console.log(clc.green("Vert."));
console.log(clc.red.bold("Rouge gras"));
console.log(clc.bgCyan.white("g cyan et blanc."));
const show = pretty(`<!DOCTYPE html> <html lang="en"> <head> 
<meta charset="UTF-8"> <title>Home</title> 
</head> <body> This is content. </body> </html>`);

console.log("Le resultat du pretty");
console.log(show);



//* cli-color
//* allez chercher ce package dans le npm sur google
//* ouvir un nouveau projet dans vscode
//* initialiser le projet npm : npm init

//* installer ce package npm cli-color : install cli-color
//* créer un fichier js dans le lequel require cli-color
//* utiliser cli-color comme montrer dans la doc
