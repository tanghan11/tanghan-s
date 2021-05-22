
// 头部
// 获取元素
window.onload =function(){
    var h2 = document.querySelector('.h2');
    var search =document.querySelector('#search')
    var input3=document.querySelector('.input3')
    var  chengs=document.querySelectorAll('.cheng')
    var lis=document.querySelector('.liebiao')
    var input1=document.querySelector('.input1')
    
    // 注册事件

    h2.onclick = function() {
        search.style.display ='block'
    }
    input3.onclick =function(){
        search.style.display='none'
        if(input1.value!='')
        {
            h2.children[1].innerHTML=input1.value
            console.log("2")
           ajx()
            console.log("1")
            var li = document.createElement('li')
            lis.insertBefore(li,lis.children[0])
            li.innerHTML=input1.value
        }
        input1.value=''
    }
    for( let i=0; i<chengs.length;i++){
        chengs[i].onclick=function(){
                    search.style.display='none'
                    h2.children[1].innerHTML=this.innerHTML
                    ajx()
                    var li = document.createElement('li')
                    lis.insertBefore(li,lis.children[0])
            li.innerHTML=this.innerHTML
        }
    }
    var chengshi = document.querySelector('.chengshi');
    var city1=chengshi.innerHTML


































}

