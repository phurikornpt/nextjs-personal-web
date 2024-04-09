'use client'
import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'

import Style from './style.module.css'
import CardEx from './card-ex'
import { IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const WorkExperience = () => {
  const sliderRef = useRef<any>(null);
  const scroll = 450;
  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(false);

  const handleScroll = () => {
    
    // if(sliderRef.current.scrollLeft > 0){
    //   setLeftButton(true)
    // }else{
    //   setLeftButton(false)
    // }
  }
  return (
    <Box id='Skill' sx={{
      // display: { xs: 'none', md: 'flex'},
      display: 'flex',
      justifyContent: 'start',
      flexDirection: 'column',
      height: '60rem',
      background:'rgb(235,235,235)',
    }}>
      
      <Box sx={{
        margin: '100px 0px 30px 150px',
      }}>

        <Typography variant='h3' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
        }} className={`${fraunces.className}`}>
            WORK EXPERIENCE
        </Typography>

        <div className={Style.itemContainer} ref={sliderRef} onMouseOver={handleScroll}>
            <IconButton sx={{
              position: 'absolute',
              zIndex: '1',
              alignSelf: 'center',
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
     
            <CardEx cardEx={[
              {
                date:"[ มกราคม 2022 ] ",
                title: "พัฒนาเว็บไซต์ Management ของร้านชาบู",
                description: `พัฒนาเว็บไซต์เเละออกเเบบ Database สำหรับจัดการข้อมูลภายในร้าน
                Nodejs/Express.js , EJS , Access
                `,
                image: "/images/work-ex/shabu/s1.png",
                tools: ['/images/tools/node.png','/images/tools/access.png'],
              },
              {
                date:"[ พฤษภาคม 2022 - มกราคม 2023 ] ",
                title: "ช่วยงานวิจัยของมหาวิทยาลัย พัฒนาระบบควบคุมหุ่นยนต์ AMR",
                description: `พัฒนาเว็บไซต์ควบคุมการทำงานของหุ่นยนต์ สร้างแผนที่ สร้างแผนการเคลื่อนที่ เเละเเสดงผลตำเเหน่งหุ่นยนต์เรียลไทม์
                Ubuntu 18.04 , Nodejs/Express.js , EJS , Websocket , ROS
                `,
                image: "/images/work-ex/robot/robot.png",
                tools: ['/images/tools/node.png','/images/tools/ros.png','/images/tools/ex.png','/images/tools/ws.png'],
              },
              {
                date:"[ พฤษภาคม 2022 - มกราคม 2023 ] ",
                title: "ช่วยงานวิจัยของมหาวิทยาลัย พัฒนาระบบควบคุมหุ่นยนต์ AMR",
                description: `พัฒนาเว็บไซต์ควบคุมการทำงานของหุ่นยนต์ สร้างแผนที่ สร้างแผนการเคลื่อนที่ เเละเเสดงผลตำเเหน่งหุ่นยนต์เรียลไทม์
                Ubuntu 18.04 , Nodejs/Express.js , EJS , Websocket , ROS
                `,
                // image: "/images/work-ex/robot/robot.png",
                tools: ['/images/tools/node.png','/images/tools/ros.png','/images/tools/ex.png','/images/tools/ws.png'],
              },
              {
                date:"[ มกราคม 2023 ] ",
                title: "พัฒนาเว็บไซต์ Management ของร้านชาบู",
                description: `พัฒนาเว็บไซต์เเละออกเเบบ Database สำหรับจัดการข้อมูลภายในร้าน
                Nodejs/Express.js , EJS , Access
                `,
                image: "/images/work-ex/shabu/s1.png",
                tools: ['/images/tools/node.png','/images/tools/access.png'],
              },
            ]} />
        </div>
      </Box>
      
    </Box>
  )
}

export default WorkExperience