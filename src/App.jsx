import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import  ExerciseDetail  from './pages/ExerciseDetail';
import Home from './pages/Home';
import Exercises from './components/Exercises';

const App = () => {
  return (
    <Box width="400px" sx={{width: {1:'1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
            <Route path='/exercise/' element={<Exercises/>}></Route>
           
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App