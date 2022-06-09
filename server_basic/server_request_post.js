/*
    http://localhost:8080/?var1=newData&var2=153&var3=testdata2017
    POST 요청 처리
    POST 형태의 요청은 GET과는 요청하는 측의 데이터 구조가 다르다.
    POST는 주소만 요청하고 변수와 값을 BODY에 담아서 서버측에 요청한다.
    HTTP 프로토콜은 브라우저에서 서버로 요청(REQUEST) 하거나 서버에서 브라우저로 응답(RESPONSE)할 때 서로 데이터를 주고 받게 되는데
    이 데이터의 구조는 요청에 대한 설정 정보가 담기는 HEADER와 실제 데이터가 담기는 BODY로 구성 된다.

    ===================================================================================================
    Request : 실제 자원요청에 대한 정보가 저장되는 부분
    POST /request/specific_datas.call HTTP/1.1

    Request Header : 자원요청에 대한 설정정보, 요청하는 데이터타입, 요청자의 브라우저정보 등이 담긴다.            
    Accept: image/gif, image/xxbitmap, image/jpeg, image/pjpeg,
    application/xshockwaveflash, application/vnd.msexcel,
    application/vnd.mspowerpoint, application/msword, 별/별
    Referer: http://wahh-app.com/books/default.asp
    Accept-Language: en-gb,en-us;q=0.5
    Accept-Encoding: gzip, deflate
    User-Agent: Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)

    Request Data : 실제 전달하고자 하는 데이터가 담긴다
    jfhdahiekljdklhfkha=e%3kljfhailjljfljalkjlkfjldjaf
    ===================================================================================================

    GET의 경우는 가장 윗줄의 주소부분 끝에 ?(물음표) 를 붙이고 필요한 변수와 값을 전달하지만
    POST는 가장 아래의 Request Data에 해당하는 BODY 부분에 데이터를 담아서 전달된다.
    따라서, node.js에서 POST요청에 대한 처리는 GET 처리와는 조금 다른 로직으로 전달 된다.
*/
const http = require("http");
const querystring = require("querystring");

const server = http.createServer(function(request, response) {
    let postdata = ""; // POST로 전달된 데이터를 담을 변수를 선언

    request.on("data", function(data) {
        postdata += data;
    });
    /*
        request객체에 on() 함수로 data 이벤트를 연결
        reqeust 객체에서 data 이벤트가 발생하면 data 변수를 callback 함수에 담아서 내부 로직을 실행한다.
        data 이벤트가 발생할 때 마다 callback을 통해 postdata 변수에 값을 저장
    */

    request.on("end", function() {
        const parsedQuery = querystring.parse(postdata);
        console.log(parsedQuery);

        response.writeHead(200, {"Content-Type":"text/html"});
        response.end(`var1 = ${parsedQuery.var1} var2 = ${parsedQuery.var2} var3 = ${parsedQuery.var3}`);
    });
    /*
        request객체에 on() 함수로 end 이벤트를 연결
        request 객체에서 end 이벤트가 발생하면 내부 로직을 실행한다. end 이벤트는 callback 시에 전달 되는 값이 없다.
        end 이벤트는 한번만 발생하며, 위에서 저장해둔 postdata를 querystring 으로 객체화 한다.
        성공 HEADER와 데이터를 담아서 클라이언트에 응답처리
    */

    /*
        data 이벤트는 전송하는 데이터의 크기가 길 경우 여러번에 나누어서 발생 하지만
        end 이벤트는 data 전송이 완료되었을 때 한번 만 발생 한다.
        이벤트를 등록하게 되면 마치 하나의 서버처럼 이벤트가 발생할 때 까지 해당 로직이 대기하게 된다.
        그리고 로직의 순서와는 상관없이 이벤트가 발생했을때만 동작 한다.
    */
});

server.listen(8080, function() {
    console.log("Sever is running...");
});