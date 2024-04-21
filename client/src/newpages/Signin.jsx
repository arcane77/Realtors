import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {signInStart } from '../redux/user/userSlice.js';
import { signInFailure } from '../redux/user/userSlice.js';
import { signInSuccess } from '../redux/user/userSlice.js';
import Oauth from '../../components/Oauth';

export default function Signin() {

    const [formData , setFormData]= useState({});
    const { loading, error}=useSelector((state)=>state.user);

    const navigate=useNavigate();
    const dispatch= useDispatch();

    const handlechange = (e) =>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value,
      });
      console.log(formData)
    };

    const handleSubmit= async(e)=>{
      e.preventDefault();

      try{
         dispatch(signInStart());
          const res= await fetch('api/auth/signin',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),

          });
          const data= await res.json();
          console.log(data);

          if(data.success===false){
            dispatch(signInFailure(data.message));
            return;
            
          }
          dispatch(signInSuccess(data));
          navigate('/');
      }
      catch(error){
        dispatch(signInFailure(data.message));

      }


    };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 text-white'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
       
        <input
          type='email'
          placeholder='email'
          className='p-3 rounded-lg bg-[#282828] text-white'
          id='email'
          onChange={handlechange}
          
        />
        <input
          type='password'
          placeholder='password'
          className='p-3 rounded-lg bg-[#282828] text-white'
          id='password'
          onChange={handlechange}
          
        />

        <button
          disabled={loading}
          className='bg-[#382bf0] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading..':' Sign In'}

        </button>
        <Oauth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='text-white'>Dont have an account?</p>
        <Link to ={'/signup'}>
        
          <span className='text-blue-700'>Sign Up</span>
          </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}

    </div>
  );
}
 
