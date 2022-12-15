import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';

import { useEffect } from 'react'
import MetaData from "../../Component/MetaData"
import { useNavigate } from 'react-router-dom'
import { allProducts } from '../../Data';

import "./index.css"

export default function Product() {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div style={{ marginTop: "-10px", backgroundColor: "white" }} >
        <MetaData title="Fatima Meat | Our Meat" />
        <Container>
            <h1 style={{ paddingTop: "100px", fontFamily: " Garamond, serif", fontWeight: "900" }}>SHOP</h1>

            <Grid container>

                {
                    allProducts.map((item) => {
                        return <Grid item lg={3} className="Beef_imgs"
                            onClick={() => navigate(item.id)}
                        >
                            <img src={item.images[0]} alt="" />
                            <p><b>{item.name}</b></p>
                            <p style={{ textAlign: "center", fontSize: "17px", marginTop: "-20px", color: "gray", marginBottom: "-10px" }}>
                                ₨: {item.minPrice} – ₨: {item.maxPrice}</p>
                        </Grid>
                    })
                }

            </Grid>

        </Container>
    </div>
}
