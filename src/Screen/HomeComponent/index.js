import { useEffect } from 'react'
import Slider from "../Home/Slider"
import Location from "../Home/Location"
import HomeRecipes from "../Home/HomeRecipe"
import OurMeat from "../Home/OurMeat"

import MetaData from "../../Component/MetaData"

function HomeComponent() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <div>
        <MetaData title="Fatima Meat | Home" />
        <Slider />
        <OurMeat />
        <HomeRecipes />
        <Location />
    </div>
}
export default HomeComponent