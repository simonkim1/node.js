const fs = require("fs");

const data = `My first data...\r\nHello there!`; // 새로 생성할 파일에 입력 될 문자열

// 비동기 방식으로 파일을 생성, 함수의 인자는 앞에서 부터 순서대로 (파일명, 입력데이터, 인코딩, 콜백함수)
fs.writeFile("./async_file_write_test.txt", data, "utf-8", function(e) {
    if(e) {
        console.log(e); // 파일 생성 중 오류가 발생하면 오류 출력
    } else {
        console.log("01 WRITE DONE!"); // 파일 생성 중 오류가 없으면 완료 문자열 출력
    }
});


// 동기방식은 callback 함수를 통한 오류 처리를 할 수 없기 때문에 함수 전체를 try 문으로 예외처리 해야 한다.
try {
    // 동기 방식으로 파일을 생성, 함수의 인자는 앞에서 부터 순서대로 (파일명, 입력데이터, 인코딩)
    fs.writeFileSync("./sync_file_write_test.txt", data, "utf-8");
    console.log("02 WRITE DONE!");
} catch (error) {
    console.log(error);
}

/*
    file read 와 마찬가지로 "02 WRITE DONE!" 로그가 먼저 출력된다.
    소스코드를 실행하면 해당 디렉토리에 2개의 파일이 생성 되어있다.
    열어보면 위 소스코드에서 입력한 "My first data...\r\nHello there!"라는 문자열이 입력되어 있다.
*/