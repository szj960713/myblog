// function varify() {
//     accout = document.getElementById("account").value;
//     password = document.getElementById("password").value;
//     console.log("fuck!")
//     // var flag = false;
//     // if (accout == "宋子建" && password == "960713") {
//     //     flag = true;
//     // }
//     // if (accout == "孙伟霞" && password == "990517") {
//     //     flag = true;
//     // }
//     // if (flag) {
//     //     location.href = "mainPage.html"
//     // } else {
//     //     alert("账号或密码错误！")
//     // }
// }

// function joke() {
//     if (document.getElementById("submit").innerHTML == "有内鬼！") {
//         var elem = document.getElementById("submit");
//         elem.parentElement.removeChild(elem);
//     } else {
//         document.getElementById("submit").innerHTML = "有内鬼！";
//     }
// }

function joke1() {
    var register = document.getElementById("register");
    if (register.innerHTML == "注册") {
        register.innerHTML = "劝你别注册";
    } else if (register.innerHTML == "劝你别注册") {
        register.innerHTML = "本站没注册功能";
    } else if (register.innerHTML == "本站没注册功能") {
        register.innerHTML = "真想注册";
    } else if (register.innerHTML == "真想注册") {
        register.innerHTML = "行吧再点一下";
    }else if(register.innerHTML == "行吧再点一下"){
        window.location.href="register.html";
    }
}

function varify(event) {

    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {

        }
    }
}

function smaller() {
}


function bigger() {

}