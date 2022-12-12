import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';

import { signOutUser } from '../../../config/firebase'
import { fetchOrders } from '../../../store/slices/orderSlice';
import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../store/slices/userSlice';

import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(25,25,25)',
        },
        text: {
            primary: 'rgb(25,25,25)'
        }
    }
})

function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} md={3.5} sm={4} xs={12} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2 style={{fontFamily:"Garamond, serif"}}><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p onClick={() => navigate("/dashboard")}>Dashboard</p><br></br>
                    <p onClick={() => navigate("/order")}>Orders</p><br></br>
                    <p >Account Detail</p><br></br>
                    <p
                        onClick={() => {
                            swal({
                                title: "Are you sure?",
                                text: "You will be logged out!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willDelete) => {
                                    if (willDelete) {
                                        signOutUser().then(
                                            dispatch(logoutUser())
                                        ).catch(e => console.log(e))
                                        swal("Logout Successful!", {
                                            icon: "success",
                                        });
                                    }
                                });
                        }}
                    >Logout</p><br></br>
                </Grid>
                <Grid item lg={1} md={1} sm={1}></Grid>
                <Grid item lg={8} md={7} sm={7} xs={12}  style={{ paddingTop: "10px" }} className="my_Account_Shadow">
                    <h2 style={{fontFamily:"Garamond, serif"}}>Account Detail</h2>
                    <Grid container style={{ marginBottom: "20px" }}>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        // {...register("email", { required: "E-mail Address is required." })}
                                        // error={Boolean(errors.email)}
                                        // helperText={errors.email?.message}
                                        // fullWidth required
                                        size="small"
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                            </div>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1}></Grid>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        // {...register("email", { required: "E-mail Address is required." })}
                                        // error={Boolean(errors.email)}
                                        // helperText={errors.email?.message}
                                        // fullWidth required
                                        size="small"
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                            </div>
                        </Grid>

                        <Grid item lg={11} md={10} sm={11} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        label="Company Name (Optional)"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        // {...register("email", { required: "E-mail Address is required." })}
                                        // error={Boolean(errors.email)}
                                        // helperText={errors.email?.message}
                                        // fullWidth required
                                        size="small"
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                            </div>
                        </Grid>
                    </Grid>
                    <p style={{ marginTop: "50px" }}><b>Country/Region</b></p>

                    <Grid container style={{ marginBottom: "20px" }}>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        label="Town/Karachi"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        // {...register("email", { required: "E-mail Address is required." })}
                                        // error={Boolean(errors.email)}
                                        // helperText={errors.email?.message}
                                        // fullWidth required
                                        size="small"
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'rgb(58,26,15)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(58,26,15)" },
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                            </div>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1}></Grid>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>
                                    <TextField
                                        label="Town/Country"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        // {...register("email", { required: "E-mail Address is required." })}
                                        // error={Boolean(errors.email)}
                                        // helperText={errors.email?.message}
                                        // fullWidth required
                                        size="small"
                                        sx={{
                                            "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                            },
                                        }}
                                    />
                                </ThemeProvider>
                            </div>
                        </Grid>

                        <Grid item lg={11} md={11} sm={11} xs={12} style={{marginTop:"30px"}}>
                                <label for="cars" style={{marginRight:"20px",marginBottom:"10px"}}>Choose a State Country:</label>
                                <select name="cars" id="cars" style={{width:"50%",outline:"none"}}>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
}
            export default Dashboard
