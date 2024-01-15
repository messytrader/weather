const Api_key="ac5207fd4f37ec48425902abcd89e489";
const Base_url="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
const cityval = document.querySelector(".search input")
const search_here = document.querySelector(".search button")
const weather_icon=document.querySelector(".weather_icon")
const searchcity =document.querySelector(".cities p") 
// let cityinput="Delhi";
async function checkweather(city){
    const response = await fetch(Base_url + city + `&appid=${Api_key}`);
    var data =await response.json()

    console.log(data)



document.querySelector(".city").innerHTML=data.name;
document.querySelector(".tempo").innerHTML=data.main.temp  + " °C ";
document.querySelector(".humid").innerHTML=data.main.humidity + " %";
document.querySelector(".press").innerHTML=data.main.pressure  + " ''Hg ";
document.querySelector(".windy").innerHTML=data.wind.speed  +  "  Km/hr";
document.querySelector(".weather").innerHTML=data.weather[0].main;

if(data.weather[0].main=="Clouds"){
    weather_icon.src="https://cdn.icon-icons.com/icons2/520/PNG/512/Weather-clouds-rain_icon-icons.com_51825.png";}
   
    else if(data.weather[0].main=="Clear")    {
        weather_icon.src="https://cdn.icon-icons.com/icons2/520/PNG/512/Weather-clouds-rain_icon-icons.com_51825.png";
    }
    else if(data.weather[0].main=="Rain")    {
        weather_icon.src="https://cdn.icon-icons.com/icons2/520/PNG/512/Weather-clouds-rain_icon-icons.com_51825.png";
    }
    else if(data.weather[0].main=="Drizzle")    {
 weather_icon.src="https://cdn.icon-icons.com/icons2/520/PNG/512/Weather-clouds-rain_icon-icons.com_51825.png";
    }
    else if(data.weather[0].main=="Mist")    {
        weather_icon.src="https://cdn.icon-icons.com/icons2/520/PNG/512/Weather-clouds-rain_icon-icons.com_51825.png";
    }
    else if(data.weather[0].main=="Snow")    {
        weather_icon.src="https://cdn.icon-icons.com/icons2/520/PNG/512/Weather-clouds-rain_icon-icons.com_51825.png";
    }
   


}
// searchcity.forEach((city)=>{
//     city.addEventListener.click("click",(e)=> {
//  cityinput= e.target.innerHTML;
//  checkweather(cityval.value);
//  app.style.opacity="0";
//     });
// })
search_here.addEventListener("click",() =>{
checkweather(cityval.value);
})
// // Add multiple cloud elements
// for (let i = 0; i < 5; i++) {
//     const cloud = document.createElement('div');
//     cloud.className = 'cloud';
//     document.body.appendChild(cloud);
//   }
  
//   const snippets = document.querySelectorAll('.wind span');

// for (let i = 0; i < snippets.length; i++) {
//   snippets[i].addEventListener('mouseleave', clearTooltip);
//   snippets[i].addEventListener('blur', clearTooltip);
// }

// function showTooltip(el, msg) {
//   el.setAttribute('class', 'snippet tooltip');
//   el.setAttribute('aria-label', msg);
// }

// function clearTooltip(e) {
//   e.currentTarget.setAttribute('class', 'snippet');
//   e.currentTarget.removeAttribute('aria-label');
// }

// const clipboardSnippets = new ClipboardJS('.snippet', {
//   text: trigger => trigger.getAttribute('data-title')
// });

// clipboardSnippets.on('success', e => {
//   e.clearSelection();
//   showTooltip(e.trigger, 'Copied!');
// });

// clipboardSnippets.on('error', e => {
//   showTooltip(e.trigger, 'Copy failed!');
// });
  
