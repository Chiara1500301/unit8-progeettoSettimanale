const API_KEY =
    '1e9cce88c56bd7ab9c899566a335a22a';
const getFormattedWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const data = await fetch(URL)
        .then((response) => response.json())
        .then((data) => data);
    const { weather, main: { temp, feel_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
    } = data;
    const { description, icon } = weather[0];
    return {
        description,
        icon,
        temp,
        feel_like,
        temp_min,
        temp_max,
        pressure,
        humidity,
        speed,
        country,
        name,
    };
};

export { getFormattedWeatherData };