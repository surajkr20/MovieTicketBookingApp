import React from 'react';
import { assets } from "../assets/assets.js";
import { Calendar1Icon, ClockIcon, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen flex flex-col items-start justify-center gap-4
    px-6 md:px-16 lg:px-36'>
      <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20'/>

      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Guardians <br/> of the Galaxy</h1>

      <div className='flex items-center justify-center text-sm gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fic</span>
        <div className='flex items-center gap-1'>
          <Calendar1Icon className='w-4 h-4'/> 2018
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4 h-4'/> 2h 8m
        </div>
      </div>

      <p className='text-gray-300 max-w-md'>
        In a post-apocalyptic world where cities ride on wheels and consume each other to survive,
         two people meet in London and try to stop a conspiracy.
      </p>

      <button onClick={()=>navigate("movies")} className='flex items-center gap-1 px-5 py-3 text-sm bg-primary hover:bg-primary-dull
      transition rounded-full font-medium cursor-pointer'>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </button>
    </div>
  )
}

export default HeroSection