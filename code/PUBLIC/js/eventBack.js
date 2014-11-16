// JavaScript Document

 var currentPages = 1, maxPages = 8, min_ = 1, currentDiv, allDiv;
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
	currentDiv = getElementsByClassName('eventBack_content_main_div');
    maxPages = currentDiv.length/3;
    if (currentDiv.length%3) maxPages++;
	allDiv = getElementsByClassName('eventBack_content_main_div');
	/*var numbers = getElementsByClassName('eventBack_content_main_div');
	document.getElementById('eventBack_swiper_wrapper2').style.width = (numbers/3+1)*524;*/
}

function getElementsByClassName(n) {  //获取同一类名元素
    var classElements = [],allElements = document.getElementsByTagName('div');//所有div
    for (var i=0; i< allElements.length; i++ )
   {
       if (allElements[i].className == n) {
		   //if (allElements[i].className == 'none') continue;
           classElements[classElements.length] = allElements[i];
        }
   }
   //maxPages = classElements.length/3;
   //if (classElements.length%3) maxPages++;
   return classElements;
}
function noneFirstPages (n) {//none掉前N页div
    if (n < 0) return;
	if (n >= maxPages) return;
    var items = currentDiv;
	var i;
	for (i = 0; (i+1) <= n*3; i++) {
		items[i].style.display = 'none';
	}
	for (; (i+1) <= maxPages*3; i++) {
		items[i].style.display = 'block';
	}
	currentPages = n+1;
	showPages(currentPages);
} 
function showPages(n) {
	if (n <= 5) {
		document.getElementById('eventBack_'+n.toString()).style.border = '1px black solid';
		noneBorder(n);
		document.getElementById('eventBack_right').style.visibility = 'visible';
		document.getElementById('eventBack_left').style.visibility = 'hidden';
		var i;
		var x = 0;
		for (i = 1; i <= 5; i++) {
			x++;
			document.getElementById('eventBack_'+i.toString()).innerHTML = x.toString();
		}
		min_ = 1;
	} else {
		min_ = n-4;
		var i;
		var x = n-5;
		for (i = 1; i <= 5; i++) {
			x++;
			document.getElementById('eventBack_'+i.toString()).innerHTML = x.toString();
		}
		document.getElementById('eventBack_5').style.border = '1px black solid';
		noneBorder(5);
		document.getElementById('eventBack_left').style.visibility = 'visible';
		if (n == 8)
		  document.getElementById('eventBack_right').style.visibility = 'hidden';
		else
		  document.getElementById('eventBack_right').style.visibility = 'visible';
	}
}
function noneBorder(n) {
	var i;
	for (i = 1; i <=5; i++) {
		if (i != n) {
			document.getElementById('eventBack_'+i.toString()).style.border = 'none';
		}
	}
}
//修改年份
function currentYear(n) {
	var select1 = document.getElementById('eventBack_select1');
    var select2 = document.getElementById('eventBack_select2');
	var i;
	if (n == 0) {
		currentDiv = getElementsByClassName('eventBack_content_main_div');
        maxPages = currentDiv.length/3;
        if (currentDiv.length%3) maxPages++;
		for (i = 0; i < allDiv.length; i++)
		  allDiv[i].style.display = 'block';
		  if (select2.value != 0) currentClass(select2.value);
		  return;
	}
	currentDiv = getElementsByClassName(n.toString());
	for (i = 0; i < allDiv.length; i++) {
		if (allDiv[i].className != n.toString())
		  allDiv[i].style.display = 'none';
	}		
	if (select2.value != 0) {
		for (i = 0; i < currentDiv.length; i++) {
		if (currentDiv[i].className != select2.value.toString())
		  currentDiv[i].style.display = 'none';
	    }
	}
}
function currentClass(n) {
	var select1 = document.getElementById('eventBack_select1');
    var select2 = document.getElementById('eventBack_select2');
	var i;
	if (n == 0) {
		currentDiv = getElementsByClassName('eventBack_content_main_div');
        maxPages = currentDiv.length/3;
        if (currentDiv.length%3) maxPages++;
		for (i = 0; i < allDiv.length; i++)
		  allDiv[i].style.display = 'block';
		  if (select1.value != 0) currentYear(select1.value);
		  return;
	}
	currentDiv = getElementsByClassName(n.toString());
	for (i = 0; i < allDiv.length; i++) {
		if (allDiv[i].className != n.toString())
		  allDiv[i].style.display = 'none';
	}	
	if (select1.value != 0) {
		for (i = 0; i < currentDiv.length; i++) {
		if (currentDiv[i].className != select1.value.toString())
		  currentDiv[i].style.display = 'none';
	    }
	}
}