GoToLogIn = function() {
        $(".LogIn-main").slideToggle(400);
    }
    //document.cookie = "name=laowang";
    //通过key获取value
function getCookie(key) {
    let strCookie = document.cookie;
    let arrCookie = strCookie.split("; ");

    for (let i = 0; i < arrCookie.length; i++) {
        let item = arrCookie[i].split("=");
        if (item[0] == key) {
            return item[1];
        }
    }
    return '';
}
// console.log(getCookie("pwd"));
//设置cookie
function setCookie(key, value, day) {
    if (day > 0) {
        let date = new Date();
        date.setDate(date.getDate() + day);
        document.cookie = key + "=" + value + ";expires=" + date;
    } else if (day == -1) {
        document.cookie = key + "=" + value + ";expirse=-1";
    } else {
        document.cookie = key + "=" + value;
    }
}
//setCookie("pwd","666",0); setCookie("pwd","666",10); 删除cookie
function deleteCookie(key) {
    setCookie(key, '', -1);
}
//deleteCookie("name");
//生成随机验证码
function getCode() {
    let codeStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let str = '';
    // 验证码有几位就循环几次
    for (var i = 0; i < 4; i++) {
        let ran = Math.floor(Math.random() * 62);
        str += codeStr.charAt(ran);
    }
    $(".code").html(str);
}
// 调用函数，页面刷新也会刷新验证码
getCode();
// 点击刷新验证码
$(".code").click(function() {
    getCode();
});


// 头部登陆
$(".logIn-btn").click(function() {
    // console.log("登陆1");
    // console.log($(".LogIn-main #pk-code").val());
    // console.log($(".LogIn-main .code").html());

    // 判断验证码是否正确
    if ($(".LogIn-main #pk-code").val() == $(".LogIn-main .code").html()) {
        if ($(".LogIn-main #pk-phoneNum").val() != "" && $(".LogIn-main #pk-password").val() != "") {
            // 发送post请求
            $.post("php/logIn.php", {
                "phoneNum": $(".LogIn-main #pk-phoneNum").val(),
                "password": $(".LogIn-main #pk-password").val()
            }).then(function(resText, status) {
                if (resText == 1) {
                    // 将用户名存入cookie
                    setCookie("phoneNum", $(".LogIn-main #pk-phoneNum").val());
                    location.href = "/peak/index.html"
                        // 登陆成功后添加cookie
                } else if (resText == 2) {
                    alert("密码错误");
                } else if (resText == 0) {
                    if (confirm("用户名不存在是否进行注册")) {
                        location.href = "/peak/register.html";
                    }
                }
            }, function() {
                console.log("尿了");
            });
        } else {
            alert("请输入用户名和密码");
        }
    } else if ($(".LogIn-main #pk-code").val() == "") {
        alert("验证码不能为空");

    } else {
        alert("验证码输入错误");
        getCode();
    }


});

// 登陆页登陆
$(".login-btn").click(function() {
        // console.log("登陆2");
        // console.log($(".login-main #pk-code").val());
        // console.log($(".login-main .code").html());
        if ($(".login-main #pk-code").val() == $(".login-main .code").html()) {
            if ($(".login-main #pk-phoneNum").val() != "" && $(".login-main #pk-password").val() != "") {
                // 发送post请求
                $.post("php/logIn.php", {
                    "phoneNum": $(".login-main #pk-phoneNum").val(),
                    "password": $(".login-main #pk-password").val()
                }).then(function(resText, status) {
                    if (resText == 1) {
                        setCookie("phoneNum", $(".login-main #pk-phoneNum").val());
                        location.href = "/peak/index.html"
                    } else if (resText == 2) {
                        alert("密码错误");
                    } else if (resText == 0) {
                        if (confirm("用户名不存在是否进行注册")) {

                            location.href = "/peak/register.html"
                        }
                    }
                }, function() {
                    console.log("尿了");
                });
            } else {
                alert("请输入用户名和密码");
            }
        } else if ($(".login-main #pk-code").val() == "") {
            alert("验证码不能为空");

        } else {
            alert("验证码输入错误");
            getCode();
        }

    })
    // 获取cookie
if (getCookie("phoneNum") != "") {
    // console.log(getCookie("phoneNum"));
    // console.log($(".user-info").html());
    $(".user-info").html(getCookie("phoneNum"));
    $(".user-out").html("退出");
}
$(".user-out").click(function() {
    setCookie("phoneNum", "");
    location.href = "/peak/index.html"
});
$(".cart").click(function() {
    if (getCookie("phoneNum") == "") {
        alert("请先登录！")
    } else {
        window.open('cart.html', '_block');
    }
})