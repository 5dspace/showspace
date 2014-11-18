/**
 * Created by user on 14/11/11.
 */
$(document).ready(function(){

    var mySwiper = new Swiper('.eventBest_swiper_container',{
        pagination: '.eventBest_pagination',
        paginationElementClass:'eventBest_swiper_pagination_switch',
        paginationActiveClass:'eventBest_swiper_active_switch',
        slideClass:'eventBest_swiper_slide',
        wrapperClass:'eventBest_swiper_wrapper',
        loop:false,
        grabCursor: true,
        paginationClickable: true
    });

    var mySwiper2 = new Swiper('.eventBest_swiper_container2',{
        pagination: '.eventBest_pagination2',
        paginationElementClass:'eventBest_swiper_pagination_switch2',
        paginationActiveClass:'eventBest_swiper_active_switch2',
        slideClass:'eventBest_swiper_slide2',
        wrapperClass:'eventBest_swiper_wrapper2',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:2000,
        autoplayDisableOnInteraction:false

    });

});