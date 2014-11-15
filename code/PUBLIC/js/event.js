window.onload = function() {
	var mySwiper = new Swiper('.event_swiper_container' ,{
		slideClass:'event_swiper_slide',
		wrapperClass:'event_swiper_wrapper',
		loop:false,
		pagination:'.event_pagination',
		paginationClickable:true,
		//freeMode:true,
		//freeModeFluid:true,
		paginationElementClass:'event_swiper_pagination_switch',
		paginationActiveClass:'event_swiper_active_switch'
	});
}