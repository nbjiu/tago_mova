$(document).ready(function () {
    // gnb
    $(".gnb_list")
        .mouseenter(function () {
            if (!$(this).find(".gnb_item").hasClass("active"))
                $(this).find(".gnb_item").addClass("active");
            $(this).find(".snb").stop().animate({ opacity: 0.9 }, 100);
            $(this).find(".snb").css("pointer-events", "auto");
        })
        .mouseleave(function () {
            if ($(this).find(".gnb_item").attr("data") !== "active")
                $(this).find(".gnb_item").removeClass("active");
            $(this).find(".snb").stop().animate({ opacity: 0 }, 100);
            $(this).find(".snb").css("pointer-events", "none");
        });

    // hamburger
    $(".hamburger").click(function () {
        $(this).toggleClass("active");
        if (window.innerWidth <= 1000) {
            $(".mo_menu").toggleClass("active");
        } else {
            $(".mo_menu").removeClass("active");
        }
    });

    $(".mo_list.depth1").click(function () {
        var $siblings = $(this).siblings();
        // 다른 depth1 요소에 있는 open 클래스를 제거합니다.
        $siblings.removeClass("open").find(".mo_snb").hide();
        // 클릭한 depth1 요소의 하위 요소인 mo_snb를 토글합니다.
        $(this).toggleClass("open").find(".mo_snb").toggle();
        // 클릭한 depth1 요소의 이미지를 회전시킵니다.
        $(this).find("img").toggleClass("rotate");
    });

    // file upload
    $("#file_upload").change(function () {
        var fileName = $(this).val().split("\\").pop();
        $("#file_name").val(fileName);
    });

    // popup open
    $(".qa_list_item").click(function () {
        $("#popup_overlay").css("display", "block");
        $("#popup_container").css("display", "block");
        $("body").css("overflow", "hidden");
    });
    // popup close
    $("#popup_close").click(function () {
        $("#popup_overlay").css("display", "none");
        $("#popup_container").css("display", "none");
        $("body").css("overflow", "");
    });

    // faq

    $(".panel-question").click(function () {
        $(".panel-question").removeClass("active");
        $(this).toggleClass("active");
    });

    // top scroll button
    $("#top_btn").hide();

    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var footerOffset = $("footer").offset().top;
        var footerHeight = $("footer").outerHeight();
        var windowHeight = $(window).height();
        var btnHeight = $("#top_btn").outerHeight();

        // 스크롤이 페이지 상단에서 푸터의 상단으로 이동하면
        if (scrollTop + windowHeight > footerOffset) {
            $("#top_btn").css({
                position: "absolute",
                bottom: windowHeight - footerOffset + 50 + "px", // 푸터 위에 위치
            });
        } else {
            $("#top_btn").css({
                position: "fixed",
                bottom: "50px", // 일반적인 위치
            });
        }

        // 스크롤이 일정 위치 이상이면 top_btn 보이게
        if (scrollTop > 200) {
            $("#top_btn").fadeIn();
        } else {
            $("#top_btn").fadeOut();
        }
    });

    $("#top_btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
