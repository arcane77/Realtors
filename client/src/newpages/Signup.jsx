import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Oauth from '../../components/Oauth';
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice.js';



export default function Signup() {

    const [formData , setFormData]= useState({});
    const [loading , setLoading]= useState(false);
    const [error ,setError]= useState(null);
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
         setLoading(true);
          const res= await fetch('api/auth/signup',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),

          });
          const data= await res.json();
          console.log(data);

          if(data.success===false){
            setLoading(false);
            setError(data.message);
            return;
            
          }
          setLoading(false);
          setError(null);
          dispatch(signInSuccess(data));
          navigate('/');
      }
      catch(error){
          setLoading(false);
          setError(error.message);

      }


    };


  return (
    <div className='p-3 mt-14 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 text-black'>Sign Up</h1>
      <div className='rounded-xl border border-slate-300 p-7' >
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='username'
          className='p-3 rounded-md border border-slate-300 bg-white text-black'
          id='username'
          onChange={handlechange}
         
        />
        <input
          type='email'
          placeholder='email'
          className='p-3 rounded-md border border-slate-300 bg-white text-black'
          id='email'
          onChange={handlechange}
          
        />
        <input
          type='password'
          placeholder='password'
          className='p-3 rounded-md border border-slate-300 bg-white text-black'
          id='password'
          onChange={handlechange}
          
        />

        <button
          disabled={loading}
          className='bg-[#4977db] text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading..':' Sign UP'}
        </button>
        <Oauth/>
      </form>
      </div>
      <div className='flex gap-2 mt-5'>
        <p className='text-black'>Have an account?</p>
        <Link to ={'/sign-in'}>
        
          <span className='text-blue-700'>Sign in</span>
          </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}

    </div>
  );
}
 
