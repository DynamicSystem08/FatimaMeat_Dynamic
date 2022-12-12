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

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


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



    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return <div style={{ backgroundColor: "white" }}>
        <Container style={{ paddingTop: "140px", paddingBottom: "50px" }}>
            <Grid container>
                <Grid item lg={3} md={3.5} sm={4} xs={12} style={{ padding: "20px" }} className="side_bar_dashboadr">
                    <h2 style={{ fontFamily: "Garamond, serif" }}><b>My Account</b></h2>
                    <hr></hr><br></br>
                    <p onClick={() => navigate("/dashboard")}>Dashboard</p><br></br>
                    <p onClick={() => navigate("/dashboard/orders")}>Orders</p><br></br>
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
                <Grid item lg={8} md={7} sm={7} xs={12} style={{ paddingTop: "10px" }} className="my_Account_Shadow">
                    <h2 style={{ fontFamily: "Garamond, serif" }}>My Account</h2>
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
                                        label="Display Name"
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
                                        type="email"
                                        label="Email Address"
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
                    <p style={{ marginTop: "50px" }}><b>Password Change</b></p>

                    <Grid container style={{ marginBottom: "20px", marginTop: "-20px" }}>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>

                                    <FormControl
                                        sx={{
                                            m: 1, width: '100%',
                                            "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                            },
                                        }}

                                        size="small" fullWidth required variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password"

                                        >Current Password</InputLabel >
                                        <OutlinedInput


                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end"

                                                >
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        sx={{ color: "black" }}
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </ThemeProvider>

                            </div>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1}></Grid>
                        <Grid item lg={5} md={5} sm={5} xs={12}>
                            <div style={{ marginTop: "35px" }}>
                                <ThemeProvider theme={theme}>

                                    <FormControl
                                        sx={{
                                            m: 1, width: '100%',
                                            "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                            },
                                        }}

                                        size="small" fullWidth required variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password"

                                        >New Password</InputLabel >
                                        <OutlinedInput


                                            id="outlined-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end"

                                                >
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                        sx={{ color: "black" }}
                                                    >
                                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                </ThemeProvider>
                            </div>
                        </Grid>

                        <Grid item lg={11} md={11} sm={11} xs={12} style={{ marginTop: "30px" }}>
                            <ThemeProvider theme={theme}>

                                <FormControl
                                    sx={{
                                        m: 1, width: '100%',
                                        "& .MuiInputLabel-root": { color: 'rgb(25,25,25)' },//styles the label
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "rgb(25,25,25)" },
                                        },
                                    }}

                                    size="small" fullWidth required variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password"

                                    >Current  New Password</InputLabel >
                                    <OutlinedInput


                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end"

                                            >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    sx={{ color: "black" }}
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
}
export default Dashboard
