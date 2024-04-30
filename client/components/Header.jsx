import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    if (path.startsWith('/#')) {
      // Handle in-page scrolling for hash links
      const sectionId = path.substring(2); // Remove '/#' to get the ID
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // For normal navigation
    navigate(path);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
    setActiveLink(location.pathname); 
  }, [location]);

  return (
    <header className='bg-[#f6f5f5] custom-shadow h-14 lg:h-16 fixed top-0 left-0 w-full z-10'>
      <div className='flex justify-between items-center max-w-6xl mx-auto px-3'>
        <Link to='/'>
          <h1 className='font-bold sm:mt-3.5 mt-4 text-sm sm:text-xl flex'>
            <span className='text-[#282727]'>Realtors</span>
            <span className='text-[#8c8989]'>.io</span>
          </h1>
        </Link>

        <ul className='flex-grow flex justify-center sm:mt-3.5 md:text-sm lg:text-base sm:text-sm items-center mt-4 text-xxs xl:text-base ml-12 lg:ml-14 space-x-4 sm:space-x-8 lg:space-x-12'>
          {[
      { path: '/', label: 'Home' },
      { path: '/#listings-section', label: 'Listings' },
      { path: '/About', label: 'About' },
      { path: '/Contact', label: 'Contact' }
    ].map(({ path, label }) => (
      <li key={path} className={`text-[#282727] hover:underline ${activeLink === path ? 'font-bold' : ''}`}
          onClick={() => handleLinkClick(path)}>
        {label}
      </li>
    ))}
        </ul>

        <div className='flex items-center justify-end mt-4 sm:mt-3.5 min-w-[150px]'>
          {currentUser ? (
            <Link to='/profile'>
              <img className='rounded-full h-7 w-7 mr-20 object-cover' src={currentUser.avatar} alt='profile' />
            </Link>
          ) : (
            <div className='flex text-xxs ml-3.5 items-center space-x-2 md:space-x-4 lg:space-x-7 sm:text-sm md:text-sm lg:text-base'>
              <Link to='/profile'>
                <ul><li className='px-0 text-[#282727]'>Sign in</li></ul>
              </Link>
              <Link to='/signup'>
                <ul><li className='bg-black border rounded-full px-2 py-1 lg:px-4 text-white sm:text-sm md:text-sm lg:text-base'>Sign up</li></ul>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
