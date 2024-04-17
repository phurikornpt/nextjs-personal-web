
import { Box, Typography } from '@mui/material';
import { param } from '../fonts';

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
          fontSize:'0.75rem'
      }} className={`${param.className}`}>
            Created by phurikorn.t at 2024 with Typescript + nextjs + mui .
      </Typography>
      <Typography  sx={{
          color: '#fff',
          fontWeight: '300',
          fontSize:'0.55rem',
          alignSelf:'end',
          marginRight:'20px'
      }} className={`${param.className}`}>
            🔥YNWA
      </Typography>

    </Box>
  )
}


export default Footer