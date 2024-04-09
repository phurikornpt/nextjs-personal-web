
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'

const About = () => {
  return (
    <Box id='About'>
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        flexDirection: 'column',
        // gap: '20px',
        // alignItems: 'center',
        // justifyContent: 'center',
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

          <Grid container spacing={3}>
            <Grid item xs={8} sx={{
            }}>
              <Box sx={{
                margin: '60px 0px 0px 0px',
              }}>

              <Typography variant='h6' sx={{
                color: '#2B3C2C',
                
                fontWeight: '300',
                whiteSpace: 'pre-lin',
              }} className={`${paramThai.className}`}>
                ผมนาย ภูริกรณ์ ทองย้อย  กำลังศึกษาอยู่ในระดับปริญญาตรี ปีที่ 4 สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ (EnET) 
                คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                กำลังจะจบการศึกษาในเดือนเมษายนครับ 
                ผ่านการฝึกงานที่บริษัท Codemonday ตำเเหน่ง Backend Developer 4 เดือน
                ในตอนนี้ผมกำลังมองหางานในตำเเหน่ง Junior Backend Developer
                พร้อมเริ่มงานวันที่ 1 พฤษภาคม 2567 นี้ครับ
              </Typography>
              
              </Box>
            </Grid>
          </Grid>
          

        </Box>

      </Box>
    </Box>
  )
}

export default About