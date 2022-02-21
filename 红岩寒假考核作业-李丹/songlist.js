//获取歌曲id
var b = a.playlist.tracks[0].id;
for (var s = 1; s < a.playlist.tracks.length; s++) {
    b += "," + a.playlist.tracks[s].id;
    console.log(b);
}

//歌曲url
var xhr8 = new XMLHttpRequest();
xhr8.open("get", "http://localhost:3000/song/url?id=" + b, false);
xhr8.onreadystatechange = function () {
    if (xhr8.readyState == 4 && xhr8.status == 200) {
        var text = xhr8.responseText;
        var a = JSON.parse(text);
        console.log(a);


        var url = [];
        for (var n = 0; n < a.data.length; n++) {
            url[n] = a.data[n].url;
        }
        console.log(url);

        var m = document.getElementsByTagName('audio');
        console.log(m);
        //默认播放第一首歌
        n = 0;
        m[0].src = url[n];
        console.log(m[0].src);

        //上一首

        var forward = document.querySelector(".navigation>button#prev>i");
        forward.onclick = function () {
            if (n != 0) {
                n--;
                console.log(n);
                m[0].src = url[n];
                m[0].play();
            }
        }


        //下一首
        var next = document.querySelector('.navigation>button#next>i');
        next.onclick = function () {
            n++;
            console.log(n);
            m[0].src = url[n];
            m[0].play();
        }
    }
}
xhr8.send();