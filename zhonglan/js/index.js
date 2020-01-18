// 开启轮播图
$("#banner").carousel({
	interval: 4000
})

// 服务展示切换效果
$('#service-up>div').mouseenter(function() {
	$('#service-up>div').removeClass('active');
	$(this).addClass('active');
})

// 资讯区域宽度
$(window).resize(function() {
	var mediaBodyW = $('.media').innerWidth() - $('.media-left').outerWidth();
	$('.media-body div').css('width', mediaBodyW + 'px');
})
var mediaBodyW = $('.media').innerWidth() - $('.media-left').outerWidth();
$('.media-body div').css('width', mediaBodyW + 'px');

// 动态数字
var options = {
	useEasing: true, //开启一个过渡动画
	useGrouping: true, //开启千位分割
	separator: ',', //定义千位分隔符
	decimal: '.' //小数点分割
};
var arr = new Array(
	new CountUp('num1', 0, 18397, 0, 2, options),
	new CountUp('num2', 0, 98.8, 1, 2, options),
	new CountUp('num3', 0, 3273, 0, 2, options),
	new CountUp('num4', 0, 100, 0, 2, options)
)
$('.number-wrapper span').each(function(){
	var index_ = $(this).index('.number-wrapper span');
	arr[index_].start();
})
