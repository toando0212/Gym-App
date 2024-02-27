import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
// const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const SearchExercises = ({setExercises, bodyPart, setBodyPart, isBodyParts}) => {
  // const [search, setSearch] = useState('');
  // const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([]);
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await  fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartData])
    }

    fetchExercisesData()
  },[])
  
  // const handleSearch = async () => {
  //   if(search) {
  //     const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
  //     const searchedExercise = exerciseData.filter(
  //       (exercise) => exercise.name.toLowerCase().includes(search)
  //       || exercise.target.toLowerCase().includes(search)
  //       || exercise.equipment.toLowerCase().includes(search)
  //       || exercise.bodyPart.toLowerCase().includes(search)
        
  //     )

  //     setSearch('')
  //     setExercises(searchedExercise)
  //     console.log(exerciseData)
  //   }
  // }
  return (
    <Stack alignContent="center"
           mt="37px"
           justifyContent="center"
           padding="20px">
      <Typography fontWeight={700}
                  sx={{fontSize:{lg: '44px', xs:'30px'}}}
                  mb="50px"
                  textAlign="center">
        Awesome Exercises For You 
      </Typography>
      {/* <Box position="relative"
           mb="72px"
           alignContent="center" 
           >
         <TextField height="76px"
                   sx={{
                    input: {
                      fontWeight: '700', 
                      border: 'none', 
                      borderRadius:'4px'
                    },
                    width: {lg: '800px', xs: '350px'},
                    backgroundColor: "#fff",
                    borderRadius:'40px'
                   }}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder='Search Exercises'
                   type="text"
        /> 
         <Button className='search-btn'
                sx={{
                  bgcolor: '#ff2625',
                  color:'#fff',
                  fontSize: {lg: '20px', xs: '13px'},
                  width:{lg:'175px', xs:'80px'},
                  height:'56px',
                  position:'absolute', 
                  right:'0'
                }}
                // onClick={handleSearch}
                >
          Search 
         </Button> 


        
      </Box> */}
      <Box sx={{
                position:'relative',
                width:'100%',
                p:'20px'
              }}>
           <HorizontalScrollbar data={bodyParts} 
                                bodyParts={bodyPart}
                                setBodyPart={setBodyPart}
                                isBodyParts  />
                                
               
      </Box>
    </Stack>
  )
}

export default SearchExercises