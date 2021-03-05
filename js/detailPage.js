// 取出url中携带的参数
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}
// 
if (getQueryVariable("id") != "") {
    console.log(getQueryVariable("id"));
    $.post("php/detailPage.php", {
        "goods_id": getQueryVariable("id")
    }).then(function(resText) {
        resText = JSON.parse(resText);
        console.log(resText);
        // console.log(resText.goods_name);
        // console.log(typeof(resText));
        $(".product-name").html(resText.goods_name);
        $(".product-price>span").eq(1).html(resText.goods_price);
        $(".product-price>span").eq(2).html(resText.goods_price);
        $(".small-box").css({
            "background-image": resText.goods_url
        });
        $(".big-box").css({
            "background-image": resText.goods_url
        });
        $(".listBox li").eq(0).css({
            "background-image": resText.url_1

        });
        $(".listBox li").eq(1).css({
            "background-image": resText.url_2

        });
        $(".listBox li").eq(2).css({
            "background-image": resText.url_3

        });
        $(".listBox li").eq(3).css({
            "background-image": resText.url_4

        });
        $(".listBox li").eq(4).css({
            "background-image": resText.url_5

        })
    });
}

// 放大镜
$(function() {
    $(".small-box").mouseover(function() {
        $(".mask").css({
            display: "block"
        });
        $(".big-box").css({
            display: "block"
        });
    });
    $(".small-box").mouseout(function() {
        $(".mask").css({
            display: "none"
        });
        $(".big-box").css({
            display: "none"
        });
    });
    $(".small-box").mousemove(function(e) {
        let left_m = e.pageX - $(this).offset().left - $(".mask").width() / 2;
        let top_m = e.pageY - $(this).offset().top - $(".mask").height() / 2;
        if (left_m < 0) {
            left_m = 0;
        }
        if (left_m > $(".small-box").width() - $(".mask").width()) {
            left_m = $(".small-box").width() - $(".mask").width();
        }
        if (top_m < 0) {
            top_m = 0;
        }
        if (top_m > $(".small-box").height() - $(".mask").height()) {
            top_m = $(".small-box").height() - $(".mask").height();
        }
        $(".mask").css({
            left: left_m,
            top: top_m
        });
        let x = $(".big-box").width() * left_m / $(".mask").width();
        let y = $(".big-box").width() * top_m / $(".mask").height();

        $(".big-box").css({
            backgroundPositionX: -x,
            backgroundPositionY: -y
        })
    });

    $(".listBox li").click(function() {
        $(".small-box").css({
            "background-image": $(this).css("backgroundImage")
        });
        $(".big-box").css({
            "background-image": $(this).css("backgroundImage")
        });
        console.log($(this).css("backgroundImage"));

    })
});