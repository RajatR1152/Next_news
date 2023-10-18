'use client'
import React, { useEffect, useState, useContext } from 'react'
import Card from './Card'
import { Context } from '@/context/Context'
import axios from 'axios';
import Spinner from './Spinner';

export default function CardFeed() {

    const { category, count, setCount, loading, setLoading } = useContext(Context);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(category);
    }, [count, setCount]);

    async function getData(category) {
        const options = {
            method: 'GET',
            url: 'https://news-api14.p.rapidapi.com/top-headlines',
            params: {
                country: 'in',
                language: 'en',
                pageSize: '100',
                sortBy: 'timestamp',
                category: category,
            },
            headers: {
                'X-RapidAPI-Key': 'b1bd42f3damsh767cade1e4602cbp1b8a1ajsn4109bbb50907',
                'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setData(response.data.articles);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div className="h-full flex flex-col justify-center items-center md:flex-row w-full gap-5 overflow-x-auto rounded-lg">

            {
                data?.map((d, i) => {
                    return <Card key={i} isLoading={loading} data={d} />
                })
            }

        </div>
    )
}
