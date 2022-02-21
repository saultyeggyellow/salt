var up = document.querySelector('div.up');
var down1 = document.querySelector('div.down1');
var down3 = document.querySelector('div.down3');
var songlistdetail = document.querySelector('div.songlistDetails');
var toLeft = document.getElementById("toLeft");
var toRight = document.getElementById("toRight");


var toDown1 = document.querySelector('.up>.up-in:nth-of-type(1)');
var toDown3 = document.querySelector('.up>.up-in:nth-of-type(3)');




//登录接口
var xhr = new XMLHttpRequest();
var phone = "18780890168";
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





        //个性推荐中的推荐歌单

        //每日歌单推荐
        var xhr4 = new XMLHttpRequest();
        // xhrFields: { withCredentials: true }
        xhr4.open("get", "http://localhost:3000/recommend/resource?cookie=" + x, true);
        xhr4.onreadystatechange = function () {
            if (xhr4.readyState == 4 && xhr4.status == 200) {
                var text = xhr4.responseText;
                var a = JSON.parse(text);
                console.log(a);
                var c = a.recommend;




                //歌单外部描述
                var s2 = document.querySelectorAll('.songlist-one>span');
                console.log(s2);
                for (var n = 1; n < c.length && n <= 9; n++) {
                    s2[n].innerHTML = c[n].name;
                    console.log(s2[n]);
                }



                for (var n = 1; n <= c.length - 1 && n <= 9; n++) {
                    var h = a.recommend[n].id;
                    console.log(n);
                    console.log(h);
                    //歌单详细信息(歌单封面)
                    var xhr7 = new XMLHttpRequest();
                    xhr7.open("get", "http://localhost:3000/playlist/detail?id=" + h + "&cookie=" + x, false);
                    xhr7.onreadystatechange = function () {
                        if (xhr7.readyState == 4 && xhr7.status == 200) {
                            var text = xhr7.responseText;
                            var a = JSON.parse(text);
                            console.log(a);

                            //封面img
                            var s3 = document.querySelectorAll('.songlist-one>img');
                            console.log(s3);
                            console.log(n);
                            console.log(s3[n]);
                            s3[n].src = a.playlist.coverImgUrl;
                            console.log(s3[n].src);


                            //封面点击事件
                            s3[n].onclick = function () {
                                down1.style.zIndex = 0;
                                up.style.zIndex = 0;
                                songlistdetail.style.zIndex = 1;


                                //修改歌单
                                var songlistDetails = document.querySelector('.songlistDetails>.details>img');
                                songlistDetails.src = a.playlist.coverImgUrl;
                                var title = document.querySelector('.songlistDetails>.details>.detail>.detail1>.title');
                                title.innerHTML = a.playlist.name;
                                var creatorId = document.querySelector('.songlistDetails>.details>.detail>.detail2>span:nth-of-type(1)');
                                creatorId.innerHTML = "2017-3-14";
                                var collection = document.querySelectorAll('.detail3>button>span');
                                collection[0].innerHTML = a.playlist.subscribedCount;
                                if (a.playlist.subscribedCount > 10000) {
                                    a.playlist.subscribedCount = (a.playlist.subscribedCount - a.playlist.subscribedCount % 10000) / 10000 + "万";
                                }
                                collection[1].innerHTML = a.playlist.shareCount;
                                var label = document.querySelector('.detail4>span');
                                label.innerHTML = label.innerHTML = a.playlist.tags[0];
                                for (var n = 1; n < a.playlist.tags.length; n++) {
                                    label.innerHTML += "/" + a.playlist.tags[n];
                                }
                                var songsnum = document.querySelector('.detail5>span:nth-of-type(1)');
                                songsnum.innerHTML = label.innerHTML = a.playlist.tracks.length;
                                var playCount = document.querySelector('.detail5>span:nth-of-type(2)');
                                playCount.innerHTML = a.playlist.playCount;
                                if (a.playlist.playCount > 10000) {
                                    a.playlist.playCount = (a.playlist.playCount % 10000) / 10000 + "万";
                                }
                                var description = document.querySelector('.detail6>span');
                                description.innerHTML = a.playlist.description;




                                //歌单内回退
                                toLeft.onclick = function () {
                                    down1.style.zIndex = 1;
                                    down3.style.zIndex = 0;
                                    up.style.zIndex = 1;
                                    songlistdetail.style.zIndex = 0;
                                }
                            }



                            //播放量
                            var s4 = document.querySelectorAll('.songlist-one>div>span');
                            s4[n - 1].innerHTML = a.playlist.playCount;
                            if (s4[n - 1].innerHTML > 1000) {
                                s4[n - 1].innerHTML = (s4[n - 1].innerHTML - s4[n - 1].innerHTML % 10000) / 10000 + "万";

                            }



                            //全部播放开始播放单击响应事件
                            var start = document.querySelector('.detail3>button');
                            start.onclick = function () {
                                //获取歌曲id
                                var b = a.playlist.tracks[0].id;
                                for (var n = 1; n < a.playlist.tracks.length; n++) {
                                    b += "," + a.playlist.tracks[n].id;
                                }

                                //存储歌曲名字和作者
                                var e = [];
                                var f = [];
                                for (var n = 0; n < a.playlist.tracks.length; n++) {
                                    var e = a.playlist.tracks[n].name;
                                    var f = a.playlist.tracks[n].ar[0].name;
                                }


                                //歌曲url
                                var xhr8 = new XMLHttpRequest();
                                xhr8.open("get", "http://localhost:3000/song/url?id=" + b, false);
                                xhr8.onreadystatechange = function () {
                                    if (xhr8.readyState == 4 && xhr8.status == 200) {
                                        var text = xhr8.responseText;
                                        var a = JSON.parse(text);
                                        console.log(a);


                                        //存储url
                                        var url = [];
                                        for (var n = 0; n < a.data.length; n++) {
                                            url[n] = a.data[n].url;
                                        }
                                        console.log(url);

                                        var m = document.getElementsByTagName('audio');
                                        var songname = document.querySelector('#songname>span');
                                        var author = document.querySelector('#author');
                                        var musicImg = document.querySelector('.music-img');

                                        console.log(m[0].src);
                                        //默认播放第一首歌
                                        n = 0;
                                        m[0].src = url[n];
                                        songname.innerHTML = e[n];
                                        author.innerHTML = f[n];
                                        m[0].play();
                                        console.log(m[0].src);

                                        //上一首

                                        var forward = document.querySelector(".navigation>button#prev>i");
                                        if (n != 0) {
                                            forward.onclick = function () {
                                                n--;
                                                songname.innerHTML = e[n];
                                                author.innerHTML = f[n];
                                                m[0].src = url[n];
                                                m[0].play();
                                            }
                                        }

                                        //下一首
                                        var next = document.querySelector('.navigation>button#next>i');
                                        next.onclick = function () {
                                            n++;
                                            songname.innerHTML = e[n];
                                            author.innerHTML = f[n];
                                            m[0].src = url[n];
                                            m[0].play();
                                        }

                                        //播放器
                                        var btn = document.querySelector('button#play');
                                        btn.onclick = function () {
                                            var audio = document.querySelector('audio');
                                            if (audio.paused) {
                                                audio.play();
                                            } else {
                                                audio.pause();
                                            }
                                        }
                                        var audio = document.querySelector('audio');
                                        audio.volume
                                    }
                                }
                                xhr8.send();
                            }





                        }
                    }
                    xhr7.send();
                }
            }
        }
        xhr4.send();


        //每日歌曲
        var xhr5 = new XMLHttpRequest();
        // xhrFields: { withCredentials: true }
        xhr5.open("get", "http://localhost:3000/recommend/songs?cookie=" + x, true);
        xhr5.onreadystatechange = function () {
            if (xhr5.readyState == 4 && xhr5.status == 200) {
                var text = xhr5.responseText;
                var a = JSON.parse(text);
                console.log(a);
            }
        }
        xhr5.send();


        //精品歌单
        var xhr3 = new XMLHttpRequest();
        xhr3.open("get", "http://localhost:3000/top/playlist/highquality", true);
        xhr3.onreadystatechange = function () {
            if (xhr3.readyState == 4 && xhr3.status == 200) {
                var text = xhr3.responseText;
                var a = JSON.parse(text);
                console.log(a);


                //封面img
                var s1 = document.querySelector('.excellentbox>img');
                s1.src = a.playlists[0].coverImgUrl;
                var s2 = document.querySelectorAll('.excellentbox>div>span');
                s2[0].innerHTML = a.playlists[0].name;
                s2[1].innerHTML = a.playlists[0].copywriter;
            }

        }
        xhr3.send();


        //全部歌单
        var xhr2 = new XMLHttpRequest();
        xhr2.open("get", "http://localhost:3000/top/playlist", true);
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState == 4 && xhr2.status == 200) {
                var text = xhr2.responseText;
                var a = JSON.parse(text);
                console.log(a);


                var c = a.playlists;


                //歌单外部描述
                var s2 = document.querySelectorAll('.songlist-all>div>i>span:nth-of-type(2)');

                console.log(s2);
                for (var n = 0; n <= 27; n++) {
                    s2[n].innerHTML = c[n].name;
                    console.log(s2[n]);
                }



                var s3 = document.querySelectorAll('.songlist-all>img');
                console.log(s3);
                for (var n = 0; n <= 27; n++) {
                    var h = a.playlists[n].id;
                    console.log(h);
                    //歌单详细信息(歌单封面)
                    var xhr7 = new XMLHttpRequest();
                    xhr7.open("get", "http://localhost:3000/playlist/detail?id=" + h + "&cookie=" + x, false);
                    xhr7.onreadystatechange = function () {
                        if (xhr7.readyState == 4 && xhr7.status == 200) {
                            var text = xhr7.responseText;
                            var a = JSON.parse(text);
                            console.log(a);




                            //封面img
                            var s3 = document.querySelectorAll('.songlist-all>img');
                            console.log(s3);
                            s3[n].src = a.playlist.coverImgUrl;
                            console.log(s3[n].src);


                            //封面的点击事件
                            s3[n].onclick = function () {

                                //跳到歌单页面内
                                down3.style.zIndex = 0;
                                up.style.zIndex = 0;
                                songlistdetail.style.zIndex = 1;


                                //修改歌单
                                var songlistDetails = document.querySelector('.songlistDetails>.details>img');
                                songlistDetails.src = a.playlist.coverImgUrl;
                                var title = document.querySelector('.songlistDetails>.details>.detail>.detail1>.title');
                                title.innerHTML = a.playlist.name;
                                var creatorId = document.querySelector('.songlistDetails>.details>.detail>.detail2>span:nth-of-type(1)');
                                creatorId.innerHTML = "2017-3-14";
                                var collection = document.querySelectorAll('.detail3>button>span');
                                collection[0].innerHTML = a.playlist.subscribedCount;
                                if (a.playlist.subscribedCount > 10000) {
                                    a.playlist.subscribedCount = (a.playlist.subscribedCount - a.playlist.subscribedCount % 10000) / 10000 + "万";
                                }
                                collection[1].innerHTML = a.playlist.shareCount;
                                var label = document.querySelector('.detail4>span');
                                label.innerHTML = label.innerHTML = a.playlist.tags[0];
                                for (var n = 1; n < a.playlist.tags.length; n++) {
                                    label.innerHTML += "/" + a.playlist.tags[n];
                                }
                                var songsnum = document.querySelector('.detail5>span:nth-of-type(1)');
                                songsnum.innerHTML = label.innerHTML = a.playlist.tracks.length;
                                var playCount = document.querySelector('.detail5>span:nth-of-type(2)');
                                playCount.innerHTML = a.playlist.playCount;
                                if (a.playlist.playCount > 10000) {
                                    a.playlist.playCount = (a.playlist.playCount % 10000) / 10000 + "万";
                                }
                                var description = document.querySelector('.detail6>span');
                                description.innerHTML = a.playlist.description;



                                //播放全部开始播放
                                var start = document.querySelector('.detail3>button');
                                start.onclick = function () {
                                    //获取歌曲id
                                    var b = a.playlist.tracks[0].id;
                                    for (var s = 1; s < a.playlist.tracks.length; s++) {
                                        b += "," + a.playlist.tracks[s].id;
                                        console.log(b);
                                    }


                                    //存储歌曲名字和作者
                                    var e = [];
                                    var f = [];
                                    for (var n = 0; n < a.playlist.tracks.length; n++) {
                                        var e = a.playlist.tracks[n].name;
                                        var f = a.playlist.tracks[n].ar[0].name;
                                    }



                                    //歌曲url
                                    var xhr8 = new XMLHttpRequest();
                                    xhr8.open("get", "http://localhost:3000/song/url?id=" + b, false);
                                    xhr8.onreadystatechange = function () {
                                        if (xhr8.readyState == 4 && xhr8.status == 200) {
                                            var text = xhr8.responseText;
                                            var a = JSON.parse(text);
                                            console.log(a);


                                            //存储url
                                            var url = [];
                                            for (var n = 0; n < a.data.length; n++) {
                                                url[n] = a.data[n].url;
                                            }
                                            console.log(url);

                                            var m = document.getElementsByTagName('audio');
                                            var m = document.getElementsByTagName('audio');
                                            var songname = document.querySelector('#songname>span');
                                            var author = document.querySelector('#author');
                                            var musicImg = document.querySelector('.music-img');

                                            console.log(m[0]);
                                            //默认播放第一首歌
                                            n = 0;
                                            songname.innerHTML = e[n];
                                            author.innerHTML = f[n];
                                            m[0].src = url[n];
                                            m[0].play;
                                            console.log(m[0].src);

                                            //上一首

                                            var forward = document.querySelector(".navigation>button#prev>i");
                                            forward.onclick = function () {
                                                if (n != 0) {
                                                    n--;
                                                    songname.innerHTML = e[n];
                                                    author.innerHTML = f[n];
                                                    console.log(n);
                                                    m[0].src = url[n];
                                                    m[0].play();
                                                }
                                            }


                                            //下一首
                                            var next = document.querySelector('.navigation>button#next>i');
                                            next.onclick = function () {
                                                n++;
                                                songname.innerHTML = e[n];
                                                author.innerHTML = f[n];
                                                console.log(n);
                                                m[0].src = url[n];
                                                m[0].play();
                                            }

                                            //播放器
                                            var btn = document.querySelector('button#play');
                                            btn.onclick = function () {
                                                var audio = document.getElementsByTagName('audio')[0];
                                                if (audio.paused) {
                                                    audio.play();
                                                } else {
                                                    audio.pause();
                                                }
                                            }
                                            var audio = document.querySelector('audio');
                                            audio.volume
                                        }
                                    }
                                    xhr8.send();
                                }


                                //歌单内回退
                                toLeft.onclick = function () {
                                    down3.style.zIndex = 1;
                                    down1.style.zIndex = 0;
                                    up.style.zIndex = 1;
                                    songlistdetail.style.zIndex = 0;
                                }
                            }


                            //播放量
                            var s4 = document.querySelectorAll('.songlist-all>div>span');
                            s4[n].innerHTML = a.playlist.playCount;
                            if (s4[n].innerHTML > 10000) {
                                s4[n].innerHTML = (s4[n].innerHTML - s4[n].innerHTML % 10000) / 10000 + "万";
                            }

                            //用户id
                            var s5 = document.querySelectorAll('.songlist-all>div>i>span:nth-of-type(1)');
                            s5[n].innerHTML = a.playlist.creator.nickname;
                            console.log(s5[n].innerHTML);



                        }
                    }
                    xhr7.send();
                }
            }
        }
        xhr2.send();



        //down1和down3点击切换
        toDown1.onclick = function () {
            down1.style.zIndex = 1;
            down3.style.zIndex = 0;
            up.style.zIndex = 1;
            songlistdetail.style.zIndex = 0;
        }
        toDown3.onclick = function () {
            down3.style.zIndex = 1;
            down1.style.zIndex = 0;
            up.style.zIndex = 1;
            songlistdetail.style.zIndex = 0;
        }



    }


}
xhr.send();



