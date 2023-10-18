import CardFeed from '@/components/CardFeed'
import FeedNavs from '@/components/FeedNavs'
import Hilights from '@/components/Hilights'
import WeatherCard from '@/components/WeatherCard'
import React from 'react'

export default function page() {
  return (
    <>

      <div className="container flex flex-col md:flex-row w-full my-14 rounded-lg h-5/6 p-5">

        <div className="container w-full md:p-5 md:w-5/12">
          <WeatherCard />
        </div>

        <div className="container w-full md:block hidden p-5 md:w-7/12">
          <Hilights />
        </div>

      </div>

      <div className="container mx-1 w-auto my-5 overflow-hidden h-fit md:overflow-x-auto bg-black rounded-3xl md:p-10 p-3">
         
         <h1 className="text-5xl my-6 mb-14 text-center text-white font-bold">Todays Highlights</h1>

        <FeedNavs />
        <CardFeed />

      </div>

    </>
  )
}
