const http = require("http");
const url = require("url");
const fs = require("fs");

let server = http.createServer(function(request, response) {
    let parsedUrl = url.parse(request.url)
    let resource = parsedUrl.pathname;

    // 요청 된 자원이 "/fileTest" 라면
    if(resource === "/fileTest") {
        fs.readFile("fileTest.html", "utf-8", function(error, data) {
            // "fileTest.html"을 읽으면서 오류가 발생한 경우 아래의 오류 내용을 클라이언트에 전달
            if(error) {
                response.writeHead(500, {"Content-Type":"text/html; charset=utf-8"});
                response.end(`500 internal Server Error : ${error}`);
            } else {
                // 아무런 오류가 없이 정상적으로 읽기가 완료 되면 파일의 내용을 클라이언트에 전달
                response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
                response.end(data);
            }
        });
    } else {
        response.writeHead(404, {"Content-Tpye":"text/html; charset=utf-8"});
        response.end("404 Page Not Found");
    }
});

server.listen(8080, function() {
    console.log("Server is running...");
});