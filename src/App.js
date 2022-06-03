import React from 'react'
import Login from './pages/Login'
import { Box, Container } from '@mui/material'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Quiz from './pages/Quiz';
import Pass from './pages/Pass';
import Fail from './pages/Fail';

const App = () => {
  return (
    <Box width="400px" margin="auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:id" element={<Quiz />} />
          <Route path="/pass" element={<Pass />} />
          <Route path="/fail" element={<Fail />} />
        </Routes>
      </BrowserRouter>

    </Box>

  )
}

export default App