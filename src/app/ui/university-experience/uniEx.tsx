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
      date:"[ September 2021 ] ",
      title: "Developing robots for the Ministry of Higher Education, Science, Research and Innovation combat the COVID-19 pandemic",
      description: `The robotics programming development team is working on creating a system to control RF signals, allowing for movement
      control, spraying commands, and UVC light 
      projection. This includes 
      `,
      descriptionPreLine:`• mist spraying (ULV)
      • UVC light projection
      `,
      image: "/images/activity/robot.jpg",
      tools: ['/images/tools/arduino.png'],
    },
    {
      date:"[ March 2022 ] ",
      title: "Second Place Winner Robot CARC Competition",
      description: `The robotics programming development team participates in competitions involving autonomous robot missions such as `,
      descriptionPreLine:`• separate balls colored 
      • scanning QR codes
      • driving robots to follow predefined 
      `,
      image: "/images/activity/carc.jpg",
      tools: ['/images/tools/arduino.png','/images/tools/labview.png'],
    },
    {
      date:"[ 2021 - 2023 ] ",
      title: "Being a training speaker at the STEM Robotics event",
      description: `As a trainer in robotics systems, I teach programming in C/C++ to control robots at King Mongkut's University of Technology North Bangkok.
      `,
      descriptionPreLine:`• Introducing students to robotics.
      • Teaching programming in C/C++.`,
      image: "/images/activity/stem.jpg",
      tools: ['/images/tools/arduino.png'],
    },
    {
      date:"[ 2021 - Present ]",
      title: "Tutor",
      description: `Tutor in programming`,
      descriptionPreLine:`Base on project
      • Python
      • Arduino / Robot`,
      image: "/images/activity/tutor.png",
      tools: ['/images/tools/arduino.png' , '/images/tools/python.png'],
    },
  ]
}

const UniExperience = () => {
  const sliderRef = useRef<any>(null);
  const scroll = 450;
  const [leftButton, setLeftButton] = useState(false);
  const [dtWidth , dtHeight] = [400,280]
  const [mbWidth , mbHeight] = [280,180]
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
              <CardEx devices='desktop' cardEx={universityEx.cardEx} />
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
        // height: '45rem',
        paddingBottom: '50px',
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
              <CardEx devices='mobile' cardEx={universityEx.cardEx}/>
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