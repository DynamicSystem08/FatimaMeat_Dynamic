import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeComponent from '../Screen/HomeComponent';
import HeaderTop from '../Component/HeaderTop';
import Header from '../Component/Header';
import Recipes from '../Screen/Recipes';
// import OurMeat from "../Screen/home/OurMeat"
// import Location from '../Screen/Home/Location';
import FatimaFood from '../Screen/FatimaFood';
import ProductDetail from '../Screen/DetailProduct';
import Cart from '../Screen/Cart';
import Product from '../Screen/Product';
import AllOurMeat from '../Screen/AllOurMeat';
import Footer from '../Component/Footer';
import ShipingDeatil from '../Screen/Checkout/ShipingDetail';
import ConformOrder from '../Screen/Checkout/ConformOrder';
import Payment from "../Screen/Checkout/Payment"
import Dashboard from '../Screen/Dashboard';
import Auth from '../Screen/Auth'
import Order from '../Screen/Dashboard/Order';
import AccountDetails from '../Screen/Dashboard/MyAccount1';

import { auth, onAuthStateChanged } from '../config/firebase'
import { useDispatch, useSelector } from 'react-redux';

function Router() {

    const dispatch = useDispatch()
    const reduxCart = useSelector(state => state.cartReducer.cart)
    const reduxUser = useSelector(state => state.userReducer.user)
    const [user, setUser] = useState()

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
            return component
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                dispatch(setUser(user))
            } else {
                setUser()
                dispatch(setUser())
            }
        });
    }, [])

    return <BrowserRouter>

        <div style={{ backgroundColor: "black" }}>
            <HeaderTop user={user} />
            <Header />
        </div>

        <Routes>
            <Route path="/" element={<HomeComponent />} />

            <Route path="/home" element={<HomeComponent />} />
            {/* <Route path="/ourMeat" element={<OurMeat />} /> */}
            <Route path="/ourMeat" element={<AllOurMeat />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/products" element={<Product />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/fatimaFood" element={<FatimaFood />} />
            <Route path="/auth" element={protectedRouteAuth(<Auth />)} />

            <Route path="/products/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout/shippingDetails" element={protectedRoute(<ShipingDeatil />)} />
            <Route path="/checkout/confirmOrder" element={<ConformOrder />} />
            <Route path="/checkout/payment" element={<Payment />} />

            <Route path="/dashboard" element={protectedRouteAuth(<Dashboard />)} />
            <Route path='/dashboard/orders' element={protectedRouteAuth(<Order />)} />
            <Route path='/dashboard/account-details' element={protectedRouteAuth(<AccountDetails />)} />

        </Routes>

        <Footer />

    </BrowserRouter>
}
export default Router