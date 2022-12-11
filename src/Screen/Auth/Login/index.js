import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";

import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

import { setReduxUser, loginUser } from '../../../store/slices/userSlice'
import "./index.css"

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

function Login(props) {
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => submit(data)
    const [loading, setLoading] = useState(false)

    const submit = async (data) => {
        setLoading(true)
        if (!data.email || !data.password) {
            setLoading(false)
            return
        }
        if (!data.email.includes('@')) {
            swal("Error!", "Please enter a proper email", "error");
            setLoading(false)
            return
        }
        if (data.password.length < 6) {
            swal("Error!", "Password must be at least 6 characters long", "error");
            setLoading(false)
            return
        }

        const { payload } = await dispatch(loginUser(data))

        if (payload.error) {
            swal({
                title: "Error!",
                icon: "error",
                text: payload.message,
                button: "Ok!",
            });
        }
        else {
            setReduxUser(payload.data)
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

                    <h1 style={{ marginTop: "40px", color: "rgb(58,26,15)",fontFamily:"Garamond, serif" }}><strong>User Login</strong></h1>
                    <PersonIcon sx={{ fontSize: 100, color: "rgb(208,13,30)" }} />

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1} ></Grid>
                            <Grid item lg={7.5} md={8.5} sm={8.5} xs={10}>
                                <div style={{ marginTop: "35px" }}>
                                    <ThemeProvider theme={theme}>
                                        <TextField
                                            label="E-mail"
                                            variant="outlined"
                                            fullWidth
                                            name="email"
                                            {...register("email", { required: "E-mail Address is required." })}
                                            error={Boolean(errors.email)}
                                            helperText={errors.email?.message}
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

                        <Grid container>
                            <Grid item lg={2} md={2} sm={2} xs={1} ></Grid>
                            <Grid item lg={7.5} md={8.5} sm={8.5} xs={10}>
                                <div style={{ marginTop: "35px" }}>
                                    <ThemeProvider theme={theme}>

                                        <TextField
                                            size="small"
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
                            <Grid item lg={2.3} md={2.7} sm={3.2} xs={2.5}></Grid>
                            <Grid item lg={7} md={7}>
                                <Button
                                    disabled={loading}
                                    type="submit"
                                    style={{ backgroundColor: "rgb(208,13,30)", color: "white", marginBottom: "50px", width: "200px", marginTop: "40px" }}>Login</Button>
                            </Grid>
                        </Grid>



                        <Grid container>
                            <Grid item lg={2.5} md={3} sm={3} xs={2} ></Grid>
                            <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                                <div style={{ marginTop: "-10px", paddingBottom: "20px" }} className="sign_Up_Input">
                                    <text
                                        onClick={() => props.setScreen(false)}
                                        style={{ color: "", cursor: "pointer", width: "90%", marginBottom: "50px", width: "200px", marginTop: "35px",fontFamily:"Garamond, serif",fontSize:"17px" }}><b>Click here to Register</b></text>
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
