// JavaScript Document


 window.onload = function() {
	var mySwiper = new Swiper('.eventBack_swiper_container1' ,{
		slideClass:'eventBack_swiper_slide1',
		wrapperClass:'eventBack_swiper_wrapper1',
		loop:false,
		pagination:'.eventBack_pagination1',
		paginationClickable:true,
		//freeMode:true,
		//freeModeFluid:true,
		paginationElementClass:'eventBack_swiper_pagination_switch1',
		paginationActiveClass:'eventBack_swiper_active_switch1'
	});
}

$(function(){
    var mySwiper2 = $('.eventBack_swiper_container2').swiper({
        slideClass:'eventBack_swiper_slide2',
		wrapperClass:'eventBack_swiper_wrapper2',
		loop:false,
		pagination:'.eventBack_pagination2',
		paginationClickable:true,
		//freeMode:true,
		//freeModeFluid:true,
		paginationElementClass:'eventBack_swiper_pagination_switch2',
		paginationActiveClass:'eventBack_swiper_active_switch2'
    });
})