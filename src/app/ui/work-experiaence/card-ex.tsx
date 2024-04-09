'use client'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { paramThai } from '../fonts'


type CardExProps = {
  cardEx:{
    date:string,
    title: string,
    description: string,
    image?: string,
    tools: string[],
  }[]
}
const CardEx = (props:CardExProps) => {
  const data = props.cardEx

  return (
    data.map((value,index) => {
      return (
        <>
          <Box sx={{
            margin: '5px 10px 0px 0px',
            padding: '45px 25px 25px 25px',
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
            <Typography variant='body1' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
            }} className={`${paramThai.className}`}>
                {value.date}
            </Typography>
            <Box sx={{ textAlign:'center'}}>
              {
                value.image ?
                <Image
                  src={value?.image}
                  width={500}
                  height={330}
                  alt="Picture of the author"
                  style={{
                    objectFit: 'contain',
                  }}
                />
                : <></>
              }
              
            </Box>
      
            <Typography variant='body1' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
            }} className={`${paramThai.className}`}>
                {value.title}
            </Typography>
      
            <Typography  sx={{
              color: '#2B3C2C',
              fontWeight: '400',
              marginTop: '10px',
              fontSize: '0.8rem',
            }} className={`${paramThai.className}`}>
                {value.description}
            </Typography>
            <Box sx={{
              display:'flex',
              alignItems: 'center',
              marginTop: '25px',
              gap: '5px',
            }}>
              {value.tools.map((tool) => {
                return (<>
                    <Image
                    src={tool}
                    width={64}
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
        </>
      )
    })  
  )
}

export default CardEx