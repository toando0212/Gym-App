import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/dumbell.png'

const Footer = () => {
  return (
    <Box mt="80px"
         bgcolor="#fff3f4">
      <Stack gap="40px"
             alignItems="center"
             px="40px" pt="24px">
        <img src={Logo} width='90px'/>
        <Typography fontWeight="90">
          DT Gym since 2024
        </Typography>
        
      </Stack>
    </Box>
  )
}

export default Footer