const ajax={
    get(url,fn){
        const xhr=new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                fn(xhr.responseText)
            }
        }
        xhr.send()
    },
    post(url,data,fn){
        const xhr=new XMLHttpRequest()
        xhr.open('POST',url,true)
        xhr.setRequestHeader('Content-type','application/x-www-form-url')
        xhr.onreadystatechange=function(){
            if(xhr.readyState===4){
                fn(xhr.responseText)
            }
        }
        xhr.send(data)
    }
}