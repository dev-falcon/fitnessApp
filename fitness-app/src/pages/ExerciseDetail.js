import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

import { exerciseOptions, featchData, YoutubeOptions } from '../utils/FetchData'
// import { Details } from '@mui/icons-material'


const ExerciseDetail = () => {



  const [exerciseDetail, setexerciseDetail] = useState({});

  const [exerciseVideos, setexerciseVideos] = useState([]);

  const [targetMuscleExercises, settargetMuscleExercises] = useState([])

  const [equipmentExercises, setequipmentExercises] = useState([])


  const { id } = useParams();

  useEffect(() => {

    const fetchExercisesData = async () => {

      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";

      const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


      const exerciseDetailData = await featchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      setexerciseDetail(exerciseDetailData); 


      const exerciseVideosData=await featchData(`${YoutubeSearchUrl}/search?query=${exerciseDetailData.name}exercise`,YoutubeOptions);

      setexerciseVideos(exerciseVideosData.contents);


      const targetMuscleExercisesData=await featchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);

      settargetMuscleExercises(targetMuscleExercisesData);


      const equipmentExercisesData=await featchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);

      setequipmentExercises(equipmentExercisesData);

    }

    fetchExercisesData();


  }, [id])





  return (


    <>

      <Box>

        <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
        <SimilarExercises  
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
         />



      </Box>



    </>
  )
}

export default ExerciseDetail