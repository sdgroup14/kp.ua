$(document).ready(function () {
    $(window).scroll(function () {
        $(".drop-list").hide();
        if ($(window).scrollTop() > 30) {
            $('.top-bar').addClass('top-bar_act');
        }
        else {
            $('.top-bar').removeClass('top-bar_act');
        }
    });
    $(document).click(function () {
        $(".drop-list").hide();
        $(".js-region-list").hide();
    });
    // tab social 
    $(".js-tab-soc-1").show();
    $(".soc-tabs li").click(function () {
        $(".soc-tabs li").removeClass("active");
        $(this).addClass("active");
        var tab_index = $(this).attr("data-tab");
        $(".tab-soc-cont").hide();
        $(tab_index).show();
    });
    // ----
    $(".archive-nav__region").click(function () {
        $(this).next().slideDown();
    });

    // ------------- Show/hide city list  ---------------------- //
    $(".top-bar__city").click(function (event) {
        event.stopPropagation();
        $(this).children(".drop-list").slideToggle("fast");
    });
    $(".drop-list").click(function (event) {
        event.stopPropagation();
    })

    $(".js-region").click(function () {
        event.stopPropagation();
        $(this).parent().find(".js-region-list").slideToggle("fast");
    });
    $(".js-region-list").click(function (event) {
        event.stopPropagation();
    })

    // ------------- Show/hide popup enter  ---------------------- //
    $(".js-enter").click(function () {
        $(".overlay").fadeIn("fast")
        $(".js-popup-enter").fadeIn("fast");
    });
    $(".popup__close").click(function () {
        $(this).parent().fadeOut();
        $(".overlay").fadeOut();
    });
    $(".overlay").click(function () {
        $(this).fadeOut();
        $(".popup").fadeOut();
    });
    // ------------- Show/hide popup reg   ---------------------- //
    $(".js-reg").click(function () {
        $(".overlay").fadeIn("fast")
        $(".js-popup-reg").fadeIn("fast");
    });
    // ------------- Show/hide copy done message   ---------------------- //
    $(".get-video-code").click(function () {
        $(this).children("span").css("display", "block");
    });

    BandAlignment('.topic__item', '.topic__left', '.other__wrap', -Math.abs(101));

    $('.topic__item img').each(function () {
        $(this).ready(function () {
            BandAlignment('.topic__item', '.topic__left', '.other__wrap', -Math.abs(101));
        });
    });

    $(".magazine .btn-gray").click(function () {
        $(".newsofmag").toggle();
    });
});

function MoveBand(wrap_container, band_container, isTop, endListCallBack) {
    MoveBandOffSet(wrap_container, band_container, isTop, 64, endListCallBack);
}

//band_container - контейнер ленты
//wrap_container - контейнер обетки
function MoveBandOffSet(wrap_container, band_container, isTop, offset, endListCallBack) {
    if (band_container.length > 0 && wrap_container.length > 0) {
        band_container.stop();
        var top = 0;
        if (isTop) {
            var top = band_container.position().top + offset;

            var topBorder = wrap_container.offset().top; //абсолютная верхняя граница обетки
            var topBandBorder = band_container.offset().top + offset; //абсолютная верхняя граница ленты учитывая сдвиг

            if (topBandBorder > topBorder)
                top = 0;
        }
        else {
            top = band_container.position().top - offset; //сдвигаем ленту вверх на 375 пикселей

            var bottomBorder = wrap_container.offset().top + wrap_container.height(); //абсолютная нижняя граница обетки
            var bottomBandBorder = band_container.offset().top + band_container.height() - offset; //абсолютная нижняя граница ленты учитывая сдвиг

            if (endListCallBack && bottomBandBorder < bottomBorder) {
                var lastChild = $(wrap_container).find('dd:last');
                if (lastChild.length > 0) {
                    var rowIndex = lastChild.attr('ri');
                    endListCallBack(rowIndex);
                    bottomBorder = wrap_container.offset().top + wrap_container.height();
                    bottomBandBorder = band_container.offset().top + band_container.height() - offset;
                }
            }

            if (bottomBandBorder < bottomBorder)
                top = wrap_container.height() - band_container.height() - 15; //выставляем ленту в минимальное положение учитывая нюансы верстки(margin, box-shadow)
        }

        band_container.animate({
            top: top
        }, offset);
    }
}

function BandAlignment(father_container_pattern, standard_container_pattern, element_to_resize_pattern, offset) {
    $(father_container_pattern).each(function () {
        var left_column = $(this).find(standard_container_pattern);
        var right_column = $(this).find(element_to_resize_pattern);
        if (right_column.length > 0 && left_column.length > 0)
            right_column.height(left_column.height() + offset); //101 - отступы и кнопки
    });
}


String.format = function () {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];

    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
}

