$(function(){
    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop();

        var target_1 = $(".home .topDecorate").offset().top;
        if(target_1 - scrollVal <= 540){
            $(".home .topDecorate").addClass(action)
        } else {
            $(".home .topDecorate").removeClass(action)
        };

    })
})



$(function(){
    $(window).scroll(function(){
        var scrollval = $(this).scrollTop();

        $("span.qScrollTop").text(scrollVal);

        if(scrollval>500){
            $("className"),addClass(action)
        }
    })
})