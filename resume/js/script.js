! function(e) {
    "use strict";
    e(".scroll-nav").length && e(".scroll-nav ul").onePageNav(), e('[data-toggle="tooltip"]').tooltip(), e(".mobile-menu .scroll-nav .navigation li a").on("click", function() {
        e(window).width() <= 1024 && e(".mobile-menu .navbar-toggle").trigger("click")
    }), e(".typed-title").typed({
        stringsElement: e(".typing-title"),
        backDelay: 1e3,
        typeSpeed: 0,
        loop: !0
    }), e(".card-inner").mCustomScrollbar();
    e(window).width(), e(window).height();
    var t = e(".card-outer .container"),
        a = e(".card-outer .card-inner-box"),
        i = e(".card-item"),
        n = t.data("animation-in"),
        o = t.data("animation-out");

    function s() {
        if (e(".masonry-gallery").length) {
            var t = e(window),
                a = e(".masonry-gallery .items-container"),
                i = e(".filter-btns");
            a.isotope({
                filter: "*",
                masonry: {
                    columnWidth: 0
                },
                animationOptions: {
                    duration: 500,
                    easing: "linear"
                }
            }), i.find("li").on("click", function() {
                var t = e(this).attr("data-filter");
                try {
                    a.isotope({
                        filter: t,
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: !1
                        }
                    })
                } catch (e) {}
                return !1
            }), t.bind("resize", function() {
                var e = i.find("li.active").attr("data-filter");
                a.isotope({
                    filter: e,
                    animationOptions: {
                        duration: 500,
                        easing: "linear",
                        queue: !1
                    }
                })
            });
            var n = e(".filter-btns li");
            n.on("click", function() {
                var t = e(this);
                t.hasClass("active") || (n.removeClass("active"), t.addClass("active"))
            })
        }
    }(e(".main-menu").on("click", "a", function() {
        var s = e(this).attr("href"),
            l = (parseFloat(e(s).offset().top), e(s)),
            r = e(".main-menu li"),
            d = e(".main-menu li.home"),
            c = e(this).closest("li");
        e(".lnks .lnk.discover");
        return !c.hasClass("active") & e("#home").length && (r.removeClass("active"), t.find(i).removeClass("animated " + n), e(t).hasClass("opened") && t.find(i).addClass("animated " + o), c.addClass("active"), t.addClass("opened"), t.find(l).removeClass("animated " + o), t.find(l).addClass("animated " + n), e(i).addClass("hide-item"), e(l).removeClass("hide-item"), e(l).addClass("active")), d.hasClass("active") ? e(a).removeClass("offsetleft") : e(a).addClass("offsetleft"), !1
    }), e(".main-menu li a").on("click", function(t) {
        var a = e(".main-menu li a").index(this);
        e(".portfolio-bg .image").removeClass("active").eq(a).addClass("active")
    }), s(), e(".testimonial-carousel").length && e(".testimonial-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        smartSpeed: 700,
        autoplay: 4e3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 2
            }
        }
    }), e(".client-carousel").length && e(".client-carousel").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        smartSpeed: 700,
        autoplay: 4e3,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    }), e(".banner-carousel").length && e(".banner-carousel").owlCarousel({
        loop: !0,
        items: 1,
        margin: 0,
        nav: !1,
        smartSpeed: 700,
        autoplay: 4e3
    }), e("#contact-form").length && e("#contact-form").validate({
        rules: {
            username: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0
            },
            message: {
                required: !0
            }
        }
    }), e(".scroll-to-target").length && e(".scroll-to-target").on("click", function() {
        var t = e(this).attr("data-target");
        e("html, body").animate({
            scrollTop: e(t).offset().top
        }, 1500)
    }), e(".progress-levels .progress-box .bar-fill").length && e(".progress-box .bar-fill").each(function() {
        var t = e(this).attr("data-percent");
        e(this).css("width", t + "%"), e(this).children(".percent").html(t + "%")
    }), e(".count-box").length && e(".count-box").appear(function() {
        var t = e(this),
            a = t.find(".count-text").attr("data-stop"),
            i = parseInt(t.find(".count-text").attr("data-speed"), 10);
        t.hasClass("counted") || (t.addClass("counted"), e({
            countNum: t.find(".count-text").text()
        }).animate({
            countNum: a
        }, {
            duration: i,
            easing: "linear",
            step: function() {
                t.find(".count-text").text(Math.floor(this.countNum))
            },
            complete: function() {
                t.find(".count-text").text(this.countNum)
            }
        }))
    }, {
        accY: 0
    }), e(".my-background-video").bgVideo({
        showPausePlay: !1,
        pauseAfter: 1200
    }), e(".wow").length) && new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0
    }).init();
    e(window).on("load", function() {
        e(".preloader").length && e(".preloader").delay(200).fadeOut(500), s()
    })
}(window.jQuery);