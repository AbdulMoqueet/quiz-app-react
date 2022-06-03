import React from 'react'

import { Box, Icon, Link, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import DownloadIcon from '@mui/icons-material/Download';

import { useSelector } from 'react-redux';

const Pass = () => {

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
                    <Icon fontSize='large' sx={{ transform: "scale(1.6)", display: "block", margin: "30px auto", color: "green" }}><CheckIcon sx={{ fontSize: 40 }} /></Icon>
                    <Typography fontSize={28} variant='p' component='p' textAlign="center">Congratulation {username} you needed a score of
                        5+ to pass this test and you scored {score > 10 ? 10 : score} Outstanding performance</Typography>
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

export default Pass