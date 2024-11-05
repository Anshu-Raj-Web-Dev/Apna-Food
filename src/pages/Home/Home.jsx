import React from 'react'
import { useState } from 'react'
import "./Home.css"
import Header  from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <div className='home-food-display'>
      <FoodDisplay category={category}/>
      </div>
      <AppDownload/>
    </div>
  )
}

export default Home