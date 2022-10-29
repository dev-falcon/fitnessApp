import React, { useState, useEffect } from 'react'

import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, featchData } from "../utils/FetchData";

import {HorizontalScrollbar} from './HorizontalScrollbar';
// import Exercises from './Exercises';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  

  const [search, setSearch] = useState("")
 
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{

    const fetchExerciseData=async()=>{

      const bodyPartsData=await featchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);

      setBodyParts(["all", ...bodyPartsData]);
    }

    fetchExerciseData();


  },[])


  const handleSearch = async () => {

    if (search) {

      const exercisesData = await featchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const SearchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
               || exercise.target.toLowerCase().includes(search)
               || exercise.equipment.toLowerCase().includes(search)
               || exercise.bodyPart.toLowerCase().includes(search),
      );


      setSearch("");
      setExercises(SearchedExercises);

      console.log(SearchedExercises)






    }

  }


  return (
    <>
      <Stack alignItems="center" mt="37px"
        justifyContent="center" p="20px" id="exercises">

        <Typography fontWeight='700' sx={{
          fontSize: { lg: '44px', xs: "34px" }, mt: { lg: '280px', xs: "30px" },
          mb: { lg: '50px', xs: "30px" }
        }


        }


          mt="150px" textAlign='center'>


          Awesome Exercises You <br /> Should Know
        </Typography>


        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '11px' }, width: { lg: '1050px', xs: '320px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />

          <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '70px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
            Search
          </Button>
        </Box>


        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} 
        bodyPart={bodyPart} setBodyPart={setBodyPart} bodyParts
         />
      </Box>
        
      






      </Stack>



    </>
  )
}

export default SearchExercises