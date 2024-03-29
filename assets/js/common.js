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
});
