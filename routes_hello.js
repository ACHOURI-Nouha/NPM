//* On reprend l'idée de bonjours en tant qu'objet
 const http = require("http");

const bonjours = {
    ar: "Barev",
    la: "Ave",
    es: "hola",
    sk: "Dorbé ràno"
}

//* object quand on va coté navigateur taper http://localhost:3000/es, http://localhost:3000/la je veux que mon serveur envoie la réponse suivant la propriété de 
//* mon tableau bonjours

//* si la route correspond à une propriété de bonjours, alors reponse write sa valeur
//* sinon ernvoie "je ne connais pas cette langue"

const server = http.createServer((request, response) => {
    response.setHeader("Content-type", "text/html;charset=utf8");
    const langue = request.url.substring(1); 

    if (bonjours[langue]) {
        response.write(`<h1>${bonjours[langue]}</h1>`);
    } else {
        response.write("je ne connais pas cette langue");
    }

    response.end();
});

const port = 3001;
server.listen(port, () => {
    console.log("listen 3001");
});