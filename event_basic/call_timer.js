var module = require("./custom_module_timer");

// module 내부에 선언된 timer 객체를 통해 tick 이벤트를 캐치하고, 이벤트 발생시마다 현재시간을 출력 한다.
module.timer.on("tick", (time) => {
    var time = new Date();
    console.log(`new ${time}`);
});