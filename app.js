let url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
let url2 = "&appid=23d0857209429773e58dbceb9d46ab20";

let input = document.querySelector('.searchBox');
let btn = document.querySelector('.fa-magnifying-glass');

let weather = document.querySelector('.weather');


let temp = document.querySelector('.temperature');

let city = document.querySelector('.city');

let statusImg = document.querySelector('.status');

let humidity = document.querySelector('.heading1-1');

let wind = document.querySelector('.heading2-1');

btn.addEventListener('click', async () => {
    let val = input.value;
    input.value = "";
    let url = `${url1}${val}${url2}`;

    fetch(url).then(async (response) => {
        if (response.ok != true)
            alert("enter valid city");
        else {
            let data = await response.json();
            console.log(data);
            let temperature = Math.floor(data.main.temp - 273);
            console.log(temperature);
            temp.innerHTML = `${temperature}&deg`;

            city.innerHTML = `${data.name}`

            humidity.innerHTML = `${data.main.humidity}%`
            wind.innerHTML = `${data.wind.speed}km/hr`

            console.log(data.weather[0].main);



            if (data.weather[0].main === 'Mist' || data.weather[0].main === "Fog") {
                statusImg.innerHTML = "<img src='images/mist.png'>"
                console.log("image changed");
            }
            else if (data.weather[0].main === 'Rain') {
                statusImg.innerHTML = "<img src='images/rain.png'>"
                console.log("image changed");
            }
            else if (data.weather[0].main === 'Clear') {
                statusImg.innerHTML = "<img src='images/clear.png'>"
                console.log("image changed");
            }
            else if (data.weather[0].main === 'Drizzle') {
                statusImg.innerHTML = "<img src='images/drizzle.png'>"
                console.log("image changed");
            }
            else if (data.weather[0].main === 'Clouds') {
                statusImg.innerHTML = "<img src='images/clouds.png'>"
                console.log("image changed");
            }

            weather.classList.remove('hidden');

            // localStorage.setItem('weather')
        }
    })

});

window.addEventListener('keydown', async (e) => {
    if (e.key == "Enter") {
        let val = input.value;
        input.value = "";
        let url = `${url1}${val}${url2}`;

        fetch(url).then(async (response) => {
            if (response.ok != true)
                alert("enter valid city");
            else {
                let data = await response.json();
                console.log(data);
                let temperature = Math.floor(data.main.temp - 273);
                console.log(temperature);
                temp.innerHTML = `${temperature}&deg`;

                city.innerHTML = `${data.name}`

                humidity.innerHTML = `${data.main.humidity}%`
                wind.innerHTML = `${data.wind.speed}km/hr`

                console.log(data.weather[0].main);



                if (data.weather[0].main === 'Mist' || data.weather[0].main === "Fog") {
                    statusImg.innerHTML = "<img src='images/mist.png'>"
                    console.log("image changed");
                }
                else if (data.weather[0].main === 'Rain') {
                    statusImg.innerHTML = "<img src='images/rain.png'>"
                    console.log("image changed");
                }
                else if (data.weather[0].main === 'Clear') {
                    statusImg.innerHTML = "<img src='images/clear.png'>"
                    console.log("image changed");
                }
                else if (data.weather[0].main === 'Drizzle') {
                    statusImg.innerHTML = "<img src='images/drizzle.png'>"
                    console.log("image changed");
                }
                else if (data.weather[0].main === 'Clouds') {
                    statusImg.innerHTML = "<img src='images/clouds.png'>"
                    console.log("image changed");
                }

                weather.classList.remove('hidden');

                // localStorage.setItem('weather')
            }
        })
    }
})