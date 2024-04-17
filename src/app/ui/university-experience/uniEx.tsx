'use client'
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'

import Style from './style.module.css'
import CardEx, { CardExProps } from '../share/card-ex'
import { IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const universityEx:Pick<CardExProps,'cardEx'> = {
  cardEx:[
    {
      date:"[ กันยายน 2021 ] ",
      title: "ส่งมอบ Robot ให้กับกระทรวง อว. สู้ภัยโควิค",
      description: `ทีมโปรแกรมพัฒนาโปรแกรมควบคุมหุ่นยนต์
      • ไอพ่นละอองฝอย (ULV)
      • หุ่นยนต์ฉายแสง UVC ฆ่าเชื้อโรคและไวรัส`,
      image: "/images/activity/robot.jpg",
      tools: [],
    },
    {
      date:"[ มีนาคม 2022 ] ",
      title: "คว้ารางวัลรองชนะเลิศอันดับ 1 จากการแข่งขันหุ่นยนต์รายการ CARC",
      description: `ทีมโปรแกรมพัฒนาโปรแกรมควบคุมหุ่นยนต์ในการเเข่งขัน
เป็นรายการเเข่งขันหุ่นยนต์อัตโนมัติทำภารกิจเช่น
      • เเยกสีของลูกบอล
      • สเเกน QR Code
      • ขับเคลื่อนหุ่นยนต์ให้เดินตามเส้นทางที่กำหนด
       `,
      image: "/images/activity/carc.jpg",
      tools: [],
    },
    {
      date:"[ 2021 - 2023 ] ",
      title: "เป็นวิทยากรงานอบรมระบบสะเต็มหุ่นยนต์",
      description: `เป็นวิทยากรงานอบรมระบบสะเต็มหุ่นยนต์ สอนเขียนโปรแกรมภาษา C/C++ 
ควบคุมหุ่นยนต์ ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
      • สอนน้องๆให้รู้จักกับหุ่นยนต์
      • สอนเขียนโปรแกรมภาษา C/C++
        `,
      image: "/images/activity/stem.jpg",
      tools: [],
    },
    {
      date:"[ 2021 - ปัจุบัน ]",
      title: "งานพิเศษ",
      description: `เป็นติวเตอร์สอนเขียนโปรแกรมโดยเน้นที่ Project Base Learning
      • Python
      • Arduino / Robot`,
      image: "/images/activity/tutor.png",
      tools: [],
    },
  ]
}

const UniExperience = () => {
  const sliderRef = useRef<any>(null);
  const scroll = 450;
  const [leftButton, setLeftButton] = useState(false);

  const handleOn = () => {
    setLeftButton(true)
  }
  const handleOut = () => {
    setLeftButton(false)
  }
  return (
    <Box id='UniExperience'>
      {/* Desktop */}
      <Box id='Skill' sx={{
      display: { xs: 'none', md: 'flex'},
      flexDirection: 'column',
      height: '60rem',
      background:'rgb(235,235,235,0.45)',
    }}>
        
        <Box sx={{
          margin: '100px 0px 30px 150px',
        }}>

          <Typography variant='h3' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              marginBottom:'50px',
          }} className={`${fraunces.className}`}>
              ACTIVITIES
          </Typography>

          <div className={Style.itemContainer} ref={sliderRef} onMouseOver={handleOn} onMouseOut={handleOut}>
              <IconButton sx={{
                position: 'absolute',
                zIndex: '1',
                alignSelf: 'center',
                visibility: leftButton ? 'visible' : 'hidden',
                transition: 'opacity 0.5s linear',
                opacity: leftButton ? 0.7 : 0
              }} onClick={
                () =>{
                  sliderRef.current.scrollLeft -= scroll;
                }
              }>
                <ArrowCircleLeftIcon sx={{
                  fontSize: '4rem',
                  color: 'rgb(0,20,0,0.65)',
                }}/>
              </IconButton>
              <IconButton sx={{
                position: 'absolute',
                right: '0',
                zIndex: '1',
                alignSelf: 'center',
                transition: 'opacity 0.5s linear',
                opacity: leftButton ? 0.7 : 0
              }} onClick={
                () =>{
                  sliderRef.current.scrollLeft += scroll;
                  console.log(sliderRef.current.scrollLeft);
                  
                }
              } >
                <ArrowCircleRightIcon sx={{
                  fontSize: '4rem',
                  color: 'rgb(0,20,0,0.65)',
                }}/>
              </IconButton>
              <CardEx size={{width:420,height:300}} cardEx={universityEx.cardEx} />
              <Box sx={{visibility:'hidden'}}>
                HelloHelloHelloHelloHelloHello
              </Box>

          </div>
        </Box>
        
      </Box>
      
      {/* Mobile */}
      <Box id='Skill' sx={{
        display: { xs: 'flex', md: 'none'},
        justifyContent: 'start',
        flexDirection: 'column',
        height: '45rem',
        background:'rgb(235,235,235,0.45)',
      }}>
        
        <Box sx={{
          margin: '100px 10px 10px 10px',
        }}>

          <Typography variant='h4' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center'
          }} className={`${fraunces.className}`}>
              ACTIVITIES
          </Typography>

          <div className={Style.itemContainer}>
              <CardEx size={{width:250,height:150}} cardEx={universityEx.cardEx}/>
              <Box sx={{visibility:'hidden'}}>
                HelloHelloHelloHelloHelloHello
              </Box>

          </div>
        </Box>
        
      </Box>
    </Box>
  )
}

export default UniExperience