import React, {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({exercises, setExercises, bodyPart}) => {
  console.log(exercises)
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      }
      else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }

      setExercises(exercisesData)
    }
    fetchExercisesData()
  },[bodyPart])
  return (
    <Box id="exercises"
         sx={{mt: {lg: '110px'}}}
         mt="50px"
         p="20px">
          <Typography variant='h3'
                      mb>
            Showing Results
          </Typography>
          <Stack direction="row"
                 sx={{gap: {lg: '110px', xs:'50px'}}}
                 flexWrap="wrap"
                 justifyContent="center">
            {exercises.map((exercise, index) => (
              <ExerciseCard key={index}
                            exercise={exercise}/>
            ))}
          </Stack>
          {/* <Stack mt="100px"
                 alignItems="center"
                 >
           

          </Stack> */}
    </Box>
  )
}

export default Exercises