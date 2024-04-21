import React from 'react'
import { BrowserRouter ,Route,Routes } from 'react-router-dom'
import Home from './newpages/Home';

import Signup from './newpages/Signup';
import Sout from './newpages/Sout';
import Profile from './newpages/Profile';
import Header from '../components/Header';
import Signin from './newpages/Signin';
import Listing from './newpages/Listing';
import { ChakraProvider } from '@chakra-ui/react'
import PrivateRoute from '../components/PrivateRoute';
import CreateListing from './newpages/CreateListing';
import UpdateListing from './newpages/UpdateListing';
import Search from './newpages/Search';
import About from './newpages/About';


export default function App() {
  return (
   
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/sign-in' element={<Signin />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/signout" element={<Sout />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/listing/:listingId" element={<Listing />}/>
      <Route path="/search" element={<Search />}/>
      <Route element={<PrivateRoute/>}>
        <Route path ='/profile' element={<Profile/>}/>
        <Route path ='/create-listing' element={<CreateListing/>}/>
        <Route path ='/update-listing/:listingId' element={<UpdateListing/>}/>
      </Route>


    </Routes>
    </BrowserRouter>
   
  )
}
