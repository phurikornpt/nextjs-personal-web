
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'

const About = () => {
  return (
    <Box id='About'>
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2rem',
        margin: '10px 0px',
        height: '30rem',
      }}>
        <Box sx={{
          margin: '0px 0px 0px 1vw',
        }}>

        <Typography variant='h3' sx={{
          color: '#2B3C2C',
          fontWeight: '700',
        }} className={`${fraunces.className}`}>
          About
        </Typography>
        
        </Box>

        <Box sx={{
          margin: '0px 0px 0px 1vw',
          // width: '400px',
          // border: '1px solid black',
        }}>

        <Image 
          src={'/images/a2.png'}
          width={300}
          height={350}
          alt="Picture of the author"
        />
        </Box>

        <Box sx={{
          margin: '0px 0px 0px 1vw',
          border: '1px solid',
          borderColor: '#2B3C2C',
          maxWidth: '500px',
          padding: '30px 20px',
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

      </Box>
    </Box>
  )
}

export default About