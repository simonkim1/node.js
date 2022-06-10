/*
    exports 객체를 사용해서 sum이라는 변수를 만들고
    sum 변수에 function 을 사용해서 하나의 파라미터를 가진 함수식을 대입
*/
exports.sum = function(max) {
    /* 입력된 값을 최대값으로 부터 1부터 최대값까지 더해서 반환하는 로직 */
    return (max + 1) * max / 2;
}

/* var1 변수에 "NEW VALUE 100" 입력 */
exports.val1 = "NEW VALUE 100";

/*
    node.js 에서 모듈형태로 사용하기 위해서는 내장객체인 exports를 사용 하면 된다.
    exports 객체로 먼저 사용할 변수명을 선언하고 해당 변수명에 함수, 값 또는 객체를 대입해서 사용할 수 있습니다.
*/