/*
    url모듈은 클라이언트가 요청한 주소를 parsing해서 서버내의 실제 로컬자원만 따로 처리 할 수 있게 해준다.
    기존 URL 주소체계에서의 서버리소스는 디랙토리 + 파일의 형태였으나 RESTful이 표준화 된 지금은
    특정 도메인 서버가 가지는 유일한 리소스를 식별하는 서버식별자라고 표현하는게 더 적절하다.

    url 요청에서 도매인명 다음의 "/" 문자부터 쿼리스트링인 "?" 이전까지의 문자열인 path 값을 사용해서
    요청한 서버URI를 클라이언트측에 전달 하도록 하고, 정의 안된 요청이 들어오면 "404 Page Not Found" 메세지를 전달하도록 한다.

    ex) http://www.naver.com/my_page/firstpage?section=15

    [ http://www.naver.com ] -> "도메인"
    [ /mp_page/firstpage ] -> "서버URI"
    [ ?section=15 ] - > "쿼리 스트링"
*/

const http = require("http");
const url = require("url");

const server = http.createServer(function(request, response) {
    console.log(request.url); // 실제 요청한 주소전체를 콘솔에 출력

    let parsedUrl = url.parse(request.url); // parsing 된 url 중에 서버URI에 해당하는 pathname 만 따로 저장
    let resource = parsedUrl.pathname;
    
    console.log(`resource path = ${resource}`);

    // 리소스에 해당하는 문자열이 아래와 같으면 해당 메세지를 클라이언트에 전달
    if(resource == '/') {
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('메인 페이지 입니다.');
    } else if(resource == '/address'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('서울특별시 강남구 논현1동 111');
      }else if(resource == '/phone'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('02-3545-1237');
      }else if(resource == '/name'){
        response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        response.end('Hong Gil Dong');
      } else{
        response.writeHead(404, {'Content-Type':'text/html; charset=utf-8'});
        response.end('404 Page Not Found');
      }
});

server.listen(8080, function(){
    console.log('Server is running...');
});

/*
    http://localhost:8080/note 와 같이 요청한 자원이 소스코드에서 정의한 [ "/" "/address", "/phone", "/name" ]
    문자열에 해당 되지 않으면 "404 Page Not Found" 이다.

*/