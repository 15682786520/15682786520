// 生成随机验证码
function getRegisterCode() {
    let codeStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let str = '';
    // 验证码有几位就循环几次
    for (var i = 0; i < 4; i++) {
        let ran = Math.floor(Math.random() * 62);
        str += codeStr.charAt(ran);
    }
    $(".register-code").html(str);
}
// 调用函数，页面刷新也会刷新验证码
getRegisterCode();
// 点击刷新验证码
$(".register-code").click(function() {
    getRegisterCode();
});

$(".register-btn").click(function() {
    console.log("注册");
    // 先判断验证码是否正确
    if ($("#zc-code").val() == $(".register-code").html()) {
        // console.log($("#zc-code").val());
        // console.log($(".register-code").html());
        // 判断手机号和密码是否为空
        if ($("#zc-phoneNum").val() != "" && $("#zc-password").val() != "") {
            // 在判断两次密码是否一样
            if ($("#zc-password").val() == $("#zc-passwordC").val()) {
                // 判断复选框是否勾选
                if ($(".reg-checkbox").prop('checked')) {
                    // 发送post请求
                    $.post("php/register.php", {
                        "phoneNum": $("#zc-phoneNum").val(),
                        "password": $("#zc-password").val()
                    }).then(function(resText) {
                        if (resText == 1) {
                            if (confirm("注册成功，是否跳转到登陆页面")) {
                                location.href = "/peak/login.html"
                            }
                        } else if (resText == 2) {
                            alert("该用户名已被注册");
                        }
                    });
                } else {
                    alert("请阅读并勾选匹克会员注册协议");

                }
            } else if ($("#zc-passwordC").val() == "") {
                alert("请确认密码");
            } else {
                alert("两次密码输入不一样");
            }
        } else {
            alert("请输入用户名和密码");
        }
    } else if ($("#zc-code").val() == "") {
        alert("验证码不能为空");

    } else {
        alert("验证码输入错误");
        getRegisterCode();
    }
})