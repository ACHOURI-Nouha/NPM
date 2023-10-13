const http = require("http");
const server = http.createServer((request, response) => {
    response.setHeader("Content-type", "text/html;charset=utf8");
    const url = request.url.substring(1);
    if(url === "bonjour"){
        response.write("<h1>bonjour</h1>");
    }
    else if(url === "hello"){
        response.write("<h1>hello</h1>");
    }
    else{
        response.write("je ne connais pas cette langue");
    }
    response.end();
});

const port = 3001;
server.listen(port, () => {
    console.log("listen 3001");
});
