import { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Input from '@mui/material/Input';

import { useForm } from "react-hook-form";


// import { addUser, removeUser } from '../../store/actions/userActions';
import { loginUser } from '../../store/slices/userSlice'
import "./index.css"

function Login(props) {
    const dispatch = useDispatch()
    const color = "black"

    // const [formData, setFormData] = useState({
    //     email: "FatimaMeat.com",
    //     password: "123456"
    // })
    // const [values, setValues] = useState({
    //     showPassword: false,
    // });
    // console.log("formData", formData)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => submit(data)

    // const handelChange = (e, key) => {
    //     setFormData({ ...formData, [key]: e.target.value })
    // }

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    const submit = async (data) => {
        if (!data.email || !data.password) {
            return
        }
        if (!data.email.includes('@')) {
            swal("Error!", "Please enter a proper email", "error");
            return
        }
        if (data.password.length !== 6) {
            swal("Error!", "Password must be at least 6 characters long", "error");
            return
        }

        const { payload } = await dispatch(loginUser(data))
        console.log(payload)

        if (payload.error) {
            swal({
                title: "Error!",
                icon: "error",
                text: payload.message,
                button: "Ok!",
            });
        }
        else {
            swal({
                title: "Success!",
                icon: "success",
                text: payload.message,
                button: "Ok!",
            });
        }
    }

    return <div style={{ backgroundColor: "white", paddingTop: "100px" }}>

        <Container maxWidth="xs">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} id="login1" style={{ marginTop: "50px", marginBottom: "50px" }}>

                    <h1 style={{ marginTop: "40px", color: "rgb(58,26,15)" }}>User <strong>Login</strong></h1>
                    <PersonIcon sx={{ fontSize: 100, color: "rgb(58,26,15)" }} />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px" }}>
                                    {/* <input onChange={e => handelChange(e, "email")} value={formData.email}
                                    placeholder="Email" type="text" style={{ width: "50%", height: "35px", border: "none", outline: "none" }} /> */}
                                    <TextField
                                        // id="outlined-basic"
                                        label="E-mail"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        {...register("email", { required: "E-mail Address is required." })}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email?.message}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px" }}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        name="password"
                                        type="password"
                                        text
                                        // hidden={true}
                                        {...register("password", { required: "Password is required." })}
                                        error={Boolean(errors.password)}
                                        helperText={errors.password?.message}
                                    />
                                    {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined"> */}
                                    {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
                                    {/* <Input
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        // onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    /> */}
                                    {/* </FormControl> */}
                                    {/* <input onChange={e => handelChange(e, "Password")} value={formData.password}
                                        placeholder="Password" type="password" style={{ width: "50%", height: "35px", border: "none", outline: "none" }} /> */}
                                </div>
                            </Grid>
                        </Grid>

                        <Button onClick={submit}
                            type="submit"
                            style={{ backgroundColor: "rgb(58,26,15)", color: "white", marginBottom: "50px", width: "200px", marginTop: "20px" }}>Login</Button>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <text
                                        // onClick={() => navigate("/signup")}
                                        onClick={() => props.setScreen(false)}
                                        style={{ color: "rgb(58,26,15)", cursor: "pointer", width: "90%", marginBottom: "50px", width: "200px", marginTop: "35px" }}>Already Have an account?{'\n'}Click here to Login!</text>
                                    <text
                                        style={{ color: "rgb(58,26,15)", cursor: "pointer", width: "90%", marginBottom: "50px", width: "200px", marginTop: "35px" }}>    </text>
                                </div>
                            </Grid>
                        </Grid>

                    </form>

                </Grid>
            </Grid>
        </Container>

    </div >
}

export default Login
