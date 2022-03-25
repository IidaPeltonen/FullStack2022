/* Iida Peltonen 2022 */

import axios from "axios";
import {useState, useEffect} from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = '5cd0dcc54092225f0b82e737ea5642ba';

export default function Weather({lat, lon}) {
    const [temp, setTemp] = useState('0');
    const [speed, setSpeed] = useState('0');
    const [direction, setDirection] = useState('0');
    const [description, setDescription] = useState('0');
    const [icon, setIcon] = useState('0');

    useEffect(() => {
        const address = API_URL + 
        'lat=' + lat +
        '&lon=' + lon +
        '&units=metric' +
        '&lang=fi' +
        '&appid=' + API_KEY
        ;

        axios.get(address)
        .then((response) => {
            setTemp(response.data.main.temp);
            setSpeed(response.data.wind.speed);
            setDirection(response.data.wind.deg);
            setDescription(response.data.weather[0].description);
            setIcon(ICON_URL + response.data.weather[0].icon + '@2x.png');
        }).catch (error => {
            alert(error);
        });
    }, [])

    return (
        <>
            <p>Lämpötila: {temp} C&#176;</p>
            <img src = {icon} alt=""/>
            <p>Tuuli: {speed} m/s {direction} suuntaan</p>
            <p>Keli on siis {description}</p>
            
        </>
    )
}