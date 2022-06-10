/*
    1. require("...")은 js파일을 모듈화 하기 위해 사용 되는 내장객체이다.
    2. node.js에서 모듈은 파일구조이다.
    3. 항수형 언어에서 함수는 객체지향의 객체와 같이 각각의 함수가 객체처럼 포인터를 가진다.
*/
var module = require("./custom_module"); // let const 로는 안되는 이유는?...

/* module.sum() 에서 리턴 된 숫자값을 출력 */
console.log("sum =", module.sum(100));

/* module.var1의 문자값을 출력 */
console.log("var1 =", module.val1);