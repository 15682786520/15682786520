// 轮播图
let time = null;
class banner {
    constructor(newBox, newLis) {
            this.index = 0;
            this.newBox = newBox;
            this.newLis = newLis;
            //初始时显示的内容
            this.newBox.style.backgroundImage = "url(img/banner/" + this.index + ".png)"
            this.newBox.style.backgroundSize = "100% 100%"
            this.newLis[this.index].style.backgroundColor = "red";
            this.eventBind();
        }
        // 工具函数，设置背景
    setBcg() {
            this.newBox.style.backgroundImage = "url(img/banner/" + this.index + ".png)"
        }
        //工具函数，设置li颜色
    setColor() {
            for (let i = 0; i < this.newLis.length; i++) {
                if (this.index == i) {
                    this.newLis[i].style.backgroundColor = "#e60012";
                } else {
                    this.newLis[i].style.backgroundColor = "#999999";
                }
            }
        }
        //工具函数，点击按钮到前一个背景
    previous() {
            let oPrev = document.querySelector(".icon-icon_arrow_left");
            let that = this;
            oPrev.onclick = function() {
                that.index--;
                if (that.index == -1) {
                    that.index = that.newLis.length - 1;
                }
                that.setBcg();
                that.setColor();
            }
        }
        //工具函数，点击按钮到下一个背景
    next() {
            let oNext = document.querySelector(".icon-jiantouyou");
            let that = this;
            oNext.onclick = function() {
                that.index++;
                if (that.index == that.newLis.length) {
                    that.index = 0;
                }
                that.setBcg();
                that.setColor();
            }
        }
        //工具函数，点击li让其下标赋给index
    clickLi() {
        let that = this;
        for (let i = 0; i < this.newLis.length; i++) {
            this.newLis[i].onclick = function() {
                that.index = i;
                that.setBcg();
                that.setColor();
            }
            that.newLis[i].onmouseover = function() {
                that.newLis[i].style.cursor = "pointer";
            }
        }
    }

    //工具函数，定时器，没2秒改变index
    timer() {
        clearInterval(time);
        time = setInterval(() => {
            this.index++;
            if (this.index == this.newLis.length) {
                this.index = 0;
            }
            this.setBcg();
            this.setColor();
        }, 2000);
    }
    mouseover() {
        let that = this;
        that.newBox.onmouseover = function() {
            clearInterval(time);
        }
    }
    mouseout() {
        let that = this;
        that.newBox.onmouseout = function() {
            that.timer();
        }
    }
    eventBind() {
        this.previous();
        this.next();
        this.clickLi();
        this.timer();
        this.mouseout();
        this.mouseover();
    }
}
let oBox = document.querySelector(".banner");
let oLis = document.querySelectorAll(".banner-con li");
let b = new banner(oBox, oLis);

// 返回顶部按钮
$(".sidebar>a").eq(2).click(function() {
    $('body,html').animate({ scrollTop: 0 }, 600);
})