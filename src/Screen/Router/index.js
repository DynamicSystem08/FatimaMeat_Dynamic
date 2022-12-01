import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from '../HomeComponent';
import HeaderTop from '../../Component/HeaderTop';
import Header from '../../Component/Header';
import Recipes from '../Recipes';
import OurMeat from "../OurMeat"
import Location from '../Home/Location';
import FatimaFood from '../FatimaFood';
import ProductDetail from '../DetailProduct';
import Card from '../Card';
import Product from '../Home/Product';
import Footer from '../../Component/Footer';
import ShipingDeatil from '../Checkout/ShipingDetail';
import ConformOrder from '../Checkout/ConformOrder';
import Payment from "../Checkout/Payment"
import Dashboard from '../Dashboard';

function Routering()
{
    return<BrowserRouter>
       <div style={{ backgroundColor: "rgb(58,26,15)" }}>
            <HeaderTop />
            <Header />
        </div>
    <Routes>
    <Route path="/productdetail" element={<ProductDetail/>}/>
    <Route path="/card" element={<Card/>}/>
    <Route path="/shipingDeatils" element={<ShipingDeatil/>}/>
    <Route path="/conformOrder" element={<ConformOrder/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>




    

    
         <Route path="/" element={<HomeComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/ourMeat" element={<OurMeat/>}/>
        <Route path="/location" element={<Location/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/fatimaFood" element={<FatimaFood/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
}
export default Routering