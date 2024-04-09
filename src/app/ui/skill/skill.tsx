
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'

const Skill = () => {
  return (
    <Box id='Skill' sx={{
      display: { xs: 'none', md: 'flex'},
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      background:'url(/images/bg-02.jpg)',
      backgroundPosition:'center',
      backgroundSize:'cover',
      height: '50rem',

    }}>
      
      <Box sx={{
        margin: '80px 0px 30px 0px',
      }}>
        <Typography variant='h3' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
        }} className={`${fraunces.className}`}>
            SKILLS
        </Typography>
      </Box>

      <Box sx={{
        margin:'0px 80px 80px 80px',
        width: '80%',
        height: '80%',
        background: 'rgba(255, 255, 255, 0.9)',
      }}>
        <Grid container >
          <Grid item xs={6} sx={{
          }}>
            he
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Skill