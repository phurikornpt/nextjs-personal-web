
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
      display: { xs: 'none', md: 'flex'},
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '4rem',
      background:'#171717',
    }}>
      
      <Typography variant='body2' sx={{
            color: '#fff',
            fontWeight: '300',
          }} className={`${param.className}`}>
            this website make by phurikorn.t at 2024 create with nextjs  / ui with mui .
      </Typography>
    </Box>
  )
}


export default Footer