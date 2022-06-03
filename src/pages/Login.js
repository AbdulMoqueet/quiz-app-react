import React, { useState } from 'react'
import { Box, TextField, Typography, styled, createTheme, ThemeProvider, Input, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { setUsername } from '../actions'
import { useDispatch } from 'react-redux'


const Login = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => setInput(e.target.value);

    const handleSubmit = (e) => {
        if (input === '') {
            alert("Please Enter a username")
            return
        }
        dispatch(setUsername(input))
        localStorage.setItem("quizApp_react", JSON.stringify({
            username: input,
            score: 0
        }))
        navigate('/0')
    }

    return (

        <Box>

            <Box sx={{
                textAlign: "center",
                margin: "100px 0",
                color: "#fff"
            }}>
                <Typography variant='h4' component='h4' gutterBottom>WELCOME TO COSMIC ASSESSMENT TEST</Typography>
                <Typography variant='h5' component='h5'>Please enter your username below to proceed.</Typography>

            </Box>

            <Box sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "400px"
            }}>
                <Typography variant='p' fontWeight={700} component="p" color="#fff" mb={1}>Username:</Typography>
                <input style={{
                    padding: "14px",
                    outline: "none",
                    border: "1px solid gray",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "5px",
                    width: "372px"
                }} type="text" placeholder='Username' value={input} onChange={handleChange} />

            </Box>

            <Box sx={{
                position: "absolute",
                width: "400px",
                bottom: "20px"
            }}>

                <Button onClick={handleSubmit} variant='contained' sx={{
                    width: "400px",
                    padding: "15px 0",
                    background: input ? "#FF6B2F" : "gray",
                    "&:hover": {
                        background: input ? "#FF6B2F" : "gray",
                        cursor: input ? "pointer" : "auto"
                    }
                }}>Get Started</Button>

            </Box>



        </Box>
    )
}

export default Login