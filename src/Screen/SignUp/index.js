import { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';

// import { addUser, removeUser } from '../../store/actions/userActions';
import { loginUser } from '../../store/slices/userSlice'
import "./index.css"

function SignUp() {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        user_Name: "bilal",
        user_password: ""
    })
    console.log(formData)

    const handelChange = (key, value) => {
        setFormData({ ...formData, [key]: value.target.value })
    }

    const submit = () => {
        if (!formData.email.includes('@') || !formData.email.includes('.com')) {
            swal("Error!", "Please enter your email", "error");
            return
        }
        if (formData.password.length !== 6) {
            swal("Error!", "Please enter password of 6 characters", "error");
            return
        }
        swal({
            title: "Success!",
            icon: "success",
            button: "Ok!",
        });
        dispatch(loginUser(formData))
    }

    return <div style={{ backgroundColor: "white", paddingTop: "100px" }}>


        <Container maxWidth="xs">
            <Grid container>

                <Grid item lg={12} md={12} sm={12} xs={12} id="login1" style={{ marginTop: "50px", marginBottom: "50px" }}>

                    <h1 style={{ marginTop: "40px", color: "rgb(58,26,15)" }}>User <strong>Sign Up</strong></h1>
                    <PersonIcon sx={{ fontSize: 100, color: "rgb(58,26,15)" }} />

                    <Grid container>
                        <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                        <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                            <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                <input
                                    //  onChange={e => handelChange(e,"user_Name")} 
                                    //  value={formData.user_Name}
                                    placeholder="Enter Name" type="text" style={{ width: "50%", height: "35px", border: "none", outline: "none", backgroundColor: "transparent" }} />
                            </div>
                        </Grid>
                    </Grid>


                    <Grid container>
                        <Grid item lg={3} md={3} sm={3} xs={2} ></Grid>
                        <Grid item lg={6.5} md={6.5} sm={6.5} xs={8}>
                            <div style={{ marginTop: "35px", borderBottom: "1px solid lightgray" }} className="sign_Up_Input">
                                <input
                                    //  onChange={e => handelChange(e, "Password")}  
                                    //  value={formData.password} 
                                    placeholder="Enter Email" type="email" style={{ width: "50%", height: "35px", border: "none", outline: "none" }} />
                            </div>
                        </Grid>



                    </Grid>


                    <Button onClick={submit}
                        style={{ backgroundColor: "rgb(58,26,15)", color: "white", marginBottom: "50px", width: "200px", marginTop: "35px" }}>Submit</Button>

                    <Grid container>
                        <Grid item lg={1} md={1} sm={1} ></Grid>
                        <Grid item lg={10} md={9} sm={9} xs={12} style={{ marginTop: "-15px", paddingBottom: "40px" }}>
                            <text
                                // onClick={() => navigate("/signup")} 
                                style={{ color: "rgb(58,26,15)", cursor: "pointer", width: "90%", marginBottom: "50px", marginTop: "-10px", marginRight: "150px" }}>Retype Password</text>
                            <text
                                // onClick={() => navigate("/forgetpassword")} 
                                style={{ color: "rgb(58,26,15)", cursor: "pointer", width: "90%", marginBottom: "50px", marginTop: "-10px" }}>Password</text>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>
        </Container>
    </div >
}

export default SignUp
