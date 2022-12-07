import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from '../Screen/HomeComponent';
import HeaderTop from '../Component/HeaderTop';
import Header from '../Component/Header';
import Recipes from '../Screen/Recipes';
import OurMeat from "../Screen/OurMeat"
import Location from '../Screen/Home/Location';
import FatimaFood from '../Screen/FatimaFood';
import ProductDetail from '../Screen/DetailProduct';
import Cart from '../Screen/Cart';
import Product from '../Screen/Home/Product';
import Footer from '../Component/Footer';
import ShipingDeatil from '../Screen/Checkout/ShipingDetail';
import ConformOrder from '../Screen/Checkout/ConformOrder';
import Payment from "../Screen/Checkout/Payment"
import Dashboard from '../Screen/Dashboard';
import Auth from '../Screen/Auth'
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Order from '../Screen/Dashboard/Order';
import MyAccount from '../Screen/Dashboard/MyAccount';

function Routering() {
    return <BrowserRouter>
        <div style={{ backgroundColor: "rgb(58,26,15)" }}>
            <HeaderTop />
            <Header />
        </div>
        <Routes>
             <Route path="/" element={<HomeComponent />} />
             {/* <Route path="/singUp" element={<SignUp />} />  */}
        
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/ourMeat" element={<OurMeat />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/product" element={<Product />} />
            <Route path="/fatimaFood" element={<FatimaFood />} />
            <Route path="/auth" element={<Auth />} />

            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/shipingDeatils" element={<ShipingDeatil />} />
            <Route path="/conformOrder" element={<ConformOrder />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/order' element={<Order/>}/>
            <Route path='/myAccount' element={<MyAccount/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
}
export default Routering