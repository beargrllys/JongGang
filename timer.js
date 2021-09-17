
var time = 600; //기준시간 작성
var min = ""; //분
var sec = ""; //초



var dayToMs = 24 * 60 * 60 * 1000;
var hourToMs = 60 * 60 * 1000;
var minToMs = 60 * 1000;
var secToMs = 1000;

var customx;

//setInterval(함수, 시간) : 주기적인 실행
var x = setInterval(function () {
    var nowtime = new Date();
    var endtime = new Date("2021-12-21 00:00:00");
    var spanTime = endtime - nowtime;

    var days = spanTime / dayToMs;
    spanTime = spanTime % dayToMs;
    var hour = spanTime / hourToMs;
    spanTime = spanTime % hourToMs;
    var minute = spanTime / minToMs;
    spanTime = spanTime % minToMs;
    var second = spanTime / secToMs;

    document.getElementById("demo").innerHTML = parseInt(days) + "일" + parseInt(hour) + "시간" + parseInt(minute) + "분" + parseInt(second) + "초 남았습니다.";


}, 1000);

function submint() {
    //id값으로 제어하는 방법
    clearInterval(customx);
    var iptData = document.getElementById("DateIpt").value;

    document.getElementById("userIpt").innerHTML = "사용자 입력(" + iptData + ") 기준"

    customx = setInterval(function () {
        var nowtime = new Date(iptData);
        var endtime = new Date("2021-12-21 00:00:00");
        var spanTime = endtime - nowtime;

        var days = spanTime / dayToMs;


        document.getElementById("demo2").innerHTML = parseInt(days) + "일 남았습니다.";


    }, 1000);
}