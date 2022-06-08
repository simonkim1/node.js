const http = require("http");

const server = http.createServer(function(request, response) {
    // 아래의 200은 웹서버에 들어오는 어떤 요청에 대해 정상적으로 값을 리턴 할 때 사용 하는 http 상태코드이다.
    // 오류가 없이 서버에서 처리가 정상적으로 완료 되면 200 코드를 담아서 응답헤더를 설정해 주게 된다.
    // 여기서 응답헤더를 브라우저를 예로 들어 설명하면 서버로 부터 반환되는 값의 대한 기본 정보를 담고 있는 것으로 브라우저화면에는 나타나지 않는 값이다.
    // 브라우저는 header 값을 보고 서버에서 넘어온 값이 어떤 형태인지를 파악하고 실제 값을 header에 세팅 된 설정에 맞게 보여주게 된다.
    // http 상태코드는 크게 (100, 200, 300, 400, 500)이 있다.

    // {"Content-Type" : "text/html"} 값은 서버측에서 보내주는 컴텐츠의 타입이 텍스트이고, html 형태라는 것을 정의한다.
    // 브라우저에서는 이 헤더를 기준으로 아래 코드에서 보여주는 값을 html 형태로 화면에 출력한다.
    // 이렇게 {} 블럭형태로 값이 전달되는 경우는 해당 블럭에 여러개의 값이 담길 수 있다는 의미이다.
    response.writeHead(200, {"Content-Type" : "text/html"});

    // 아래의 코드는 end() 라는 함수에 "Hello node.js!!"라는 실제 컨텐츠를 담아서 브라우저 측에 전달한다.
    // 이렇게 실제 코드 값을 end() 함수로 전달 하면 브라우저는 해당 컨텐츠를 받은 후 html 형태로 화면에 출력한다.
    response.end("Hello node.js!!");
});

server.listen(8080, function() {
    console.log("Server is running...");
});