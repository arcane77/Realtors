import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { FaPlus } from 'react-icons/fa';
import 'swiper/css/bundle';
import Listingitem from '../../components/Listingitem';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import sampleImage from '../newpages/bg.png'; 

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
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


  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      {/* top */}
      <div className='flex flex-col gap-8 pt-36 px-3  text-center mx-auto'>
        <h1 className='animation-slide-top text-[#282727] font-bold text-3xl lg:text-5xl'>
          Unlock The Door To Your Next <br/> <span className='text-[#8c8989]'>Perfect </span> Home
        </h1>
        <div className='animation-slide-right text-gray-400 text-xs sm:text-sm lg:text-base'>
          Realtors.io is the best place to find your next perfect investment
          
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs animation-slide-bottom sm:text-sm text-[#282727] font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>

      {/* {searchBar} */}
      <form onSubmit={handleSubmit}
        className='w-full px-3 py-10 flex justify-center items-center'
      >
        <div className='bg-white custom-shadow rounded-full flex items-center w-3/4 xl:max-w-lg lg:max-w-lg md:max-w-md'>
          <input
            type='text'
            placeholder='Search...'
            className='flex-grow pl-4 py-3 sm:py-4 bg-transparent focus:outline-none'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='p-2 mr-4 bg-[#282727] rounded-full'>
            <FaSearch className='text-white' />
          </button>
        </div>
      </form>
      

      <div className="mt-4 px-2 xl:px-16">
        <img src={sampleImage} alt="Descriptive Alt Text" className="mx-auto" /> 
      </div>
      <div id='listings-section'></div>
      {/* listing results for offer, sale and rent */}

      <div className='max-w-8xl mx-auto p-3 flex flex-col gap-8 my-10'>
  {/* Offers Section */}
  {offerListings && offerListings.length > 0 && (
    <div>
      <div className='my-3'>
        <h2 className='text-2xl mx-2 ml-4  font-semibold text-[#282727]'>Recent offers</h2>
        <Link className='text-sm mx-2 ml-4  text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
      </div>
      <div className='flex ml-2 flex-wrap gap-4 sm:gap-x-40 md:max-lg:gap-x-32 justify-left lg:gap-x-28'>
        {offerListings.map((listing) => (
          <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/6 p-2'>
            <Listingitem listing={listing} key={listing._id} />
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Rent Listings Section */}
  {rentListings && rentListings.length > 0 && (
    <div>
      <div className='my-3'>
        <h2 className='text-2xl mx-2 ml-4 font-semibold text-[#282727]'>Recent places for rent</h2>
        <Link className='text-sm mx-2 ml-4 text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
      </div>
      <div className='flex ml-2 flex-wrap gap-4 sm:gap-x-40 md:max-lg:gap-x-32 justify-left lg:gap-x-28'>
        {rentListings.map((listing) => (
          <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/6 p-2'>
            <Listingitem listing={listing} key={listing._id} />
          </div>
        ))}
      </div>
    </div>
  )}

  {/* Sale Listings Section */}
  {saleListings && saleListings.length > 0 && (
    <div>
      <div className='my-3'>
        <h2 className='text-2xl ml-4 mx-2 font-semibold text-[#282727]'>Recent places for sale</h2>
        <Link className='text-sm mx-2 ml-4 text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
      </div>
      <div className='flex ml-2 flex-wrap gap-4 sm:gap-x-40 md:max-lg:gap-x-32 justify-left lg:gap-x-28'>
        {saleListings.map((listing) => (
          <div className='w-full sm:w-1/3 md:w-1/3 lg:w-1/6 p-2'>
            <Listingitem listing={listing} key={listing._id} />
          </div>
        ))}
      </div>
    </div>
  )}
</div>
{/* {CreateListing btn} */}
<div className="relative">
      <Link to="/create-listing" className="fixed bottom-7 right-6 bg-[#282727] rounded-full ml:px-2 shadow-md z-10 xl:px-4 py-4" >
      <div className=" mx-4 flex items-center justify-center space-x-2">
         
            <FaPlus className="text-white" />
         
          <span className="text-white text-xs">Create Listing</span>
        </div>
      </Link>
    </div>
    </div>
  );
}
