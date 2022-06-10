const EventEmitter = require("events");

exports.timer = new EventEmitter(); // timer 변수를 EventEmitter 로 초기화

setInterval(() => {
    exports.timer.emit("tick");
}, 1000);