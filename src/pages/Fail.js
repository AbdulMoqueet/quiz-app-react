import { Box, Icon, Link, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react'

import { useSelector } from 'react-redux';

const Fail = () => {

    const score = useSelector(state => state.user.score)
    const username = useSelector(state => state.user.username)

    return (
        <Box sx={{
            height: "100vh",
            width: "100%",
            padding: "0 10px",
            display: "grid",
            placeItems: "center"
        }}>

            <Box sx={{
                color: "#fff",
                backgroundColor: "#141415",
                height: "360px",
                padding: "20px 0",
                border: "2px solid gray",
                borderRadius: "15px",
                display: "grid",
                placeItems: "center"
            }}>

                <Box textAlign="center" p="0 10px">
                    <Icon fontSize='large' sx={{transform: "scale(1.6)", display: "block", margin:"30px auto", color: "red"}}><CloseIcon sx={{ fontSize: 40 }} /></Icon>
                    <Typography variant='p' component='p' fontSize={30} textAlign="center">Dear {username}, unfortunately you did'nt make the cut. You needed a score of 5+ to pass this test whereas you scored only {score}, Better luck next time!</Typography>
                </Box>


            </Box>

            <Link href="/"
                sx={{
                    position: "absolute",
                    bottom: "30px",
                    border: "3px solid #009356",
                    width: "calc(400px - 20px)",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "8px",
                    color: "#fff",
                    textDecoration: "none",
                    ":hover": { background: "linear-gradient(to right, rgba(0, 0, 0, 0.1) 50%, #0093568a)", cursor: "pointer" }
                }}>Return
                <Icon sx={{
                    position: "absolute",
                    transform: "rotate(-90deg)",
                    right: 10
                }}><DownloadIcon /></Icon>
                </Link>

        </Box >
    )
}

export default Fail