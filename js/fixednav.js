window.addEventListener('load', function () {
	// 获取静态导航栏元素
	const fixednav = document.querySelector('.fixednav');
	const fixednavContainer = document.querySelector('.fixednav-container');
	// 获取轮播图元素
	const main = document.querySelector('.main');
	// 获取静态导航栏距离可视窗口上距离
	let fixednavTop = fixednav.offsetTop;
	// 获取轮播图距离可视窗口上距离
	let mainTop = main.offsetTop;
	// 静态导航栏浮动时的上距离
	let fixedTop = fixednavTop - mainTop;
	// 页面滚动监听事件
	window.addEventListener('scroll', function () {
		if (window.pageYOffset >= mainTop) {
			fixednav.style.position = 'fixed';
			fixednav.style.top = fixedTop + 'px';
			fixednavContainer.style.opacity = 1;
		} else {
			fixednav.style.position = 'absolute';
			fixednav.style.top = fixednavTop + 'px';
			fixednavContainer.style.opacity = 0;
		}
	})
})