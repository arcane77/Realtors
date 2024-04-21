import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserFailure,deleteUserStart,deleteUserSuccess,signoutFailure,signoutStart,signoutSuccess } from '../redux/user/userSlice';
import { useDispatch} from 'react-redux';
import { useRef, useState, useEffect } from 'react';

export default function Profile() {

  const fileRef = useRef(null);
 // const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();














 
  const handleDeleteUser= async ()=>{

    try{
      dispatch(deleteUserStart);
      const res=await fetch(`/api/user/delete/${currentUser._id}`,{
        method:'DELETE'

      });
      const data= await res.json();
      if(data.success==false){
        dispatch(deleteUserFailure(data.message))
        return;
      }
      dispatch(deleteUserSuccess(data));
      return;

      

    }catch(error){
      dispatch(deleteUserFailure(error.message));

    }

  };

const handleSignout=async()=>{
    
    try{
    dispatch(signoutStart());
    const res= await fetch(`/api/auth/signout`);

    const data= await res.json();
    if(data.success===false){
      dispatch(signoutFailure(data.message))
      return;
    }
    dispatch(signoutSuccess(data));
    return;


  }catch(error){
    dispatch(signoutFailure(error.message));
    return;
  }
};




  const {currentUser}= useSelector(state=>state.user)

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();
      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };








  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      setUserListings((prev) =>
        prev.filter((listing) => listing._id !== listingId)
      );
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 text-white'>Profile</h1>
      <form className='flex flex-col gap-4'>
        
        <img
          
          src={currentUser.avatar}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        
        <input
          type='text'
          placeholder='username'
          defaultValue={currentUser.username}
          id='username'
          className='p-3 rounded-md bg-[#3f3f3f] text-white'

        />
        <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='p-3 rounded-md bg-[#3f3f3f] text-white'
        
        />
        <input
          type='password'
          placeholder='password'
         
          id='password'
          className=' p-3 rounded-md bg-[#3f3f3f] text-white'
        />
       
        <Link to={"/create-listing"}
          className='bg-[#382bf0] text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
          
        >
          Create Listing
        </Link>
      </form>
      <div className='flex justify-between mt-5'>
        <span onClick={handleDeleteUser}
         
          className='text-red-700 cursor-pointer' 
        >
          Delete account
        </span>
        <span onClick={handleSignout} className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
      <button  onClick={handleShowListings}className='text-green-700 w-full'>
        Show Listings
      </button>
      <p className='text-red-700 mt-5'>
        {showListingsError ? 'Error showing listings' : ''}
      </p>

      {userListings && userListings.length > 0 && (
        <div className='flex flex-col gap-4'>
          <h1 className='text-center mt-7 text-2xl font-semibold'>
            Your Listings
          </h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className='border rounded-lg p-3 flex justify-between items-center gap-4'
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt='listing cover'
                  className='h-16 w-16 object-contain'
                />
              </Link>
              <Link
                className='text-slate-700 font-semibold  hover:underline truncate flex-1'
                to={`/listing/${listing._id}`}
              >
                <p>{listing.name}</p>
              </Link>

              <div className='flex flex-col item-center'>
                <button
                  onClick={() => handleListingDelete(listing._id)}
                  className='text-red-700 uppercase'
                >
                  Delete
                </button>
                <Link to={`/update-listing/${listing._id}`}>
                  <button className='text-green-700 uppercase'>Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
   

          </div>
      )}
   
  

