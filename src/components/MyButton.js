import { Button } from '@mui/material'
import React from 'react'

const MyButton = ({onSubmit, state, text}) => {
  return (
    <Button onClick={onSubmit} variant='contained' sx={{
        width: "400px",
        padding: "15px 0",
        background: state ? "#FF6B2F" : "gray",
        "&:hover": {
            background: state ? "#FF6B2F" : "gray",
            cursor: state ? "pointer" : "auto"
        }
    }}>{text}</Button>
  )
}

export default MyButton