var title = document.getElementsByClassName('sidebar__elem');
$(function() {
    $(".sidebar__elem").click(function() {
        $(".sidebar__elem_dropped").not($(this)).removeClass("sidebar__elem_dropped");
        $(".sidebar__elem").addClass("sidebar__elem");
        $(this).toggleClass("sidebar__elem_dropped");
    })
});

$(function () {
        $(".sidebar__caption_first").click(function() {
            $(".sidebar__list_first").toggleClass("sidebar__list_active");
            $(".sidebar__caption_first").toggleClass("sidebar__caption_first-active");
        });
});

$(function () {
        $(".sidebar__caption_second").click(function() {
            $(".sidebar__list_second").toggleClass("sidebar__list_active");
            $(".sidebar__caption_second").toggleClass("sidebar__caption_second-active");
        });
});