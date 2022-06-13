/*
    node.js 는 파일을 읽고 쓰기 위해서 동기와 비동기 두가지 형태의 함수를 제공한다.
    node.js 는 이벤트방식의 비동기를 지향 하기 때문에 비동기 방식의 파일 일고 쓰기가 기본값(default)이다.
*/

const fs = require("fs"); // fs(파일시스템) 모듈 사용

// 비동기방식의 파일읽기, 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
fs.readFile("./file_read_test.txt", "utf-8", function(error, data) {
    console.log(`01 readAsync: ${data}`);
});


// 동기방식의 파일읽기, 파일을 읽은 후 data 변수에 저장
const data = fs.readFileSync("./file_read_test.txt", "utf-8");
console.log(`02 readSyne: ${data}`);

/*
    소스코드에서 첫번째 함수는 비동기방식으로 파일을 읽는 함수가 다른 thread에 의해서
    실행되기 때문에 로그의 순서가 두번째 함수인 "02 readSync"가 먼저 출력 된다.
*/