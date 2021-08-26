window.addEventListener('load', function () {
    // 获取元素
    const focus = document.querySelector('.focus');
    const arrow_l = focus.querySelector('.icon-zuojiantou');
    const arrow_r = focus.querySelector('.icon-youjiantou');
    const ul = focus.querySelector('ul');
    let circles = focus.querySelector('.circle');
    // 方向箭头点击
    let num = 0;
    // 按钮播放
    let currentLi = 0;
    // 防止点击过快
    let flag = true;
    //视口宽度
    let focusWidth = focus.offsetWidth;
    // 鼠标经过
    focus.addEventListener('mouseenter', () => {
        arrow_r.style.display = 'block';
        arrow_l.style.display = 'block';
        this.clearInterval(timer);
        timer = null;
    })
    // 鼠标离开
    focus.addEventListener('mouseleave', () => {
        arrow_r.style.display = 'none';
        arrow_l.style.display = 'none';
        timer = setInterval(() => {
            arrow_r.click();
        }, 3000);
    })
    // 动态生成ol(按钮)
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement("li");
        li.textContent = "●";
        // 记录索引
        li.setAttribute('index', i);
        circles.appendChild(li);
        // 按钮点击事件
        li.addEventListener('click', function () {
            // 选中状态(排他)
            for (let i = 0; i < circles.children.length; i++) {
                circles.children[i].className = "";
            }
            this.className = 'current';
            // 点击移动图片
            let index = this.getAttribute('index');
            num = index;
            currentLi = index;
            animate(ul, -index * focusWidth);
        })
    }
    // 第一个按钮设置选中状态
    circles.children[0].className = "current";
    // 克隆第一张图片
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 右按钮
    arrow_r.addEventListener('click', () => {
        if (flag === true) {
            flag = false;
            // 走到最后一张解决方案
            if (num === ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            currentLi++;
            /* if (currentLi === ul.children.length - 1) {
                currentLi = 0;
            } */
            currentLi = currentLi === ul.children.length - 1 ? 0 : currentLi;
            circleChange();
        }
    })
    // 左按钮
    arrow_l.addEventListener('click', () => {
        if (flag === true) {
            flag = false;
            // 走到最后一张解决方案
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            currentLi--;
            /* if (currentLi < 0) {
                currentLi = circles.children.length - 1;
            } */
            currentLi = currentLi < 0 ? circles.children.length - 1 : currentLi;
            circleChange();
        }
    })

    function circleChange() {
        // 排他
        for (let i = 0; i < circles.children.length; i++) {
            circles.children[i].className = '';
        }
        circles.children[currentLi].className = 'current';
    }

    // 自动播放轮播图
    let timer = setInterval(() => {
        arrow_r.click();
    }, 3000);
})