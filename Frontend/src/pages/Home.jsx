import React, { useContext,useEffect } from 'react'
import Hero from '../components/Hero'
import Search from '../components/Search'
import Category from '../components/category'
import Newarrivals from './../components/Newarrivals';
import Newsletter from '../components/Newsletter';

import { Appcontext } from '../context/Appcontext';


const Home = () => {
  const {setsearchquery,setselectedcategory}=useContext(Appcontext)
  useEffect(() => {
    setsearchquery("")
    setselectedcategory("")

  
  }, [])
  
  return (
    <div>
      <Hero/>
      <Search/>
      <Category/>
      <Newarrivals/>
      <Newsletter/>
    </div>
  )
}

export default Home