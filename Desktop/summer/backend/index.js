const http = require("http");

let  Tasks = (
    {  id:1, name: "Install Node js", priority: "High", completed: false }
);


const server = http.createServer((req, res) =>{


    res.setHeader("Content-Type","text/html");

    if (req.method == 'GET' && req.url == "/") {
        res.statusCode = 200;
        res.end("Server is running");
    }

    if(req.method == 'GET' && req.url==  '/task'){
        res.statusCode=200;
        res.end(JSON.stringify(Tasks))

    } else if(req.method ==  'POST'  && req.url == '/task' ){
        
    }
});

server.listen(3000,'127.0.0.1', () => {
    console.log("Server is running on port 3000");
});