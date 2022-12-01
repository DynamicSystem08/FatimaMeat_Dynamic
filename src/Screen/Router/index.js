import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from '../HomeComponent';
import HeaderTop from '../../Component/HeaderTop';
import Header from '../../Component/Header';
import Recipes from '../Recipes';
import OurMeat from "../OurMeat"
import Location from '../Home/Location';
import FatimaFood from '../FatimaFood';
import ProductDetail from '../DetailProduct';
import Cart from '../Cart';
import Product from '../Home/Product';
import Footer from '../../Component/Footer';
import ShipingDeatil from '../Checkout/ShipingDetail';
import ConformOrder from '../Checkout/ConformOrder';
import Payment from "../Checkout/Payment"
import Dashboard from '../Dashboard';

function Routering() {
    return <BrowserRouter>
        <div style={{ backgroundColor: "rgb(58,26,15)" }}>
            <HeaderTop />
            <Header />
        </div>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/ourMeat" element={<OurMeat />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/product" element={<Product />} />
            <Route path="/fatimaFood" element={<FatimaFood />} />

            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/shipingDeatils" element={<ShipingDeatil />} />
            <Route path="/conformOrder" element={<ConformOrder />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
    </BrowserRouter>
}
export default Routering