import Slider from "../../Screen/Home/Slider"
import Product from "../../Screen/Home/Product"
import Location from "../../Screen/Home/Location"
import HomeRecipes from "../../Screen/Home/HomeRecipe"
import MetaData from "../../Component/MetaData"

function HomeComponent() {
    return <div>
< MetaData title="Fatima Meat | Home"/>
            <Slider/>
            <Product/>
            <Location/>
            <HomeRecipes/>
    </div>
}
export default HomeComponent