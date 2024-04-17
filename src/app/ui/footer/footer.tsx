
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Footer = () => {
  return (
    <Box id='Skill' sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '4rem',
      background:'#171717',
    }}>
      
      <Typography  sx={{
          color: '#fff',
          fontWeight: '300',
          fontSize:'0.6rem'
      }} className={`${param.className}`}>
            Created by phurikorn.t at 2024 used with nextjs  / ui with mui .
      </Typography>
      <Typography  sx={{
          color: '#fff',
          fontWeight: '300',
          fontSize:'0.4rem',
          alignSelf:'end',
          marginRight:'20px'
      }} className={`${param.className}`}>
            🔥YNWA
      </Typography>

    </Box>
  )
}


export default Footer