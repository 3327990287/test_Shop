window.addEventListener('load', () => {
    // 获取返回顶部元素
    const fCGoTop = document.querySelector('.f-c-go-top');
    const FCrecommend = document.querySelector('.f-c-recommend');
    console.log(FCrecommend);
    // 获取主要部分元素
    const main = document.querySelector('.main');
    // 获取主要部分的上距离
    let mainTop = main.offsetTop;
    fCGoTop.addEventListener('click', function () {
        if (window.pageYOffset >= mainTop) {
            document.documentElement.scrollTop = 0;
        }
    })
})