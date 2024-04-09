
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'

const UniExperience = () => {
  return (
    <Box id='Skill' sx={{
      display: { xs: 'none', md: 'flex'},
      justifyContent: 'start',
      height: '50rem',
      background:'rgb(235,235,235,0.45)',
    }}>
      
      <Box sx={{
        margin: '100px 0px 30px 150px',
      }}>
        <Typography variant='h3' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
        }} className={`${fraunces.className}`}>
            UNIVERSITY EXPERIENCE
        </Typography>
      </Box>

    </Box>
  )
}

export default UniExperience