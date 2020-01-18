// 左侧悬浮框内容隐藏
var toggleCount = 0;
$('#suspend-toggle').click(function() {
	if (toggleCount == 0) {
		$('.suspend-left .body').css('display', 'none');
		$(this).attr('src', '../images/nodeMax.png');
		toggleCount = 1;
	} else {
		$('.suspend-left .body').css('display', 'block');
		$(this).attr('src', '../images/nodeMin.png');;
		toggleCount = 0;
	}
})

// 返回顶部
$(window).load(function() {
	if ($(document).scrollTop() >= 200) {
		$('.suspend-right .goTop').css('display', 'block');
	} else {
		$('.suspend-right .goTop').css('display', 'none');
	}
	if ($(window).width() < 768) {
		if ($(document).scrollTop() >= 200) {
			$('.mob-goTop').css('display', 'block');
		} else {
			$('.mob-goTop').css('display', 'none');
		}
	}
})
$(window).scroll(function() {
	if ($(document).scrollTop() >= 200) {
		$('.suspend-right .goTop').fadeIn(1000);
	} else {
		$('.suspend-right .goTop').fadeOut(1000);
	}
	if ($(window).width() < 768) {
		if ($(document).scrollTop() >= 200) {
			$('.mob-goTop').fadeIn(500);
		} else {
			$('.mob-goTop').fadeOut(500);
		}
	}
})
$('.goTop').click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 500)
})