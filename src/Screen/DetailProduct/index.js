import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { EffectCoverflow, Pagination } from "swiper";

import img1 from "../../Image/cardImg1.png"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.css";
import { allProducts } from '../../Data'
import { addCartItems } from '../../store/slices/cartSlice'
import swal from 'sweetalert';

// new slider
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./index.css";
import {
  FreeMode, Navigation, Thumbs
} from "swiper";

function ProductDetail() {
  // new slider
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams()
  const { id } = params
  const [data, setData] = useState()
  const [quantity, setQuantity] = useState(1)
  const [screen, setScreen] = useState('description')
  const [meatType, setMeatType] = useState()
  const [selectedMeatType, setSelectedMeatType] = useState({
    type: 'select an option', price: false
  })
  const [orderDetails, setOrderDetails] = useState()

  const dispatch = useDispatch()

  const handleClick = async () => {
    if (!selectedMeatType.price) {
      swal("Error!",
        "Please select meat type",
        "error");
    }
    else if (quantity == 0) {
      swal("Error!",
        "Please select quantity",
        "error");
    }
    else {
      dispatch(addCartItems(orderDetails))
      swal("Success!",
        "Item Added To Cart",
        "success");
    }
  }

  const handleSelectChange = (event) => {
    setSelectedMeatType(event.target.value)
    setMeatType(event.target.value.type)
  }

  const updateQuantity = (type) => {
    if (type) {
      if (quantity !== 1) {
        setQuantity(quantity - 1)
      }
    }
    else {
      setQuantity(quantity + 1)
    }
    setOrderDetails({ ...orderDetails, quantity: quantity + 1 })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const result = allProducts.filter((item) => {
      if (item.id == id) {
        return item
      }
    })
    setData(result[0])
  }, [])

  useEffect(() => {
    if (selectedMeatType.price) {
      setOrderDetails({ ...orderDetails, meatType: selectedMeatType })
    }
    else {
      setOrderDetails({ ...orderDetails, name: id })
    }
  }, [selectedMeatType, quantity])

  const objImage = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-1.jpg",
  ]

  return <div style={{ paddingTop: "120px", paddingBottom: "50px" }} className="bg_card">
    <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <h1 style={{ textAlign: "center", fontStyle: "Garamond,serif", marginBottom: "30px" }}>
        <b>{data && data.name}</b>
      </h1>

      <Grid container className="product_detail_main">
        <Grid item lg={5.5} md={5.5} sm={5.5} xs={12} className="product_detail_slider">

          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide> */}
              {data && data.images.map((item, index) => {
                return <div key={index}>
                  <SwiperSlide sx={{ color: "red" }}>
                    <img src={item} alt="" />
                  </SwiperSlide>
                </div>
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {data && data.images.map((item, index) => {
                return <div key={index}>
                  <SwiperSlide sx={{ color: "red" }}>
                    <img src={item} alt="" />
                  </SwiperSlide>
                </div>
              })}
              {/* <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
              </SwiperSlide> */}
            </Swiper>
          </>



          {/* old slider */}

          {/* <>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >

              {data.images.map((item, index) => {
                return <div key={index}>
                  <SwiperSlide sx={{color:"red"}}>
                    <img src={item} alt="" />
                  </SwiperSlide>
                </div>
              })}
            </Swiper>
          </> */}
        </Grid>

        <Grid item lg={5.5} md={5.5} sm={5.5} xs={10} className="product_detail_text">
          {
            data && <p>{data.minPrice} - {data.maxPrice}</p>
          }
          <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={5}>
              <p style={{ fontSize: "20px", marginTop: "5px", cursor: "pointer" }}><b>Meat Type</b></p>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={7}>
              <FormControl fullWidth>
                <Select
                  style={{ width: "100%", height: "50px", border: "1px solid lightgray", paddingLeft: "20px" }}
                  value={meatType}
                  label="Meat Type"
                  onChange={handleSelectChange}
                >
                  <MenuItem value={{ type: "Choose An Option", price: false }}>Choose An Option</MenuItem>
                  {
                    data && data.meatType.map((item, index) => {
                      return <MenuItem key={index} value={item}>{item.type}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <hr style={{ marginTop: "50px" }}></hr>
          {
            data && selectedMeatType.price && <p>Rs {selectedMeatType.price}</p>
          }
          <Grid container style={{ marginBottom: "25px" }}>
            <Grid item lg={2} md={2} sm={3} xs={4} className="detail_product_input">
              <button onClick={() => updateQuantity(true)}
                style={{ height: "25px", width: "25px", backgroundColor: "rgb(208,16,15)", border: "none", color: "white", cursor: "pointer" }}>-</button>
              <text style={{ marginLeft: "10px", marginRight: "10px" }}>{quantity}</text>
              <button onClick={() => updateQuantity(false)}
                style={{ height: "25px", width: "25px", backgroundColor: "rgb(208,16,15)", border: "none", color: "white", cursor: "pointer" }}>+</button>
              {/*               
              <input 
              type="number" 
              placeholder='0' 
              style={{ width: "100%", height: "40px", paddingLeft: "35px" }} /> */}
            </Grid>
            <Grid item lg={2} md={2} sm={1} xs={1}></Grid>
            <Grid item lg={8} md={8} sm={8} xs={7}>
              <Button
                // disabled={!selectedMeatType.price}
                style={{ width: "100%", backgroundColor: "rgb(208,16,15)", color: "white", fontSize: "20px" }}
                onClick={handleClick}>Add To Cart</Button>
            </Grid>
          </Grid>
          <text style={{ fontSize: "20px" }}>SKU: N/A</text><br></br>
          {/* <text style={{ fontSize: "20px" }}>Categories:<b>Organi Meat,Rabbit</b></text> */}
        </Grid>
      </Grid>
    </Container>
    <Container>
      <Grid container className='product_descripton_btn'>
        <Grid item lg={3.7} md={3.7} sm={3} xs={11}>
          <Button
            style={{ width: "100%", backgroundColor: "rgb(208,16,15)", color: "white", fontSize: "20px", height: "50px" }}
            onClick={() => setScreen('description')}
          >Description</Button>

        </Grid>
        <Grid item lg={3.7} md={3.7} sm={5} xs={11}>
          <Button
            style={{ width: "100%", backgroundColor: "rgb(208,16,15)", color: "white", fontSize: "20px", height: "50px" }}
            onClick={() => setScreen('additionalInformation')}
          >Additional Information</Button>

        </Grid>
        <Grid item lg={3.7} md={3.7} sm={3} xs={11}>
          <Button
            style={{ width: "100%", backgroundColor: "rgb(208,16,15)", color: "white", fontSize: "20px", height: "50px" }}
            onClick={() => setScreen('review')}
          >Review(0)</Button>

        </Grid>
      </Grid>
      {
        screen == 'description' && <Grid container style={{ backgroundColor: "white", paddingBottom: "0px" }} className="b">
          <Grid item lg={10} md={10} sm={10} xs={10} className="Rabbit_meat_ul" npn>
            <p>{data && data.name}</p>
            <ul>
              {data && data.description.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </Grid>
        </Grid>
      }
      {
        screen == 'additionalInformation' && <Grid container style={{ backgroundColor: "white", paddingBottom: "0px" }} >
          <Grid item lg={10} md={10} sm={10} xs={10} className="Rabbit_meat_ul" npn>
            <p>KG</p>
          </Grid>
        </Grid>
      }
      {
        screen == 'review' && <Grid container style={{ backgroundColor: "white", paddingBottom: "0px" }} >
          <Grid item lg={10} md={10} sm={10} xs={10} className="Rabbit_meat_ul" npn>
            <p>No reviews yet</p>
          </Grid>
        </Grid>
      }
    </Container>

  </div>
}

export default ProductDetail    