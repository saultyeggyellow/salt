//登录接口
var xhr = new XMLHttpRequest();
var phone = "13678296995";
var password = "1126q104w1116";
xhr.open('get', "http://localhost:3000/login/cellphone?phone=" + phone + "&password=" + password, true);
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var text = xhr.responseText;
    var a = JSON.parse(text);
    console.log(a);
    console.log(xhr.readyState);
    console.log(xhr.status);
    console.log(a.cookie);
    x = encodeURIComponent(a.cookie);
    console.log(x);


    //轮播图获取图片
    var xhr6 = new XMLHttpRequest();
    // xhrFields: { withCredentials: true }
    xhr6.open("get", "http://localhost:3000/banner?cookie=" + x, true);
    xhr6.onreadystatechange = function () {
      if (xhr6.readyState == 4 && xhr6.status == 200) {
        var text = xhr6.responseText;
        var a = JSON.parse(text);
        console.log(a.banners);


        // 轮播图类
        class Slide {
          constructor() {
            this.slideBoxDOM = document.querySelector('.slide-box');
            this.slideLeftBtnDOM = this.slideBoxDOM.querySelector('.slide-left-btn');
            this.slideRightBtnDOM = this.slideBoxDOM.querySelector('.slide-right-btn ');
            this.bannerBoxDOM = this.slideBoxDOM.querySelector('.banner-box');
            this.paginationBoxDOM = this.slideBoxDOM.querySelector('.pagination-box');

            // 记数器，记录当前所展示的横幅序号（不可直接操作变值）
            this._currentIndex = 0;
            this.bannerItemDOMs = null;
            // bannerItemDOMs length
            this.bannerItemDOMsLen = 0;

            // 图片对象数组
            this.banners = [
              {
                imageName: a.banners[0].imageUrl,
              },
              {
                imageName: a.banners[1].imageUrl,
              },
              {
                imageName: a.banners[2].imageUrl,
              },
              {
                imageName: a.banners[3].imageUrl,
              },
              {
                imageName: a.banners[4].imageUrl,
              },
              {
                imageName: a.banners[5].imageUrl,
              },
              {
                imageName: a.banners[6].imageUrl,
              },
              {
                imageName: a.banners[7].imageUrl,
              },
              // 可以继续增加图片
            ];
            this.imageUrl = '';

            // 定时器
            this.timer = null;
          }

          get currentIndex() {
            return this._currentIndex;
          }

          // 用来监听记数器变化，根据变换来改变当前的横幅
          set currentIndex(num) {
            // 将所有横幅归初始
            Object.values(this.bannerItemDOMs).forEach((item, i) => {
              item.classList.remove('left', 'middle', 'right');
              item.onclick = null;
              this.paginationBoxDOM.children[i].classList.remove('chose');
            });

            if (num < 0) {
              this._currentIndex = this.bannerItemDOMsLen - 1;
            } else if (num >= this.bannerItemDOMsLen) {
              this._currentIndex = 0;
            } else {
              this._currentIndex = num;
            }
            this.paginationBoxDOM.children[this._currentIndex].classList.add('chose');

            if (this._currentIndex === 0) {
              this.showCurrentBanner(this.bannerItemDOMsLen - 1, this._currentIndex, this._currentIndex + 1);
            } else if (this._currentIndex === this.bannerItemDOMsLen - 1) {
              this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, 0);
            } else {
              this.showCurrentBanner(this._currentIndex - 1, this._currentIndex, this._currentIndex + 1);
            }
          }

          // 显示当前横幅
          showCurrentBanner(leftIndex, middleIndex, rightIndex) {
            console.log(leftIndex, rightIndex, middleIndex)
            this.bannerItemDOMs[leftIndex].classList.add('left');
            this.bannerItemDOMs[middleIndex].classList.add('middle');
            this.bannerItemDOMs[rightIndex].classList.add('right');
            this.bannerItemDOMs[leftIndex].onclick = () => {
              this.currentIndex--;
            };
            this.bannerItemDOMs[rightIndex].onclick = () => {
              this.currentIndex++;
            }
          }

          // 获取 bannerItemDOMs
          getBannerItemDOMs() {
            return this.slideBoxDOM.querySelectorAll('.banner-item');
          }

          // 获取 banner-itemDOM 字符串，用来渲染 DOM
          getBannerItemHTML(imageName) {
            return `<div class="banner-item"><img src="${this.imageUrl + imageName}"></div>`
          }

          // 渲染 DOM
          drawDOM(banners) {
            this.bannerBoxDOM.innerHTML = banners.reduce((html, item) => {
              return html + this.getBannerItemHTML(item.imageName);
            }, '');

            this.banners.forEach((item, i) => {
              const span = document.createElement('span');
              span.addEventListener('mouseover', () => {
                this.currentIndex = i;
              });
              this.paginationBoxDOM.append(span);
            });
          }

          // 启动定时器
          openTimer() {
            this.timer = setInterval(() => {
              this.currentIndex++;
            }, 3000);
          }

          // 清除定时器
          stopTimer() {
            clearInterval(this.timer);
          }

          init() {
            // 初始化
            this.drawDOM(this.banners);
            this.bannerItemDOMs = this.getBannerItemDOMs();
            this.bannerItemDOMsLen = this.bannerItemDOMs.length;
            this.currentIndex = 0;

            // 监听事件
            this.slideLeftBtnDOM.addEventListener('click', () => {
              this.currentIndex--;
            });
            this.slideRightBtnDOM.addEventListener('click', () => {
              this.currentIndex++;
            });

            // 自动轮播
            this.openTimer();
            this.slideBoxDOM.addEventListener('mouseover', () => {
              this.stopTimer();
            });
            this.slideBoxDOM.addEventListener('mouseout', () => {
              this.openTimer();
            })
          }
        }

        new Slide().init();
      }
    }
    xhr6.send();




  }

}
xhr.send();





