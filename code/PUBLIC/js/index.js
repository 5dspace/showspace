$(document).ready(function(){


	var mySwiper2 = new Swiper('.index_swiper-container2',{
		pagination: '.index_pagination2',
		slideClass:'index_swiper-slide2',
		wrapperClass:'index_swiper-wrapper2',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true,
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    paginationElementClass:'index_swiper_pagination_switch2',
		paginationActiveClass:'index_swiper_active_switch2'
	});		

	var mySwiper1 = new Swiper('.index_swiper-container1',{
		pagination: '.index_pagination1',
		slideClass:'index_swiper-slide1',
		wrapperClass:'index_swiper-wrapper1',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true,
	    autoplay:2000,
	    autoplayDisableOnInteraction:false,
	    paginationElementClass:'index_swiper_pagination_switch1',
		paginationActiveClass:'index_swiper_active_switch1'
	});
});

