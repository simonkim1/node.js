const EventEmitter = require("events");
const sec = 1; // setInterval 함수가 동작하는 interval 값을 설명한다. -> 1초에 한번씩 호출

exports.timer = new EventEmitter(); // timer 변수를 EventEmitter 로 초기화

setInterval(() => {
    exports.timer.emit("tick");
}, sec * 1000);