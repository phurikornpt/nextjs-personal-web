// 'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { paramThai } from '../fonts'

export type CardExProps = {
  cardEx:{
    date:string,
    title: string,
    description: string,
    image?: string,
    tools: string[],
  }[],
  devices?:string
}

const CardEx = (props:CardExProps) => {
  const {
    cardEx,
    // size,
    devices
  } = props

  /*
  ########################
  Default size is Desktop
  ########################
  */

  let size = {
    width: 400,
    height: 280,
  }
  let padding = '45px 25px 25px 25px'
  switch (devices) {
    case 'mobile':
      size.width = 280
      size.height = 180
      // padding = '15px'
      break
  }
  return (
    cardEx.map((value,index) => {
      return (
        <Box key={index} sx={{
          margin: '5px 10px 0px 0px',
          padding: {padding},
          bgcolor:'rgb(255,255,255,0.85)',
          borderRadius: '0.5rem',
          maxWidth: '500px',
          borderShadow: '5px 10px red',
          cursor: 'pointer',
          transition: '0.5s',
          '&:hover': {
            transform: 'scale(1.015)',
            transition: '0.5s',
          }
        }}>
          <Typography  variant='body1' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
          }} className={`${paramThai.className}`}>
              {value.date}
          </Typography>
          <Box  sx={{ textAlign:'center'}}>
            {
              value.image ?
              <Image
                src={value?.image}
                width={size.width}  
                height={size.height}
                alt="Picture of the author"
                style={{
                  margin: '10px 0px',
                  // objectFit: 'fill',
                }}
                
              />
              : <></>
            }
            
          </Box>
    
          <Typography variant='body1' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
            whiteSpace: 'pre',
          }} className={`${paramThai.className}`}>
              {value.title}
          </Typography>
    
          <Typography  sx={{
            color: '#2B3C2C',
            fontWeight: '400',
            marginTop: '10px',
            fontSize: '0.8rem',
            whiteSpace: 'pre',
          }} className={`${paramThai.className}`}>
              {value.description}
          </Typography>
          <Box  sx={{
            display:'flex',
            alignItems: 'center',
            marginTop: '25px',
            gap: '15px',
          }}>
            {value.tools.map((tool) => {
              return (<>
                  <Image
                  src={tool}
                  width={52}
                  height={32}
                  alt="Picture of the author"
                  style={{
                    objectFit: 'contain',
                  }}
                  />
              </>)
            })
            }
          </Box>
        </Box>
      )
    })  
  )
}

export default CardEx