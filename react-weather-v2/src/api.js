import axios from 'axios';

const WEATHER_API_URL = '';

export async function translateIp(){
    try {
        const response = await axios.get(`https://freegeoip.app/json/`);
        const latLong = [response.data.latitude, response.data.longitude];
        return latLong;
    } catch (error) {
        return '';
    }
}

export let makeWeatherRequest = async (lat,long) => {
    console.log('dewd')
    return await axios.get('https://api.openweathermap.org/data/2.5/onecall?', {
        params: {
            lat: String(lat),
            lon: String(long),
            appid: WEATHER_API_URL
        }
      })
}