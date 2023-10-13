const http = require("http");

const bonjours = ["Barev", "Ave", "Dobré ràno", "hei"];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const server = http.createServer((request, response) => {
    console.log(request); 
    response.setHeader("Content-type", "text/html;charset=utf-8");
     //* afficher le bonjour sous le format HTML, on veut un H1 et non en text/plain
  //   response.write(bonjours[random(0, bonjours.length)]);
  //* envoyer un titre html statique
  //   response.write("<h1>Hello</h1>");
    console.log(request.url);
    if(request.url === "/bonjour"){
        response.write(`<h1>Bonjour</h1>`)
    }
    else {
        response.write(`<h1>${bonjours[random(0, bonjours.length)]}</h1>`);
    }
    response.end();
});



server.listen(3001, () => {
    console.log("listen 3001");
});
