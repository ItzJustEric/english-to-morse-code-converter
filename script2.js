
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fa30f2837cmshab533ead272d05ap1c57bcjsn8d181ef68fbf',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};
async function fetchWeather(country) {
    const url = `https://open-weather13.p.rapidapi.com/city/${country}/EN`;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const country = result.sys.country;
        const temp = result.main.temp;
        console.log(`country:${country}`);
        console.log(`temperature:${temp}`);
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();