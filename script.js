
const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
const dates = document.querySelector('.todayDates');
const times = document.getElementById('todayTime');
let date = new Date();


form.addEventListener('submit', function (e) {

    
    e.preventDefault();

    
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

    
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

    
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}`
        weather.innerHTML = `${weatherMain}`
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;

        
        if (weatherMain == 'Clear') {
            myWeatherContainer.style.backgroundColor = '#ec6e4c'
        }
        if (weatherMain == 'Clouds') {
            
            myWeatherContainer.style.backgroundColor = '#86d3d3'
        }
        if (weatherMain == 'Rain') {
            
            myWeatherContainer.style.backgroundColor = '#494bcf'
        }
        if (weatherMain == 'Drizzle') {
        
            myWeatherContainer.style.backgroundColor = '#8ecfcf'
        }
        if (weatherMain == 'Haze') {
            
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }

    
        const currentMonth = date.getMonth();
        switch (currentMonth) {
            case 0:
                dates.innerHTML = `${date.getDate()}, Jan`
                break;
            case 1:
                dates.innerHTML = `${date.getDate()}, Feb`
                break;
            case 2:
                dates.innerHTML = `${date.getDate()}, Mar`
                break;
            case 3:
                dates.innerHTML = `${date.getDate()}, Apr`
                break;
            case 4:
                dates.innerHTML = `${date.getDate()}, May`
                break;
            case 5:
                dates.innerHTML = `${date.getDate()}, Jun`
                break;
            case 6:
                dates.innerHTML = `${date.getDate()}, Jul`
                break;
            case 7:
                dates.innerHTML = `${date.getDate()}, Aug`
                break;
            case 8:
                dates.innerHTML = `${date.getDate()}, Sept.`
                break;
            case 9:
                dates.innerHTML = `${date.getDate()}, Oct.`
                break;
            case 10:
                dates.innerHTML = `${date.getDate()}, Nov`
                break;
            case 11:
                dates.innerHTML = `${date.getDate()}, Dec`
                break;
        }

         
        function leftInterval() {
            const left = document.getElementById('todayTime')
            let leftDate = new Date();
            let hours = leftDate.getHours();
            let minutes = leftDate.getMinutes();
            let seconds = leftDate.getSeconds();

            if (hours == 0) {
                hours = 12;
            }

            if (hours > 12) {
                hours = hours - 12;
            }
            left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`
        }
        setInterval(leftInterval, 1000);
    })
})
