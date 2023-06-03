const clock=document.querySelector("h2#clock");

//clock.innerText="lolo";

function getClock()
{
    const date= new Date();
    clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    

}
getClock();
setInterval(getClock,1000);