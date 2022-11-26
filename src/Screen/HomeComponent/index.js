import HeaderTop from "../../Component/HeaderTop"
import Header from "../../Component/Header"
import Slider from "../../Screen/Home/Slider"
import Product from "../../Screen/Home/Product"
import Location from "../../Screen/Home/Location"
import HomeRecipes from "../../Screen/Home/HomeRecipe"
import Footer from "../../Component/Footer"

function HomeComponent() {
    return <div>
        <div style={{ backgroundColor: "rgb(58,26,15)" }}>
            <HeaderTop />
            <Header />
        </div>
            <Slider/>
            <Product/>
            <Location/>
            <HomeRecipes/>
            <Footer/>
    </div>
}
export default HomeComponent