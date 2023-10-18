'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function WeatherCard() {

    const [data, setData] = useState([]);
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        if (data) {
            getData();
            getCurrentTime();
        }
    }, [data?.location?.localtime]);


    setTimeout(() => {
        getCurrentTime();
    }, 60000);

    function getData() {

        axios.get('http://api.weatherapi.com/v1/current.json?key=a1f50718791342e2896151655231810&q=nagpur&aqi=no').then((res) => {
            setData(res.data);
        })
    }

    function getCurrentTime() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0'); 
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const date = `${day}-${month}-${year}`;
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeNow = `${hours}:${minutes}`;
        setTime(timeNow);
        setDate(date);
    }


    return (
        <div className="container w-full h-full p-5 items-center justify-center">
            <h1 className="tex-3xl font-semibold">{data?.location?.name} , {data?.location?.region} </h1>
            <h1 className="text-3xl my-4 font-semibold">{date}</h1>
            <h1 className="text-4xl my-4 font-semibold">{time}</h1>
            <img className='w-32 h-32 mx-auto' src={data?.current?.condition?.icon} alt="" />
            <h1 className="text-2xl text-center font-semibold mb-3">Misty</h1>

            <div className='flex flex-row gap-9 w-fit mx-auto'>
                <h1 className="text-3xl text-center font-semibold">{data?.current?.temp_c}°C</h1>
                <h1 className="text-3xl text-center font-semibold">{data?.current?.temp_f}°F</h1>
            </div>
        </div>
    )
}
