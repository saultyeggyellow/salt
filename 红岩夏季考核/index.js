ajax.get('http://124.221.249.219:8000/api/recommendations',function(response){
    response=JSON.parse(response)
    console.log(response)


    //官方歌单
    var offical=document.querySelector('#official>.image')
    console.log(offical.style)
    
    var img0=document.createElement("img")
    var img1=document.createElement("img")
    var img2=document.createElement("img")
    var img3=document.createElement("img")
    var img4=document.createElement("img")
    var img5=document.createElement("img")

    img0.src=response.offical[0].cover
    img1.src=response.offical[1].cover
    img2.src=response.offical[2].cover
    img3.src=response.offical[3].cover
    img4.src=response.offical[4].cover
    img5.src=response.offical[5].cover

    offical.appendChild(img0)
    offical.appendChild(img1)
    offical.appendChild(img2)
    offical.appendChild(img3)
    offical.appendChild(img4)
    offical.appendChild(img5)


    //达人歌单
    var tatsujin=document.querySelector('#tatsujin>.image')
    console.log(tatsujin.style)

    var img6=document.createElement("img")
    var img7=document.createElement("img")
    var img8=document.createElement("img")
    var img9=document.createElement("img")
    var img10=document.createElement("img")
    var img11=document.createElement("img")

    img6.src=response.tatsujin[0].cover
    img7.src=response.tatsujin[1].cover
    img8.src=response.tatsujin[2].cover
    img9.src=response.tatsujin[3].cover
    img10.src=response.tatsujin[4].cover
    img11.src=response.tatsujin[5].cover

    tatsujin.appendChild(img6)
    tatsujin.appendChild(img7)
    tatsujin.appendChild(img8)
    tatsujin.appendChild(img9)
    tatsujin.appendChild(img10)
    tatsujin.appendChild(img11)



    //专区
    var column=document.querySelector('.zone>.image')
    console.log(column.style)

    var img12=document.createElement("img")
    var img13=document.createElement("img")
    var img14=document.createElement("img")
    var img15=document.createElement("img")
    var img16=document.createElement("img")
    var img17=document.createElement("img")
    var img18=document.createElement("img")
    var img19=document.createElement("img")
    var img20=document.createElement("img")

    img12.src=response.column[0].cover
    img13.src=response.column[1].cover
    img14.src=response.column[2].cover
    img15.src=response.column[3].cover
    img16.src=response.column[4].cover
    img17.src=response.column[5].cover
    img18.src=response.column[6].cover
    img19.src=response.column[7].cover
    img20.src=response.column[8].cover

    column.appendChild(img12)
    column.appendChild(img13)
    column.appendChild(img14)
    column.appendChild(img15)
    column.appendChild(img16)
    column.appendChild(img17)
    column.appendChild(img16)
    column.appendChild(img19)
    column.appendChild(img20)



    // //官方歌单的封面src
    // response.offical[0].cover
    // response.offical[1].cover
    // response.offical[2].cover
    // response.offical[3].cover
    // response.offical[4].cover
    // response.offical[5].cover
    // //官方歌单下面描述内容
    // response.offical[0].title
    // response.offical[0].views

    // response.offical[1].title
    // response.offical[1].views

    // response.offical[2].title
    // response.offical[2].views

    // response.offical[3].title
    // response.offical[3].views

    // response.offical[4].title
    // response.offical[4].views

    // response.offical[5].title
    // response.offical[5].views



    // //达人歌单的封面src
    // response.tatsujin[0].cover
    // response.tatsujin[1].cover
    // response.tatsujin[2].cover
    // response.tatsujin[3].cover
    // response.tatsujin[4].cover
    // response.tatsujin[5].cover
    // //达人歌单下方描述内容
    // response.tatsujin[0].title
    // response.tatsujin[0].views

    // response.tatsujin[1].title
    // response.tatsujin[1].views

    // response.tatsujin[2].title
    // response.tatsujin[2].views

    // response.tatsujin[3].title
    // response.tatsujin[3].views

    // response.tatsujin[4].title
    // response.tatsujin[4].views

    // response.tatsujin[5].title
    // response.tatsujin[5].views



    // //专区封面src
    // column[0].background
    // column[1].background
    // column[2].background
    // column[3].background
    // column[4].background
    // column[5].background
    // column[6].background
    // column[7].background
    // column[8].background
    // //专区封面左下角图标src
    // column[0].icon
    // column[1].icon
    // column[2].icon
    // column[3].icon
    // column[4].icon
    // column[5].icon
    // column[6].icon
    // column[7].icon
    // column[8].icon
    // //专区分类名称
    // column[0].title
    // column[1].title
    // column[2].title
    // column[3].title
    // column[4].title
    // column[5].title
    // column[6].title
    // column[7].title
    // column[8].title
    // //专区下面描述
    // column[0].description
    // column[1].description
    // column[2].description
    // column[3].description
    // column[4].description
    // column[5].description
    // column[6].description
    // column[7].description
    // column[8].description



})





