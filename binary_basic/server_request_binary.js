/*
    이미지 타입을 알아내기 위해서는 npm 으로 mime 모듈을 설치해야 한다.
    "npm install mine"

    이미지 파일이라고 하더라도 파일의 확장자에 따라 mime type 이 서로 다르다.
    ※ 음원파일이나 동영상 파일도 확장자에 따라 mime type이 다르다.
*/

const http = require("http");
const url = require("url");
const fs = require("fs");
const mime = require("mime"); // mime 모듈 추가

const server = http.createServer(function(request, response){
    let parsedUrl = url. parse(request.url);
    let resource = parsedUrl.pathname;

    // 요청한 자원의 주소가 "/images/" 문자열로 시작하는 경우
    if(resource.indexOf("/images/") == 0) {
        let imgPath = resource.substring(1); // 첫글자인 "/" 를 제외하고 imgPath 변수에 저장
        console.log(`imgPath = ${imgPath}`);

        let imgMime = mime.getType(imgPath); // 서비스 하려는 파일의 mime type
        console.log(`mime = ${imgMime}`);

        // 해당 파일을 읽어 오는데 두번째 인자인 인코딩(utf-8) 값 얻음
        fs.readFile(imgPath, function(error, data) {
            if(error){
                response.writeHead(500, {"Content-Type":"text/html"});
                response.end(`500 Internal Server ${error}`);
            } else {
                response.writeHead(200, {"Contetnt-Type":imgMime}); // Contetn-Type에 위에서 추출한 mime type를 입력
                response.end(data);
            }
        })
    } else {
        response.writeHead(404, {"Content-Type":"text/html"});
        response.end(data);
    }
});

/*
    위에서 fs.readFile()을 사용할 때 일반 텍스트 파일을 읽을 떄와는 입력되는 파라미터의 개수가 다르다.
    텍스트 파일은 두번째에 파일읠 encoding 값(utf-8)이 들어가지만, binary 파일은 인코딩값이 없다.

    1. fs.readFile("fileTest.html", "utf-8", function(error, data) -> 일반 텍스트 파일
    2. fs.readFile(imgPath, function(error, data) -> binary 파일
*/

server.listen(8080, function(){
    console.log("Server is running...");
});
