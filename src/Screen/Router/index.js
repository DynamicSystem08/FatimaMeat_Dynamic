import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from '../HomeComponent';
import HeaderTop from '../../Component/HeaderTop';
import Header from '../../Component/Header';
import Recipes from '../Recipes';
import OurMeat from "../OurMeat"
import Location from '../Home/Location';
import FatimaFood from '../FatimaFood';
import Footer from '../../Component/Footer';
function Routering()
{
    return<BrowserRouter>
       <div style={{ backgroundColor: "rgb(58,26,15)" }}>
            <HeaderTop />
            <Header />
        </div>
    <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/ourMeat" element={<OurMeat/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/fatimaFood" element={<FatimaFood/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
}
export default Routering