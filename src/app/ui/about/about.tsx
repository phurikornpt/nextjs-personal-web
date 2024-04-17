
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'
const about = `ผมนาย ภูริกรณ์ ทองย้อย  กำลังศึกษาอยู่ในระดับปริญญาตรี ปีที่ 4 สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (EnET) 
คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
กำลังจะจบการศึกษาในเดือนเมษายนครับ 
ผ่านการฝึกงานที่บริษัท Codemonday ตำเเหน่ง Backend Developer 4 เดือน
ในตอนนี้ผมกำลังมองหางานในตำเเหน่ง Junior Backend Developer
พร้อมเริ่มงานวันที่ 1 พฤษภาคม 2567 นี้ครับ
`
const About = () => {
  return (
    <Box id='About'>
      {/* Desktop */}
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        flexDirection: 'column',
        background: 'rgb(230,231,225,.6)',
        color: 'black',
        fontSize: '2rem',
        padding: '10px 0px',
        height: '50rem',
      }}>
        <Box sx={{
          margin: '100px 0px 30px 150px',
        }}>

          <Box>
              <Typography variant='h3' sx={{
                  color: '#2B3C2C',
                  fontWeight: '700',
              }} className={`${fraunces.className}`}>
                  ABOUT
              </Typography>
          </Box>

        
        </Box>
        <Box sx={{
          margin: '50px 0px 30px 150px',
          display: 'flex',
          gap:'20px'
        }}>
              <Image src='/profile/myself01.jpg' 
                  width={300} 
                  height={350}
                  style={{
                    objectFit: 'cover',
                  }}
                  alt='profile' 
              />
              <Typography variant='h6' sx={{
                color: '#2B3C2C',
                fontWeight: '300',
                whiteSpace: 'pre-line',
              }} className={`${paramThai.className}`}>
                {about}
              </Typography>
        </Box>
      </Box>
      {/* Mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgb(230,231,225,.6)',
        color: 'black',
        padding: '50px 50px',
        height: '35rem',
      }}>
          <Typography variant='h4' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              marginBottom: '30px',
          }} className={`${fraunces.className}`}>
              ABOUT
          </Typography>
          <Image src='/profile/myself01.jpg' 
                width={250} 
                height={200}
                style={{
                  objectFit: 'contain',
                }}
                alt='profile' 
          />
          <Box sx={{
                margin: '30px 0px 0px 0px',
              }}>

              <Typography variant='body1' sx={{
                color: '#2B3C2C',
                
                fontWeight: '300',
                whiteSpace: 'pre-line',
              }} className={`${paramThai.className}`}>
                {about}
              </Typography>
              
          </Box>
      </Box>
    </Box>
  )
}

export default About