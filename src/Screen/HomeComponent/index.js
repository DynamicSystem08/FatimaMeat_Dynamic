import Slider from "../../Screen/Home/Slider"
import Product from "../../Screen/Home/Product"
import Location from "../../Screen/Home/Location"
import HomeRecipes from "../../Screen/Home/HomeRecipe"
import MetaData from "../../Component/MetaData"

import { useDispatch } from 'react-redux'
import { removeCartItems } from '../../store/slices/cartSlice'

function HomeComponent() {

    const dispatch = useDispatch()

    return <div>
        <MetaData title="Fatima Meat | Home" />
        <Slider />
        <Product />
        <Location />
        <HomeRecipes />
    </div>
}
export default HomeComponent