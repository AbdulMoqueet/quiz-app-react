import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, Stack, styled, Typography } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'

import { setScore, setUsername, setLocalScore } from '../actions'
import { useDispatch, useSelector } from 'react-redux'

import questions from '../questions'

const Quiz = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [currentSelectedOp, setCurrentSelected] = useState(null)
    const [currentSelectedItem, setCurrentSelectedItem] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState()

    const dispatch = useDispatch()
    const score = useSelector(state => state.user.score)

    let intervalId, time = 60

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('quizApp_react'))

        if(user){
            dispatch(setUsername(user.username))
            dispatch(setLocalScore(user.score))
        }
    
    }, [])
    

    useEffect(() => {

        if (id < 10)
            setCurrentQuestion(questions[id])

        intervalId = setInterval(()=>{
            time--
            
            document.getElementById('timer').textContent = `00:${time}`

            if(time <= 0){
                clearInterval(intervalId)
                navigate(`/${Number(id) + 1}`)
            }
        }, 1000)

        return () => {
            clearInterval(intervalId)
            setCurrentSelected(null)
            setCurrentSelectedItem(null)
        }

    }, [id])


    const StyledTypography = styled(Typography)({
        backgroundColor: "#191919",
        marginTop: "5px",
        padding: "5px 10px",
        textAlign: "center",
        color: "#fff"
    })

    const StyledOption = styled(Button)({
        padding: "14px",
        border: "2px solid gray",
        borderRadius: "5px",
        cursor: "pointer",
        width: "180px",
        textAlign: "center",
        ":hover": {
            backgroundColor: "#fff",
            border: "2px solid #fff",
            color: "#000"
        }
    })

    const handleClickOnOptions = (item, idx) => {
        setCurrentSelected(idx)
        setCurrentSelectedItem(item)
    }

    const onSubmit = () => {
        if (currentSelectedOp === null)
            return

        if (currentSelectedItem === questions[Number(id)].correct) {
            dispatch(setScore(1))
        }
        
        if (Number(id) >= 9) {
            console.log('score: ',score);
            if(Number(score) > 5){
                navigate('/pass')
            }else{
                navigate('/fail')
            }
            localStorage.removeItem('quizApp_react')
            return
        }
        
        navigate(`/${Number(id) + 1}`)
    }


    if (!(+id >= 0 && +id < 11)) {
        return <Stack minHeight="100vh" minWidth="100%" justifyContent="center" alignItems="center">
            <Typography textAlign="center" variant='h4' color="#fff"> Invalid Question Id </Typography>
        </Stack>

    }


    return (
        <Box>
            <Stack flexDirection="row" justifyContent="space-between">
                <Box>
                    <Typography variant='p' component='p' color="#FF6B2F">Question</Typography>
                    <StyledTypography variant='p' component='p'>{+id+1}/10</StyledTypography>
                </Box>

                <Box>
                    <Typography variant='p' component='p' textAlign="right" color="#FF6B2F">Timer</Typography>
                    <StyledTypography id='timer' variant='p' component='p'>00:60</StyledTypography>
                </Box>
            </Stack>



            <Box sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                width: "400px"
            }}>

                <Typography variant='p' component='p' fontSize={20} textAlign="center">{currentQuestion?.question}</Typography>

                <Grid container spacing={0} mt="50px">

                    {currentQuestion?.options.map((item, idx) => {
                        return <Grid item xs={6} mt="20px" key={idx} >
                            <StyledOption className={currentSelectedOp === idx && 'option__active'} variant='p' component='p' onClick={() => handleClickOnOptions(item, idx)}>{item}</StyledOption>
                        </Grid>
                    })}

                </Grid>

            </Box>


            <Box sx={{
                position: "absolute",
                width: "400px",
                bottom: "20px"
            }}>

                <Button onClick={onSubmit} variant='contained' sx={{ width: "390px",
                 padding: "15px 0",
                 background: currentSelectedOp !== null ? "#FF6B2F" : "gray",
                 "&:hover": { 
                     background: currentSelectedOp !== null ? "#FF6B2F" : "gray", 
                     cursor: currentSelectedOp !== null ? "pointer" : "auto"
                     } }}>Submit</Button>

            </Box>
        </Box>
    )
}

export default Quiz