
$(document).ready((function() {

    var _windowHeight = $(window).outerHeight()
      , iframePlayer = []
      , scrollAnimate = $(".scroll-animate")
      , popScrollTop = 0;
    function setPlayer($this) {
        var id = $this.attr("id")
          , src = $this.data("src")
          , _this = iframePlayer.find((function(item) {
            return item.el.id === id
        }
        ));
        $this.attr("src", src),
        _this.player = new Zigbang.Player($this),
        _this.player.on("play", (function() {
            iframePlayer.forEach((function(item) {
                item.player && item.el.id !== id && item.player.getPaused().then((function(paused) {
                    paused || item.player.pause()
                }
                ))
            }
            ))
        }
        ))
    }
    // steven
    function setPlayerKv($this) {
        $("#video01").addClass("show");        
        $this.attr("src",'https://apis.zigbang.com/v2/vimeo/497912343?autoplay=1&loop=1&background=1');

        $('#video01').on('load', function(){
            setTimeout(function() {
                $(".kv-image").addClass("hide");
            }, 700);
        });
    }
    $(".slider01").slick({
        speed: 600,
        dots: !0,
        arrows: !0
    }),
    // 20210113
    $(".slider02").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: !0,
        arrows: !0
    }),
    $(".sec06 .tooltip-list li").on("click", "a", (function(e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass("on"),
        $this.hasClass("on") && $this.parent("li").siblings().find("a").removeClass("on")
    }
    )),
    $(".slider").on("touchstart", ".slick-slide", (function() {}
    )),
    $(".floating-banner").on("touchstart", (function() {}
    )),
    function() {
        function scrollContent() {
            var $window = $(window), bannerTimeout, isBanner, $viewport = $(".momo-wrap .container");
            function floatingBanner() {
                var windowTop = $window.scrollTop()
                  , windowLeft = $window.scrollLeft()
                  , windowHeight = $window.height()
                  , eventTop = $(".section.event").offset().top - windowHeight;
                $(".section.event").css("transform", "translate(" + -1 * windowLeft + "px)"),
                windowTop > eventTop ? (clearTimeout(bannerTimeout),
                bannerTimeout = setTimeout((function() {
                    isBanner = !1,
                    $(".floating-banner").removeClass("on")
                }
                ), 300)) : (clearTimeout(bannerTimeout),
                bannerTimeout = setTimeout((function() {
                    isBanner = !0,
                    $(".floating-banner").addClass("on")
                }
                ), 300))
            }
            $window.on("scroll", (function() {
                floatingBanner(),
                isBanner && $(".floating-banner").removeClass("on"),
                scrollAnimate.each((function() {
                    var $this = $(this);
                    $this.isInAnimated() && $this.addClass("animated")
                }
                )),
                iframePlayer.forEach((function(item) {
                    item.player && !$(item.el).isInViewport($viewport) ? item.player.getPaused().then((function(paused) {
                        paused || item.player.pause()
                    }
                    )) : !item.player && $(item.el).isInViewport($viewport, !0) ? $(item.el).attr("src") || setPlayer($(item.el)) : item.player && $(item.el).isInViewport($viewport, !0) && ($(item.el).data("auto") || item.player.getPaused().then((function(paused) {
                        paused && item.player.play();
                        // steven
                // $(item.el).siblings(".preview-image").addClass("hide");
                    }
                    )))
                }
                ))
            }
            )),
            $window.on("resize", (function() {
                var userAgent = window.navigator.userAgent
                  , iOS = !!userAgent.match(/iPad/i) || !!userAgent.match(/iPhone/i)
                  , webkit = !!userAgent.match(/WebKit/i)
                  , iOSSafari = iOS && webkit && !userAgent.match(/CriOS/i)
                  , screenHeight = screen.height
                  , innerHeight = $(window).height()
                  , outerHeight = $(window).outerHeight()
                  , calcHeight = (screenHeight - innerHeight) / 2;
                iOSSafari && (_windowHeight < outerHeight ? $(".floating-banner").css("bottom", calcHeight + "px") : $(".floating-banner").css("bottom", "4.1667vw"))
            }
            ))
        }
        // steven
      $("iframe").not(".not_scroll").each((function() {
        $(this).attr("id") && iframePlayer.push({
            el: $(this)[0],
            player: null
        });
        }
        )),
        scrollContent()
    }(),
    // $(".floating-btn").on("click", (function() {
    //     var eventTop = $(".section.event").offset().top;
    //     $("html, body").stop().animate({
    //         scrollTop: eventTop
    //     }, 700)
    // }
    // )),
    $(".btn-go-top").on("click", (function(e) {
        e.preventDefault(),
        $("html, body").stop().animate({
            scrollTop: 0
        }, 700)
    }
    )),
    $(".agree-box > li:first-child > a").on("click", (function() {
        $(this).parent().toggleClass("on")
    }
    )),
    $(".btn-notice").on("click", (function() {
        $(".layer-popup.event").show()
    }
    )),
    $(".btn-popup").on("click", (function() {
        $(window).innerWidth() >= 769 ? ($("body").append('<div class="overlay"></div>'),
        $(".layer-popup").css("top", $(window).scrollTop() + 55),
        $(this).hasClass("btn-expand") && (popScrollTop = $(window).scrollTop(),
        $("body").addClass("scroll-lock"),
        $("body").css("top", -1 * popScrollTop + "px"))) : ($(".layer-popup").css("top", $(window).scrollTop()),
        $(this).hasClass("btn-expand") && (popScrollTop = $(window).scrollTop(),
        $("body").append('<div class="overlay"></div>'),
        $("body").addClass("scroll-lock"),
        $("body").css("top", -1 * popScrollTop + "px")))
    }
    )),
    $(".layer-popup").on("click", ".btn-popup-close", (function() {
        $(this).parent().css("display", "none"),
        $(".overlay").remove(),
        $("body").hasClass("scroll-lock") && ($("body").removeClass("scroll-lock"),
        $("body").removeAttr("style"),
        $("html, body").scrollTop(popScrollTop))
    }
    )),
    $(".btn-terms.terms01").on("click", (function() {
        $(".layer-popup.terms01").show()
    }
    )),
    $(".btn-terms.terms02").on("click", (function() {
        $(".layer-popup.terms02").show()
    }
    )),
    $(".btn-terms.terms03").on("click", (function() {
        $(".layer-popup.terms03").show()
    }
    )),
    $(".layer-popup").on("click", ".btn-close", (function() {
        $(this).parent().hide(),
        $(".overlay").remove(),
        $("body").hasClass("scroll-lock") && ($("body").removeClass("scroll-lock"),
        $("body").removeAttr("style"),
        $("html, body").scrollTop(popScrollTop))
    }
    )),
    $(".momo-gnb").on("click", ".btn-gnb-open", (function(e) {
        e.preventDefault(),
        $(".gnb-open, .gnb-open-bg").addClass("on"),
        popScrollTop = $(window).scrollTop(),
        $("body").addClass("scroll-lock"),
        $("body").css("top", -1 * popScrollTop + "px")
    }
    )),
    $(".momo-gnb").on("click", ".btn-gnb-close", (function(e) {
        e.preventDefault(),
        $(".gnb-open, .gnb-open-bg").removeClass("on"),
        $("body").removeClass("scroll-lock"),
        $("body").removeAttr("style"),
        $("html, body").scrollTop(popScrollTop)
    }
    )),
    $(".gnb-open-bg").on("click", (function(e) {
        e.preventDefault(),
        $(".gnb-open, .gnb-open-bg").removeClass("on"),
        $("body").removeClass("scroll-lock"),
        $("body").removeAttr("style"),
        $("html, body").scrollTop(popScrollTop)
    }
    )),
    $(".momo-gnb li").on("click", "a", (function(e) {
        e.preventDefault(),
        $(".gnb-open, .gnb-open-bg").removeClass("on"),
        $("body").removeClass("scroll-lock"),
        $("body").removeAttr("style"),
        $("html, body").scrollTop(popScrollTop);
        var $this, index = $(this).parent().index();
        0 == index ? $("html, body").stop().animate({
            scrollTop: $(".kv").offset().top
        }, 700) : 1 == index ? $("html, body").stop().animate({
            scrollTop: $(".chapter01").offset().top
        }, 700) : 2 == index ? $("html, body").stop().animate({
            scrollTop: $(".emeblem").offset().top
        }, 700) : 3 == index ? $("html, body").stop().animate({
            scrollTop: $(".location").offset().top
        }, 700) : 4 == index ? $("html, body").stop().animate({
            scrollTop: $(".chapter02").offset().top
        }, 700) : 5 == index ? $("html, body").stop().animate({
            scrollTop: $(".interview").offset().top
        }, 700) : 6 == index ? $("html, body").stop().animate({
            scrollTop: $(".FAQ").offset().top
        }, 700) : 7 == index ? $("html, body").stop().animate({
            scrollTop: $(".chapter03").offset().top
        }, 700) : 8 == index ? $("html, body").stop().animate({
            scrollTop: $(".vivaldi").offset().top
        }, 700) : 9 == index ? $("html, body").stop().animate({
            scrollTop: $(".modelHouse").offset().top
        }, 700) : 10 == index ? $("html, body").stop().animate({
            scrollTop: $(".event").offset().top
            // 20210114
        }, 700) : 11 == index && $("html, body").stop().animate({
            scrollTop: $(".section.event .giftcard-box").offset().top
        }, 700)
    }
    )),
    $(".btn-submit").on("click", (function() {
        
        var len = $(".checkMust").length,
        phone = $("#phone").val(),
        reg = /^01([0|1|6|7|8|9]{1})([0-9]{3,4})([0-9]{4})$/;

        if($(".checkMust:checked").length < len) {
        customAlert('필수 약관에 동의해 주세요.');
        return;
        }

        if(phone == '') {
        customAlert('연락처를 입력해주세요.');
        $("#phone").focus();
        return;
        }

        if(!reg.test(phone)) {
        customAlert('연락처가 잘못 입력되었습니다. 다시 한 번 확인해 주세요.');
        $("#phone").focus();
        return;
    }
        fbq("track", "ec_submit_82257"),
        gtag("event", "click", {
            event_category: "invitation"
        }),
        gtag_report_conversion()
    }
    )),
    $(".iframe-box").on("click", ".btn-sound", (function() {
        var $this = $(this), id = $this.siblings("iframe").attr("id"), muted = $this.data("muted"), _this;
        iframePlayer.find((function(item) {
            return item.el.id === id
        }
        )).player.setMuted(!muted),
        $this.data("muted", !muted),
        $this.toggleClass("on")
    }
    )),
    // steven
  setPlayerKv($("#video01"));
  //    setPlayer($("#video01"));
  $('.slider01').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    if(currentSlide == 0){
        $('.map-img').slick('slickGoTo', 0);
    }else if(currentSlide == 1){
        $('.map-img').slick('slickGoTo', 14);
    }
});
$('.map-ai').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    if(currentSlide == 0){
        $('.map-button button').removeClass("active");
        $('.map-button button').eq(0).addClass("active");
        $('.slider01.map-img').slick('slickGoTo', 0);
    }else if(currentSlide == 1){
        $('.map-img').slick('slickGoTo', 14);
    }
});

$('.map-img').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){     
    if(currentSlide < 14){            
        $('.map-button button').removeClass("active");
        $('.map-button button').eq(currentSlide).addClass("active");
        if($('.map-ai').slick('slickCurrentSlide') == 1){
            $('.map-ai').slick('slickGoTo', 0);
        }
    }else if(currentSlide == 14){
        if($('.map-ai').slick('slickCurrentSlide') == 0){
            $('.map-ai').slick('slickGoTo', 1);
        }
    }
});
}
)),
$.fn.isInViewport = function(box, detail) {
    var boxLeft = box ? box.offset().left : 0
      , boxRight = boxLeft + (box ? box.outerWidth() : $(window).width())
      , viewportTop = $(window).scrollTop()
      , elementTop = $(this).offset().top
      , elementBottom = elementTop + $(this).outerHeight()
      , elementLeft = $(this).offset().left
      , elementRight = elementLeft + $(this).outerWidth()
      , viewportBottom = viewportTop + $(window).height();
    return detail ? elementBottom > viewportTop && elementTop < viewportBottom && elementLeft >= boxLeft - 20 && elementRight <= boxRight : elementTop >= viewportTop && elementBottom < viewportBottom && elementLeft >= boxLeft - 20 && elementRight <= boxRight
}
,
$.fn.isInAnimated = function() {
    var viewportTop = $(window).scrollTop()
      , elementTop = $(this).offset().top
      , elementBottom = elementTop + $(this).outerHeight()
      , viewportBottom = viewportTop + .9 * $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom
}
;

// 전체동의 체크
$("#agree01").click(function(){
    if($("#agree01").prop("checked")) { 
        $("input[type=checkbox]").prop("checked",true); 
    } else {
        $("input[type=checkbox]").prop("checked",false); } 
});
$(".checkList").click(function(){
    var len = $(".checkList").length;
 
     if($(".checkList:checked").length < len) { 
         $("#agree01").prop("checked",false); 
     } else {
         $("#agree01").prop("checked",true);  } 
 });
// 지도 버튼 클릭 시 해당 img slider로 이동
$('.map-button button').click(function() {
    var slideNo = $(this).index();
    $('.map-img').slick('slickGoTo', slideNo);
    $('.map-button button').removeClass("active");
    $(this).addClass("active");
});

//아코디언 FAQ
$(".card-header").click(function(){
    // self clicking close
    if($(this).next(".card-body").hasClass("active")){
        $(this).next(".card-body").removeClass("active").slideUp();	
        $(this).children("a").removeClass("active");
    }
    else{
        $(".card-body").removeClass("active").slideUp();
        $(".card-header a").removeClass("active");
        $(this).next(".card-body").addClass("active").slideDown();
        $(this).children("a").addClass("active");
    }
});

$(".floating-btn").click(function() {
    // 20210113
    var eventTop = $(".section.event .giftcard-box").offset();
    $("html, body").stop().animate({scrollTop: eventTop.top}, 700);
});
function customAlert(txt) {
    var popTimer;
    
    clearTimeout(popTimer);
    
    $(".term-check").html(txt);
    $(".term-check").show();
      popTimer = setTimeout(function() {
      $(".term-check").hide()
    }, 3e3);
    }




