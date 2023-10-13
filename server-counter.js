//* recuperer le module http
//* on créée le serveur avec la méthode createServer()
//* vous mettez la callback avec les params request, response

//? Objectif: créer un compteur qui augmente à chaque visite sur le site

//* créer une variable counter
//* afficher "compteur de visite + counter" dans le navigateur
//* enfin incrémenter le counter++

//* dans notre callback faire la méthode write() sur la response, envoyer "compteur de visite" coté frontend
//* il faut dire au server que la response est terminé

//* ajouter l'écouter listen() avec le port correspondant

//* lancer le serveur avec node

//* ouvrir le navigateur et tapé http://localhost:3000/

const http = require("http");
let counter = 0;
const server = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    console.log("je veux bloquer requete du favicon");
    response.writeHead(200, { "Content-type": "image/x-icon" });
    response.end();
    return;
  }
  response.write(`compteur de visite ${counter}`);
  counter++;
  response.end();
});
server.listen(3000, () => {
  console.log("port 3000");
});

//* Windows:  taskkill /f /im node.exe
//* MACOS / linux: `killall node` => termine tous les processus Node
