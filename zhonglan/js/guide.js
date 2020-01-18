var tableData = [
	['业余运动员和职业运动员（以赢取奖金为唯一目标）',
		'B-1'
	],
	['运动员、艺术家、演艺人员',
		'P'
	],
	['澳大利亚工作者 - 专业人士',
		'BCC'
	],
	['过境卡： 墨西哥',
		'Content Cell'
	],
	['商务访客',
		'B-1'
	],
	['乘务组成员（船舶或国际航班乘务人员）',
		'D'
	],
	['外交官和外国政府公职人员',
		'A'
	],
	['家庭雇员或保姆（必须陪同外国雇主）',
		'B-1'
	],
	['指定国际组织以及北大西洋公约组织(NATO)雇员',
		'G1-G5，NATO'
	],
	['交流访问学者',
		'J'
	],
	['交流访问学者 - 互惠生',
		'J-1'
	],
	['交流访问学者 - J-1签证持有人的子女（21岁以下）或配偶',
		'J-2'
	],
	['交流访问学者 - 教授、学者、老师',
		'J-1'
	],
	['交流访问学者 - 国际文化事业',
		'J，Q'
	],
	['未婚夫（妻）',
		'K-1'
	],
	['驻美外国军事人员',
		'A-2，NATO1-6'
	],
	['在科学、艺术、教育、商业或体育领域有杰出才能的外国公民',
		'O-1'
	],
	['自由贸易协定(FTA)专业人士： 智利',
		'H-1B1'
	],
	['自由贸易协定(FTA)专业人士： 新加坡',
		'H-1B1'
	],
	['新闻媒体工作者（媒体、记者）',
		'I'
	],
	['公司内部调职者	',
		'L'
	],
	['寻求医疗服务的人士',
		'B-2'
	],
	['北美自由贸易协定(NAFTA)专业人士： 墨西哥、加拿大',
		'TN/TD'
	],
	['前往缺乏医疗人才的地区从事护理工作的人士',
		'H-1C'
	],
	['医师',
		'J-1，H-1B'
	],
	['宗教工作者',
		'R'
	],
	['从事特定技能领域的专业人士',
		'H-1B'
	],
	['学生 - 就读学术机构和语言学校的学生',
		'F-1'
	],
	['学生亲属 - F-1签证持有人的亲属',
		'F-2'
	],
	['学生 – 职业教育',
		'M-1'
	],
	['学生亲属 - M-1签证持有人的亲属',
		'M-2'
	],
	['短期工作者 - 季节性农业',
		'H-2A'
	],
	['短期工作者 – 非农业',
		'H-2B'
	],
	['旅游、度假、观光客',
		'B-2'
	],
	['参加非就业性质的项目培训',
		'H-3'
	],
	['北马里亚纳群岛联邦的过渡工作者',
		'CW'
	],
	['条约投资者',
		'E-2'
	],
	['条约交易者',
		'E-1'
	],
	['过境',
		'C'
	],
	['人口贩卖受害者',
		'T-1'
	],
	['在美国签证续签 - A类、G类和NATO类',
		'A1-2，G1-4，NATO1-6'
	]
]
for (var i = 0; i < tableData.length; i++) {
	$(`<tr><td>${tableData[i][0]}</td><td>${tableData[i][1]}</td></tr>`).appendTo('tbody');
}
// 侧栏的显示
function sideFloat() {
	if ($(window).width() >= 768) {
		$('.side-nav').css('display', 'block');
		if ($(document).scrollTop() > 83) {
			$('.side-list').css({
				'position': 'fixed',
				'top': '83px',
				'width': '198.5px'
			})
		} else {
			$('.side-list').css({
				'position': 'static'
			})
		}
		// 侧边栏可以被允许拥有的高度=页面底部区域到页面顶部的距离-滚动条到页面顶部距离-导航栏高度83px-内容区域下外边距30px
		var sideHeight = $('.contact-banner').offset().top - $(document).scrollTop() - 113;
		if ($('.side-list').outerHeight() > sideHeight) {
			$('.side-list').css('height', sideHeight + 'px');
		} else if ($('.side-list').outerHeight() < 644) {
			$('.side-list').css('height', sideHeight + 'px');
		}
	} else {
		$('.side-nav').css('height', '100%');
		$('.side-list').css({
			'position': 'static',
			'width': '100%',
			'height': '100%',
			'overflow': 'auto'
		})
	}
}
$('.side-nav').css('display', 'none');
sideFloat();
$(window).scroll(function() {
	sideFloat();
})
$(window).resize(function() {
	$('.side-nav').css('display', 'none');
	sideFloat();
})
// 点击按钮显示侧栏
$('.mob-side').css('display', 'block');
$('.mob-side').click(function() {
	$('.side-nav').css('display', 'block');
	$('.mask').css('display', 'block');
	$('.mob-side').css('background-position', '-45px -45px');
})
// 点击蒙层隐藏侧栏
$('.mask').click(function() {
	$('.side-nav').css('display', 'none');
	$('.mask').css('display', 'none');
	$('.mob-side').css('background-position', '1px -45px');
})

function aClass(){
	var sectionTop1 = $('.text-body>div').eq(0).offset().top-83;
	var sectionTop2 = $('.text-body>div').eq(1).offset().top-83;
	var sectionTop3 = $('.text-body>div').eq(2).offset().top-83;
	if($(document).scrollTop()>=sectionTop1 && $(document).scrollTop()<sectionTop2){
		$('.subList li').removeClass('active');
		$('.subList li').eq(0).addClass('active');
	} else if($(document).scrollTop()>=sectionTop2 && $(document).scrollTop()<sectionTop3){
		$('.subList li').removeClass('active');
		$('.subList li').eq(1).addClass('active');
	} else if($(document).scrollTop()>=sectionTop3){
		$('.subList li').removeClass('active');
		$('.subList li').eq(2).addClass('active');
	}
}
aClass();
$(window).scroll(function(e){
	aClass();
})