// 底部固定定位
window.onscroll = function() {
    // 获取滚动条到底部的距离
    // 滚动条到底部的距离=滚动框的高度-滚动条距顶部的距离-滚动条本身的高度
    let scroolBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;
    // console.log(scroolBottom);
    if (scroolBottom < 5) {
        $(".bottom").css({
            position: "sticky",
            bottom: 0
        });
        $(".trademark").css({
            display: "block"
        });

    }
    if (scroolBottom > 250) {
        $(".bottom").css({
            position: "static",
        });
        $(".trademark").css({
            display: "none"
        });
    }
    // 侧边栏
    if (scroolBottom < 900) {
        $(".sidebar>a").eq(2).css({
            display: "block",
            borderTop: "1px solid #ececec"
        });
    }
    if (scroolBottom > 900) {
        $(".sidebar>a").eq(2).css({
            display: "none"
        });
    }

};