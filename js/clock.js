const clock=document.querySelector("h2#clock");

//clock.innerText="lolo";

function getClock()
{
    const date= new Date();
    const hours=String(date.getHours()).padStart(2,"0");//string로 형변환 pad 감싸기
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
    

}
getClock();//1초 후에 보여주는게 아니라 바로 보여주기 위해 
setInterval(getClock,1000);