$(document).ready( function() {
    //Закрытие блока
    $(document).on("click", ".closing__item", function () {
        $(this).remove();
    });

    //radio
    $(document).on("click", ".pseudo-radio__item input[type='radio']", function () {
        var radio_wrap=$(this).closest(".pseudo-radio");
        radio_wrap.find(".pseudo-radio__item").removeClass("pseudo-radio--active");
        $(this).closest(".pseudo-radio__item").addClass("pseudo-radio--active");
    });

    //checkbox
    $(document).on("click", ".pseudo-checkbox input[type='checkbox']", function () {
        var checkbox_wrap=$(this).closest(".pseudo-checkbox");

        if($(this).prop("checked")==true) {
            checkbox_wrap.addClass("pseudo-checkbox--active");
        }
        else {
            checkbox_wrap.removeClass("pseudo-checkbox--active");
        }
    });

    //switch
    $(document).on("click", ".switch__one", function () {
        var wrap=$(this).closest(".switch");
        if(wrap.find(".switch--one-l").hasClass("switch--one-active")) {
            wrap.find(".switch--one-l").removeClass("switch--one-active");
        }
        else {
            wrap.find(".switch--one-l").addClass("switch--one-active");
        }
        if(wrap.find(".switch--one-r").hasClass("switch--one-active")) {
            wrap.find(".switch--one-r").removeClass("switch--one-active");
        }
        else {
            wrap.find(".switch--one-r").addClass("switch--one-active");
        }
    });

    //tabs
    $(document).on("click", ".tabs__list-link", function (e) {
        e.preventDefault();//отмена действий по умолчанию
        var tab_id=$(this).attr("href");
        $(".tabs__list").removeClass("tabs--list-active");
        $(this).closest(".tabs__list").addClass("tabs--list-active");
        $(".tabs__text-item").removeClass("tabs--text-active");
        $(tab_id).addClass("tabs--text-active");
    });

    //Слайдер
    if($(".bxslider").length>0) {
        var slider=$(".bxslider").bxSlider({
            mode: "horizontal",
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            //slideWidth: 552,
            auto: false,
            autoHover: false,
            speed: 500,
            pause: 700,
            pager: true,
            controls: true,
            touchEnabled: true
        });
        // установим обработчик события resize
        $(window).resize(function(){
            if(slider)
                slider.reloadSlider();
        });
    }

    //Ползунок
    $(".slider-range__body").slider({
        range: true,
        min: 0,
        max: 15000,
        values: [1200, 9500],
        create: function (event, ui) {
            $(this).find(".ui-slider-handle:eq(0)").html("<span>"+1200+"Р</span>");
            $(this).find(".ui-slider-handle:eq(1)").html("<span>"+9500+"Р</span>");
        },
        slide: function (event, ui) {
            $(this).find(".ui-slider-handle:eq(0)").html("<span>"+ui.values[0]+"Р</span>");
            $(this).find(".ui-slider-handle:eq(1)").html("<span>"+ui.values[1]+"Р </span>");
        }
    });

    //Тултип
    $('.note__text').hover(
        function(){
            $(this).closest(".note").find(".note__info-wrap").addClass("block");
        },
        function(){
            $(this).closest(".note").find(".note__info-wrap").removeClass("block");
        }
    );

    //Прогрессбар
    $(function() {
        $("#progressbar").progressbar({
            value: 37
        });
    });
});