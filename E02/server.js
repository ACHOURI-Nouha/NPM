//* je recupere le module natif pour creer un server
const http = require("node:http");

//* on a créée un serveur et on décrit son comportement à l'intérieur
const server = http.createServer((request, response) => {
  //* quand je recois une réquete coté client, voila ce que je ferais

  //* je vais préparer la réponse : "Bonjour"
  response.write("bonjour");
  //* les consoles ne s'afficheront que dans le terminal
  console.log("la requete client");
  //* et je l'envoie coté client
  //* le end() permet de dire au navigateur que la réponse est terminé
  response.end();
});

//* on passe au server un ecouteur/listener qui s'appele listen()
//* on met le port en 3000, parce que c'est la convention et parce que c'est un port disponible sur notre machine
//* 8000 8080 5000 5050
//* on lance dans le client / navigateur l'url http://localhost:3000/
//* le numero de port XXXX doit correspondre au numero du http://localhost:XXXX
server.listen(3000, () => {
  console.log("Le server est bien lancé et écoute sur le port 3000");
});
