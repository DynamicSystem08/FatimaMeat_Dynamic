import Slider from "../Home/Slider"
import Location from "../Home/Location"
import HomeRecipes from "../Home/HomeRecipe"
import OurMeat from "../Home/OurMeat"

import MetaData from "../../Component/MetaData"

function HomeComponent() {

    return <div>
        <MetaData title="Fatima Meat | Home" />
        <Slider />
        <OurMeat />
        <HomeRecipes />
        <Location />
    </div>
}
export default HomeComponent