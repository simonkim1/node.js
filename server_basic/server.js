const http = require("http");

const server = http.createServer(function(request, response) {
    // 아래의 200은 웹서버에 들어오는 어떤 요청에 대해 정상적으로 값을 리턴 할 때 사용 하는 http 상태코드이다.
    // 
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.end("Hello node.js!!");
});

server.listen(8080, function() {
    console.log("Server is running...");
});