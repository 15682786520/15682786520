
$.fn.hoverDelay = function(options) {
    var defaults = {
        hoverDuring: 200,
        outDuring: 200,
        hoverEvent: function() {
            $.noop();
        },
        outEvent: function() {
            $.noop();
        }
    };
    var sets = $.extend(defaults, options || {});
    var hoverTimer;
    var outTimer;
    return $(this).each(function() {
        $(this).hover(function() {
            clearTimeout(outTimer);
            hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
        }, function() {
            clearTimeout(hoverTimer);
            outTimer = setTimeout(sets.outEvent, sets.outDuring);
        });
    });
};
$(".header-con>li").eq(1).hoverDelay({
    hoverDuring: 500,
    outDuring: 500,
    hoverEvent: function() {
        $(".panel-collapse1").css({
            display: "block"
        });
    },
    outEvent: function() {
        $(".panel-collapse1").css({
            display: "none"
        });
    }
});
$(".header-con>li").eq(2).hoverDelay({
    hoverDuring: 500,
    outDuring: 500,
    hoverEvent: function() {
        $(".panel-collapse2").css({
            display: "block"
        });
    },
    outEvent: function() {
        $(".panel-collapse2").css({
            display: "none"
        });
    }
});
$(".header-con>li").eq(3).hoverDelay({
    hoverDuring: 500,
    outDuring: 500,
    hoverEvent: function() {
        $(".panel-collapse3").css({
            display: "block"
        });
    },
    outEvent: function() {
        $(".panel-collapse3").css({
            display: "none"
        });
    }
});
$(".header-con>li").eq(4).hoverDelay({
    hoverDuring: 500,
    outDuring: 500,
    hoverEvent: function() {
        $(".panel-collapse4").css({
            display: "block"
        });
    },
    outEvent: function() {
        $(".panel-collapse4").css({
            display: "none"
        });
    }
});
$(".header-con>li").eq(5).hoverDelay({
    hoverDuring: 500,
    outDuring: 500,
    hoverEvent: function() {
        $(".panel-collapse5").css({
            display: "block"
        });
    },
    outEvent: function() {
        $(".panel-collapse5").css({
            display: "none"
        });
    }
});