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

const workEx:Pick<CardExProps,'cardEx'> = {
  cardEx:[
    {
      date:"[ January 2022 ] ",
      title: "Develop a website for managing the Shabu Buffet restaurant.",
      description: `Develop a website and design a database for internal data management within the restaurant. example`,
      descriptionPreLine:`• Daily inventory management
      • Raw material system intake
      • Employee management
      • Sales report generation 
      `,
      image: "/images/work-ex/shabu/s1.png",
      tools: ['/images/tools/node.png','/images/tools/ex.png','/images/tools/access.png'],
    },
    {
      date:"[ May 2022 - January 2023 ] ",
      title: "Assisting with university research: Developing AMR Robot",
      description: `Develop a robot control website`,
      descriptionPreLine:`• Create a map by manually controlling the mobile robot
      • Create a movement plan, select the robot's position and path
      • Automatically control the robot movement and display the robot's position in real time
      `,
      image: "/images/work-ex/robot/robot.png",
      tools: ['/images/tools/node.png','/images/tools/ros.png','/images/tools/ex.png','/images/tools/ws.png'],
    },
    {
      date:"[ September 2023 ] ",
      title: "Assisting with university research: Rice donates machine",
      description: `Develop a website and design a database for website dashboard to show user data`,
      descriptionPreLine:`• Display user data for 5 machine
      • Show machine usage time
      • Display for weekly, monthly or yearly data`,
      image: "/images/work-ex/sarana/s1.png",
      tools: ['/images/tools/php.png','/images/tools/mysql.png','/images/tools/hostinger.png'],
    },
    {
      date:"[ November 2023  - April 2024 ]",
      title: "Backend Developer Internship at Codemonday",
      description: ``,
      descriptionPreLine:`• Responsible for developing APIs and designing the database schema for assigned modules.
      • Develop a CMS system for content and data management for user accessibility.
      • Design and develop email templates for the mail-sending system.
      • Coordinate with frontend designers project manager and QA personnel in system development.
      `,
      image: "/images/work-ex/internship/in01.png",
      tools: [],
    },
    {
      date:"[ April 2024 ]",
      title: "Develop a website dashboard to show the product information in real-time",
      description: `Develop a website dashboard to show the product information in real-time by using WebSocket`,
      descriptionPreLine:`• Display the product information for a specified time
      • Calculate OEE and Actual values`,
      image: "/images/work-ex/dashboard/dash01.png",
      tools: [
        '/images/tools/node.png',
        '/images/tools/react.png',
        '/images/tools/mariadb.png',
        '/images/tools/ws.png',
      ],
    },
  ]
}

const WorkExperience = () => {
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
    <Box id='WorkExperience'>
      {/* Desktop */}
      <Box sx={{
      display: { xs: 'none', md: 'flex'},
      justifyContent: 'start',
      flexDirection: 'column',
      height: '65rem',
      background:'rgb(235,235,235)',
    }}>
        
        <Box sx={{
          marginLeft: '150px',
        }}>

          <Typography variant='h3' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              margin:'100px 0px 50px 0px'
          }} className={`${fraunces.className}`}>
              WORK EXPERIENCE
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
              <CardEx devices='desktop' cardEx={workEx.cardEx} />
              <Box sx={{visibility:'hidden'}}>
                HelloHelloHelloHelloHelloHello
              </Box>

          </div>
        </Box>
        
      </Box>
      
      {/* Mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        justifyContent: 'start',
        flexDirection: 'column',
        height: '50rem',
        background:'rgb(235,235,235)',
      }}>
        
        <Box sx={{
          margin: '0px 10px 10px 10px',
        }}>
          <Typography variant='h4' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              margin: '100px 0px 50px 0px',

          }} className={`${fraunces.className}`}>
              WORK EXPERIENCE
          </Typography>

          <div className={Style.itemContainer}>
              <CardEx devices='mobile' cardEx={workEx.cardEx} />
              <Box sx={{visibility:'hidden'}}>
                HelloHelloHelloHelloHelloHello
              </Box>

          </div>
        </Box>
        
      </Box>
    </Box>
  )
}

export default WorkExperience