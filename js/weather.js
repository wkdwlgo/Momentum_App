
const api='e067c23109efc86fc64a24740ecc1c55';

function onGeoOK(position){
    const lat=position.coords.latitude;
    const lng=position.coords.longitude;
    console.log("you live in",lat, lng);
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const nameContainer=document.querySelector("#weather span:nth-child(1)");
        nameContainer.innerText=data.name;
        const weatherContainer=document.querySelector("#weather span:nth-child(2)");
        weatherContainer.innerText=data.weather[0].main;
        const tempContainer=document.querySelector("#weather span:nth-child(3)");
        tempContainer.innerText=` ${data.main.temp}°C`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);