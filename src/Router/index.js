import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeComponent from '../Screen/HomeComponent';
import HeaderTop from '../Component/HeaderTop';
import Header from '../Component/Header';
import Recipes from '../Screen/Recipes';
import OurMeat from "../Screen/OurMeat"
// import Location from '../Screen/Home/Location';
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
import Order from '../Screen/Dashboard/Order';
import MyAccount from '../Screen/Dashboard/MyAccount';

import { auth, onAuthStateChanged } from '../config/firebase'
import { useDispatch, useSelector } from 'react-redux';

function Router() {

    const dispatch = useDispatch()
    const reduxCart = useSelector(state => state.cartReducer.cart)
    const reduxUser = useSelector(state => state.userReducer.user)
    console.log("Router reduxUser", reduxUser)
    const [user, setUser] = useState()
    console.log("Router user", user)

    const protectedRoute = (component) => {
        if (!user || !reduxCart[0]) {
            return <Auth />
        }
        else {
            return component
        }
    }

    const protectedRouteAuth = (component) => {
        if (!user) {
            return <Auth />
        }
        else {
            return <Dashboard />
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Router UseEffect", user)
                setUser(user)
                dispatch(setUser(user))
            } else {
                setUser()
                dispatch(setUser())
            }
        });
    }, [])

    return <BrowserRouter>

        <div style={{ backgroundColor: "rgb(58,26,15)" }}>
            <HeaderTop user={user} />
            <Header />
        </div>

        <Routes>
            <Route path="/" element={<HomeComponent />} />

            <Route path="/home" element={<HomeComponent />} />
            <Route path="/ourMeat" element={<OurMeat />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/product" element={<Product />} />
            <Route path="/fatimaFood" element={<FatimaFood />} />
            <Route path="/auth" element={protectedRouteAuth(<Auth />)} />

            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout/shippingDetails" element={protectedRoute(<ShipingDeatil />)} />
            <Route path="/checkout/confirmOrder" element={<ConformOrder />} />
            <Route path="/checkout/payment" element={<Payment />} />

            <Route path="/dashboard" element={protectedRouteAuth(<Dashboard />)} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path='/order' element={<Order />} />
            <Route path='/myAccount' element={<MyAccount />} />
        </Routes>

        <Footer />

    </BrowserRouter>
}
export default Router