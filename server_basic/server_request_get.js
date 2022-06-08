// 1. GET 요청 처리
// 주소값을 이용해 요청을 하는 방식이다.
// 서버로 값을 전달하기 위해서 서버측 주소 끝에 ?(물음표)를 붙이고 key=value 형태로 요청한다.
// ex) www.naver.com/Post.nhn?postId=123123123?cafeId=987987

const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer(function(request, response) {
    console.log("--- log start ---");

    const parsedUrl = url.parse(request.url); // 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
    console.log(parsedUrl); // protocol, slashes, auth, host, port, hostname, hash, search, query, pathname, path, href 를 출력

    
    const parsedQuery = querystring.parse(parsedUrl.query, "&", "="); // 객체화된 url 중에 querystring 부분만 따로 객체화 후 출력
    // const parsedQuery = url.parse(request.url, true).query; // 객체화된 url 중에 querystring 부분만 따로 객체화 후 출력
    // const parsedQuery = new URLSearchParams(request.url); // 좀 더 알아봐야 함
    // const parsedQuery = url.parse(request.url, false).query; // 객체화된 url 중에 querystring 부분만 따로 문자열 출력
    console.log(parsedQuery);

    console.log("--- log end ---");

    response.writeHead(200, {"Content-Type" : "text/html"});
    // response.end("Heloo node.js!!");
    // response.end("var1: " + parsedQuery.var1 + " nvar2: " + parsedQuery.var2 + " nvar3: " + parsedQuery.var3);
    response.end(`var1 : ${parsedQuery.var1} var2: ${parsedQuery.var2} var3: ${parsedQuery.var3}`);
});

server.listen(8080, function() {
    console.log("Server is running...");
});