
   var chengshi = document.querySelector('.chengshi');
    var city1=chengshi.innerHTML

    // 中间区域
    var texttem =document.querySelector("#text_tem")
    var textwea =document.querySelector("#text_wea")
    var textwin =document.querySelector("#text_win")
    var  temperature =document.querySelector(".temperature")
    var   temperature1  =document.querySelector(".tempera1")
    var  weaa=document.querySelector('.weaa')
    var  weab =document.querySelector('.weab ')
    let  datas=document.querySelectorAll('.date')
    let  weathers =document.querySelectorAll(".weather1")
    let wind =document.querySelectorAll('.wind')
    let wind0 =document.querySelectorAll(".wind0")


function  ajx(){
    //实例化XMLHttpRequest对象
    const xhr = new XMLHttpRequest()
    //初始化一个get请求
    xhr.open("get", "https://www.tianqiapi.com/free/week?appid=21925562&appsecret=mjNsq4qq&city="+city1, true)
    //接收返回值
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
          const res = JSON.parse(xhr.responseText)
          console.log(res)
          console.log("请求成功")
          texttem.innerHTML=res.data[1].tem+'&#176'
          textwea.innerHTML=res.data[1].wea
         
          textwin.innerHTML=res.data[1].win+res.data[1].win_speed
          temperature.innerHTML=res.data[1].tem_day+'/'+res.data[1].tem_night+'°'
          temperature1.innerHTML=res.data[2].tem_day+'/'+res.data[2].tem_night+'°'
          weaa.innerHTML=res.data[1].wea
          weab.innerHTML=res.data[2].wea
          for( let i=0;i<datas.length;i++){
            let  w=res.data[i].wea
            datas[i].innerHTML=res.data[i].date
            if(w.indexOf('转')!=-1){
              let m=res.data[i].wea.split('转')
              console.log(m+i)
              weathers[i*2].innerHTML=m[0]
              console.log(weathers[i].innerHTML)
              weathers[i*2+1].innerHTML=m[1]
              console.log(weathers[i+1].innerHTML)
            }
            else{
              weathers[i*2].innerHTML=w

              weathers[i*2+1].innerHTML=w
              
            }
            wind[i*2].innerHTML=res.data[i].win
            wind0[i].innerHTML=res.data[i].win_speed
          }
        

         } else {
          console.log("请求失败")
        }
      }
    }
    //发送请求
    xhr.send()
}
ajx()
   