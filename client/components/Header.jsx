import React from 'react'

import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';


export default function Header() {
  const {currentUser}= useSelector(state=>state.user);
  const [searchTerm,setSearchTerm]=useState('');
  const navigate = useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  





  return (
    <header className='bg-[#121212] shadow-xl'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-[#FFFFFF]'>Realtors</span>
          <span className='text-[#382bf0]'>.io</span>
        </h1>
      </Link>
      <form onSubmit={handleSubmit}
        
        className='bg-[#282828] p-3 rounded-lg flex items-center'
      >
        <input
          type='text'
          placeholder='Search...'
          className='h-6  bg-[#282828] focus:outline-none w-24 sm:w-64 text-white'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          
        />
        <button>
          <FaSearch className='text-white' />
        </button>
      </form>
      <ul className='flex gap-10'>
        <Link to='/'>
          <li className='hidden sm:inline text-[#FFFFFF] hover:underline'>
            Home
          </li>
        </Link>
        <Link to='/about'>
          <li className='hidden sm:inline text-[#FFFFFF] hover:underline'>
            About
          </li>
        </Link>
        <Link to='/profile'>
          {currentUser ? (
            <img className='rounded-full h-7 w-7 object-cover' 
            src ={ currentUser.avatar}
            alt='profile'/>
          ) :(
            <li className=' text-[#FFFFFF] hover:underline'> Sign in</li>
          )}
        </Link>
      </ul>
    </div>
  </header>
);
  
}
