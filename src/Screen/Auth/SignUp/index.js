import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";

import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';

import { createUser } from '../../../store/slices/userSlice'
import "./index.css"

function SignUp(props) {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)
    const onSubmit = (data) => submit(data)

    const submit = async (data) => {
        console.log("submit")
        setLoading(true)
        if (!data.email || !data.password || !data.username) {
            setLoading(false)
            return
        }
        if (!data.email.includes('@')) {
            swal("Error!", "Please enter a proper email", "error");
            setLoading(false)
            return
        }
        if (data.password.length !== 6) {
            swal("Error!", "Password must be at least 6 characters long", "error");
            setLoading(false)
            return
        }
        if (data.password !== data.repassword) {
            swal("Error!", "Passwords don't match", "error");
            setLoading(false)
            return
        }

        const { payload } = await dispatch(createUser(data))
        console.log("signup", payload)

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
        setLoading(false)
    }

    return <div style={{ backgroundColor: "white", paddingTop: "100px" }}>


        <Container maxWidth="xs">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} id="login1" style={{ marginTop: "50px", marginBottom: "50px" }}>

                    <h1 style={{ marginTop: "40px", color: "rgb(58,26,15)" }}>User <strong>Sign Up</strong></h1>
                    <PersonIcon sx={{ fontSize: 100, color: "rgb(58,26,15)" }} />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <TextField
                                        // id="outlined-basic"
                                        label="Username"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        {...register("username", { required: "Username is required." })}
                                        error={Boolean(errors.username)}
                                        helperText={errors.username?.message}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <TextField
                                        id="outlined-basic"
                                        label="E-mail"
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        text
                                        // hidden={true}
                                        {...register("email", { required: "E-maid address is required." })}
                                        error={Boolean(errors.email)}
                                        helperText={errors.email?.message}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <TextField
                                        id="outlined-basic"
                                        label="New Password"
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
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <TextField
                                        id="outlined-basic"
                                        label="Re-type New Password"
                                        variant="outlined"
                                        fullWidth
                                        name="repassword"
                                        type="password"
                                        text
                                        // hidden={true}
                                        {...register("repassword", { required: "Please retype your new password" })}
                                        error={Boolean(errors.repassword)}
                                        helperText={errors.repassword?.message}
                                    />
                                </div>
                            </Grid>
                        </Grid>

                        <Button
                            type='submit'
                            disabled={loading}
                            style={{ backgroundColor: "rgb(58,26,15)", color: "white", marginBottom: "50px", width: "200px", marginTop: "35px" }}>Submit</Button>

                        <Grid container>
                            <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <text
                                        onClick={() => props.setScreen(true)}
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

export default SignUp
