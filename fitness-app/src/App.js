import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Box } from '@mui/system';

import ExerciseDetail from './pages/ExerciseDetail';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <>

      <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">


 
        <BrowserRouter >
          <Navbar />



          <Routes>
            <Route path='/'
              element={<Home />} />

            <Route path="/exercise/:id" element={<ExerciseDetail />} />



          </Routes>

          <Footer />








        </BrowserRouter>



      </Box>


    </>
  );
}

export default App;
