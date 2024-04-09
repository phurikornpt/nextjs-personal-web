
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Contract = () => {
  return (
    <Box id='Skill' sx={{
      display: { xs: 'none', md: 'flex'},
      justifyContent: 'start',
      flexDirection: 'column',
      height: '30rem',
      paddingBottom:'100px',
      background:'#2B3C2C',
    }}>
      
      <Box sx={{
        margin: '100px 0px 30px 150px',
      }}>
        <Typography variant='h3' sx={{
            color: '#fff',
            fontWeight: '700',
        }} className={`${fraunces.className}`}>
            CONTRACT
        </Typography>
      </Box>

      <Box sx={{
        margin: '20px 150px 90px 220px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}>
          <LocalPhoneOutlinedIcon/>
          <Typography variant='h5' sx={{
            color: '#fff',
            fontWeight: '400',
          }} className={`${param.className}`}>
              062-5976969
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}>
          <LocalPhoneOutlinedIcon/>
          <Typography variant='h5' sx={{
            color: '#fff',
            fontWeight: '400',
          }} className={`${param.className}`}>
              062-5976969
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}>
          <LocalPhoneOutlinedIcon/>
          <Typography variant='h5' sx={{
            color: '#fff',
            fontWeight: '400',
          }} className={`${param.className}`}>
              062-5976969
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#fff',
        }}>
          <LocalPhoneOutlinedIcon/>
          <Typography variant='h5' sx={{
            color: '#fff',
            fontWeight: '400',
          }} className={`${param.className}`}>
              062-5976969
          </Typography>
        </Box>
      </Box>

    </Box>
  )
}

/**
 * 
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

 */
export default Contract