var recommend=document.querySelector('.headerTwo>div:nth-child(1)>span#recommend')
var rank=document.querySelector('.headerTwo>div:nth-child(2)>span#rank')

recommend.onclick=function(){
    recommend.style.color='greenyellow'
    recommend.style.borderbottom="2px solid greenyellow"
    rank.style.color='rgb(153,165,194)'
    rank.style.borderBottom="2px solid white"



    //按推荐切换推荐页面
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

    //删除掉排行界面的旧节点
    var rankIn=document.querySelector('.rank')
    var deleting1=document.querySelectorAll(".rank>div")
    console.log(deleting1.length)
    rankIn.innerHTML=""




    //删除掉搜索界面的旧节点
    var searchcontent=document.querySelector('.searchcontent')
    var deleting=document.querySelectorAll('.searchcontent>div')
    const m=deleting.length;
    for(var a=0;a<m;a++){
        searchcontent.firstElementChild.remove()
    }

    //删除掉热门搜索旧的节点
    var hotcontent=document.querySelector('.searchIn>.hotcontent')
    hotcontent.innerHTML=""

    
}

rank.onclick=function(){
    rank.style.color='greenyellow'
    rank.style.borderBottom="2px solid greenyellow"
    recommend.style.color='rgb(153,165,194)'
    recommend.style.borderbottom="2px solid white"


    //点击排行切换页面
    var songlist=document.querySelectorAll(".songlist")
    var zone=document.querySelector('.zone')
    songlist[0].style.zIndex=0
    songlist[1].style.zIndex=0
    zone.style.zIndex=0
    songlist[0].style.position='absolute'
    songlist[1].style.position='absolute'
    zone.style.position='absolute'

    var searchIn=document.querySelector('.searchIn')
    searchIn.style.position='absolute'
    searchIn.style.zIndex=0


    //删除掉排行界面的旧节点
    var rankIn=document.querySelector('.rank')
    var deleting1=document.querySelectorAll(".rank>div")
    console.log(deleting1.length)
    rankIn.innerHTML=""




    //删除掉搜索界面的旧节点
    var searchcontent=document.querySelector('.searchcontent')
    var deleting=document.querySelectorAll('.searchcontent>div')
    const m=deleting.length;
    for(var a=0;a<m;a++){
        searchcontent.firstElementChild.remove()
    }

    //删除掉热门搜索旧的节点
    var hotcontent=document.querySelector('.searchIn>.hotcontent')
    hotcontent.innerHTML=""



    ajax.get('http://124.221.249.219:8000/api/ranking',function(response){
        console.log(eval(response))
        response=eval(response)
        for(var a=0;a<response.length;a++){
            var div=document.createElement('div')
            var span0=document.createElement('div')
            var span1=document.createElement('div')
            var span2=document.createElement('div')
            var span3=document.createElement('div')
            var image=document.createElement('img')
            var bag=document.createElement('div')
            div.appendChild(bag)
            bag.appendChild(span0)
            bag.appendChild(span1)
            bag.appendChild(span2)
            bag.appendChild(span3)
            div.appendChild(image)
            var rankIn=document.querySelector('.rank')
            rankIn.appendChild(div)
            span0.innerHTML=response[a].title
            span1.innerHTML=response[a].top3[0].title
            span2.innerHTML=response[a].top3[1].title
            span3.innerHTML=response[a].top3[2].title
            image.src=response[a].cover
        }
    })
    var rankIn=document.querySelector('.rank')
    rankIn.style.position='relative'
    rankIn.style.left="20px"
    rankIn.style.zIndex=100
}

