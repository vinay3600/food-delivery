import React, { useState } from 'react'
import Header from '../../Components/Header/Header'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import AppDownload from '../../Components/AppDownload/AppDownload'

const Home = () => {
    const [category , setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category = {category} setCategory = {setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload></AppDownload>
    </div>
  )
}

export default Home