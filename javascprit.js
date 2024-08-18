const apikey="3a5d953b8a9c890cdcb0fe099f054313";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        const weathericon=document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response=await fetch(apiurl +city+ `&appid=${apikey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                 var data=await response.json();
                 document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
            document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
            if(data.weather[0].main == "Clouds"){
                weathericon.src="https://cdn1.iconfinder.com/data/icons/hawcons/32/700118-icon-20-clouds-1024.png";
            }
            else if(data.weather[0].main == "Clear"){
                weathericon.src="https://tse2.mm.bing.net/th?id=OIP.957We5Hc5SV7yDsh4ckMGQHaHa&pid=Api&P=0&h=220";
            }
            else if(data.weather[0].main == "Rain"){
                weathericon.src="hhttps://tse3.mm.bing.net/th?id=OIP.IKUnuKlxdjmUM9fJmYJLVgHaHa&pid=Api&P=0&h=220";
            }
            else if(data.weather[0].main == "Drizzle"){
                weathericon.src="https://cdn1.iconfinder.com/data/icons/weather-flat-8/50/Weather_Flat-29-1024.png";
            }
            else if(data.weather[0].main == "Mist"){
                weathericon.src="https://cdn-icons-png.flaticon.com/512/4005/4005901.png";
            }
            else if(data.weather[0].main == "Haze"){
                weathericon.src="https://cdn1.iconfinder.com/data/icons/weather-471/128/HAZE-1024.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }
    }
searchbtn.addEventListener("click",()=>{
         checkWeather(searchbox.value);
})