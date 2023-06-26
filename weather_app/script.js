const apiKey= "e49a03ef88msh636b240c3cd2c2fp180852jsn9c24f75a0b9a";
const host='open-weather13.p.rapidapi.com';
const apiURL="https://open-weather13.p.rapidapi.com/city/";
const searchBox=document.querySelector(".search_bar input");
const searchBtn=document.querySelector(".search_bar button");
const  weatherImg=document.querySelector(".image");
async function getWeather(city){
const options={
    method:'GET',
    headers:{
        'X-RapidAPI-Key':apiKey,
        'X-RapidAPI-Host':host
           }
};
const response=await fetch(apiURL+city,options);
if(response.status==500)
{
     document.querySelector(".error").style.display="block";
     document.querySelector(".toShow").style.display="none";

}
else{   
        document.querySelector(".error").style.display="none";
        document.querySelector(".toShow").style.display="block";
        const data=await response.json();
        console.log(data);
         document.querySelector(".city").innerHTML=data.name;
         document.querySelector(".temp").innerHTML=Math.round((data.main.temp-32)*(5/9))+"°C";
         document.querySelector(".wind_speed").innerHTML=data.wind.speed+"km/hr";
         document.querySelector(".humidity_value").innerHTML=data.main.humidity+"%";

         if(data.weather[0].main=='Clouds')
         weatherImg.src="clouds.png";
         else if(data.weather[0].main=='Rain')
         weatherImg.src="rain.png";
         else if(data.weather[0].main=="Snow")
         weatherImg.src="snow.png";
         else if(data.weather[0].main=="Clear")
         weatherImg.src="clear.png";
         else if(data.weather[0].main=="Smoke")
         weatherImg.src="mist.png";
         else if(data.weather[0].main=="Drizzle")
         weatherImg.src="drizzle.png";
     }
}

searchBtn.addEventListener("click",()=>{
    getWeather(searchBox.value);
})


