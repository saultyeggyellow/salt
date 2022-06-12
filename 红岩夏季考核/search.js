var input=document.querySelector('.search>input')
var cancel=document.querySelector('.search>div')

//搜索框聚焦到
input.onfocus=function(){
    input.style.textAlign='left';
    input.style.width='361px';
    cancel.innerHTML="取消"

    



    //按搜索切换页面
    var songlist=document.querySelectorAll(".songlist")
    var zone=document.querySelector('.zone')

    
    
    songlist[0].style.zIndex=0
    songlist[1].style.zIndex=0
    zone.style.zIndex=0
    songlist[0].style.position='absolute'
    songlist[1].style.position='absolute'
    zone.style.position='absolute'

    var searchIn=document.querySelector('.searchIn')
    searchIn.style.zIndex=100
    searchIn.style.position='relative'

    var copyright=document.querySelector('.copyright')
    var bottom=document.querySelector('.bottom')
    copyright.style.zIndex=100
    copyright.style.position='relative'
    bottom.style.zIndex=100
    bottom.style.position='relative'

    var searchcontent=document.querySelector('.searchcontent')
    searchcontent.style.position='absolute'
    searchcontent.style.zIndex=0

    var rankIn=document.querySelector('.rank')
    rankIn.style.position='absolute'
    rankIn.style.zIndex=0

    //删除掉排行界面的旧节点
    var rankIn=document.querySelector('.rank')
    var deleting1=document.querySelectorAll(".rank>div")
    console.log(deleting1.length)
    rankIn.innerHTML=""

    //删除掉热门搜索旧的节点
    var hotcontent=document.querySelector('.searchIn>.hotcontent')
    hotcontent.innerHTML=""
    
    
    //热门搜索显示
    ajax.get('http://124.221.249.219:8000/api/hot',function(response){
        
        response=eval(response)
        console.log(response)
        var hot=document.querySelector('.hotcontent')
        for(var a=0;a<response.length;a++){
            var span=document.createElement('span')
            span.innerHTML=response[a];
            hot.appendChild(span)

        }
    })




    //判断回车键
    document.onkeydown=function(event){
        let e=event||window.event;
        if(e.keyCode==13){

            //增加搜索历史
            var span=document.createElement('span')
            var historycontent=document.querySelector('.historycontent')
            span.innerHTML=input.value
            historycontent.appendChild(span)
            var keyword=input.value

            console.log(keyword)
            console.log(typeof(keyword))
            console.log('http://124.221.249.219:8000/api/search?keyword='+keyword)
            
            

            //计时器之后显示搜索结果
            setTimeout(function(){

                //切换搜索结果页面
                var searchIn=document.querySelector('.searchIn')
                searchIn.style.position='absolute'
                searchIn.style.zIndex=0

                var searchcontent=document.querySelector('.searchcontent')
                searchcontent.style.position='relative'
                searchcontent.style.zIndex=100

                songlist[0].style.zIndex=0
                songlist[1].style.zIndex=0
                zone.style.zIndex=0
                songlist[0].style.position='absolute'
                songlist[1].style.position='absolute'
                zone.style.position='absolute'




                //删除掉搜索界面的旧节点
                var searchcontent=document.querySelector('.searchcontent')
                var deleting=document.querySelectorAll('.searchcontent>div')
                const m=deleting.length;
                for(var a=0;a<m;a++){
                    searchcontent.firstElementChild.remove()
                }


                ajax.get('http://124.221.249.219:8000/api/search?keyword='+keyword,function(response){
                    response=eval(response)
                    console.log(response)
                    for(var n=0;n<response.length;n++){
                        var div=document.createElement('div')
                        var div1=document.createElement('div')
                        var div2=document.createElement('div')
                        div.appendChild(div1)
                        div.appendChild(div2)
                        searchcontent.appendChild(div)
                        div1.innerHTML=response[n].title
                        div2.innerHTML=""
                        for(var a=0;a<response[n].artist.length;a++){
                            div2.innerHTML+=response[n].artist[a]+' ';
                        }
                    }
                })
            },1000)
        }
    }
}


//搜索框未被聚焦到
input.onblur=function(){
    input.style.textAlign='center';
    input.style.width='395px';
}

//按取消切换页面
cancel.onclick=function(){
    input.style.textAlign='center';
    input.style.width='395px';
    cancel.innerHTML=""

    var songlist=document.querySelectorAll(".songlist")
    var zone=document.querySelector('.zone')
    songlist[0].style.zIndex=100
    songlist[1].style.zIndex=100
    zone.style.zIndex=100
    songlist[0].style.position='relative'
    songlist[1].style.position='relative'
    zone.style.position='relative'

    var searchIn=document.querySelector('.searchIn')
    searchIn.style.zIndex=0
    searchIn.style.position='absolute'

    var copyright=document.querySelector('.copyright')
    var bottom=document.querySelector('.bottom')
    copyright.style.zIndex=100
    copyright.style.position='relative'
    bottom.style.zIndex=100
    bottom.style.position='relative'

    var searchcontent=document.querySelector('.searchcontent')
    searchcontent.style.position='absolute'
    searchcontent.style.zIndex=0

    //删除掉搜索界面的旧节点
    var searchcontent=document.querySelector('.searchcontent')
    var deleting=document.querySelectorAll('.searchcontent>div')
    const m=deleting.length;
    for(var a=0;a<m;a++){
        searchcontent.firstElementChild.remove()
    }
}





