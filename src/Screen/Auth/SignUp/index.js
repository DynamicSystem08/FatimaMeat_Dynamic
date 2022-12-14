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
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(58,26,15)',
        },
        text: {
            primary: 'rgb(58,26,15)'
        }
    }
})

function SignUp(props) {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)
    const onSubmit = (data) => submit(data)

    const submit = async (data) => {
        // console.log("submit")
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

        if (data.password.length < 6) {
            console.log(data.password.length)
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

    return <div style={{ paddingTop: "100px" }} className="slider_bg_icon">


        <Container maxWidth="xs">
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12} id="login1" style={{ marginTop: "50px", marginBottom: "50px" }}>

                    <h1 style={{ marginTop: "40px", color: "rgb(58,26,15)",fontFamily:"Garamond, serif" }}><strong>User Sign Up</strong></h1>
                    <PersonIcon sx={{ fontSize: 100, color: "rgb(208,13,30)" }} />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} ></Grid>
                            <Grid item lg={8.5} md={8.5} sm={8.5} xs={9}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <ThemeProvider theme={theme}>
                                        <TextField
                                            // id="outlined-basic"
                                            label="Username"
                                            variant="outlined"
                                            fullWidth required
                                            name="username"
                                            {...register("username", { required: "Username is required." })}
                                            error={Boolean(errors.username)}
                                            helperText={errors.username?.message}
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
                        </Grid>

                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} ></Grid>
                            <Grid item lg={8.5} md={8.5} sm={9} xs={9}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <ThemeProvider theme={theme}>
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
                        </Grid>

                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} ></Grid>
                            <Grid item lg={8.5} md={8.5} sm={8.5} xs={9}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <ThemeProvider theme={theme}>
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
                        </Grid>

                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1.5} ></Grid>
                            <Grid item lg={8.5} md={8.5} sm={8.5} xs={9}>
                                <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                    <ThemeProvider theme={theme}>
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
                        </Grid>

                        <Grid container>
                            <Grid item lg={2.5} md={2.7} sm={3.2} xs={2.5}></Grid>
                            <Grid item lg={7} md={7}>
                                <Button
                                    type='submit'
                                    disabled={loading}
                                    style={{ backgroundColor: "rgb(208,13,30)", color: "white", marginBottom: "30px", width: "200px", marginTop: "35px" }}>Submit</Button>
                            </Grid>
                        </Grid>

                        <Grid container>
                            <Grid item lg={3} md={2} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={8.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "15px",paddingBottom:"40px" }} className="sign_Up_Input">
                                    <text
                                        onClick={() => props.setScreen(true)}
                                        style={{ color: "rgb(58,26,15)", cursor: "pointer", width: "90%", marginBottom: "50px", width: "200px", marginTop: "35px" }}><b>Already Have an account?{'\n'}Click here to Login!</b></text>
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
