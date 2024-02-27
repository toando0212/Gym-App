
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Details from '../components/Details'
import ExercisesVideo from '../components/ExercisesVideo'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState("")
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])


  const {id} = useParams()
  useEffect(() => {
    const fetchExercisesData = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      console.log(exerciseDetailData)

      const exercisesVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      
      setExerciseVideos(exercisesVideoData.contents)
      
      const targetMuscleExercisesData = await fetchData (`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscleExercises(targetMuscleExercisesData)
      
    }
    fetchExercisesData()
  }, [id])


  
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExercisesVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}/>
    </Box>
  )
}

export default ExerciseDetail