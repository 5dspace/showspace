window.onload = function() {
	var Swiper1 = new Swiper('#video_fast_show_list' ,{
		slideClass:'video_swiper_slides',
		wrapperClass:'video_swiper_wraper',
		loop:false,
		pagination: '.video_pagination',
		paginationClickable:true,
		paginationElementClass: 'video_swiitch',
		paginationActiveClass: 'video_active_switch'
	});

	$('.video_wait_swiitch').eq(0).click( function(){
		$(this).next().removeClass('active');
		$(this).addClass('active');
		$('.video_wait_show_slide').eq(1).removeClass('active');
		$('.video_wait_show_slide').eq(0).addClass('active');
	});

	$('.video_wait_swiitch').eq(1).click( function() {
		$(this).prev().removeClass('active');
		$(this).addClass('active');
		$('.video_wait_show_slide').eq(0).removeClass('active');
		$('.video_wait_show_slide').eq(1).addClass('active');
	});

	$('#video_paging_number a').click(function() {
		var page = $(this).attr('data-page');
		if (page === "-2") page = $('.video_reply').length-1;
		if (page === "-1") page = parseInt($('#video_paging_number a.video_paging_choosed').attr('data-page')) >= $('.video_reply').length-1 ?  $('.video_reply').length-1 :  parseInt($('#video_paging_number a.video_paging_choosed').attr('data-page')) + 1;
		$('.video_reply_wrapper_inner').animate( {
			'margin-left':  0 - parseInt(page)*(parseInt($('.video_reply_wrapper_outer').css('width')) +4) + 'px'
		}, 500);
		$('#video_paging_number a').removeClass('video_paging_choosed');
		$('#video_paging_number a[data-page=' + parseInt(page) + ']').addClass('video_paging_choosed');
	});
};