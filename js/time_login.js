/*
    获取当前的时间，用以显示在登录界面
*/

setInterval(getTime, 1000)

function getTime(){
    var date = new Date;
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if(hour < 10){
        hour = '0' + hour;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(second < 10){
        second = '0' + second;
    }
    document.getElementById("time_login").innerHTML=hour + " : " + minute + " : " + second;
}