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
      date:"[ มกราคม 2022 ] ",
      title: "พัฒนาเว็บไซต์ Management ของร้านชาบู",
      description: `พัฒนาเว็บไซต์เเละออกเเบบ Database สำหรับจัดการข้อมูลภายในร้าน
ยกตัวอย่างของระบบ เช่น
    • การตัดสต็อกสินค้ารายวัน
    • รับวัตถุดิบเข้าระบบ
    • การจัดการพนักงาน
    • ออกรายงานยอดขาย

Nodejs/Express.js , EJS , Microsoft Access
      `,
      image: "/images/work-ex/shabu/s1.png",
      tools: ['/images/tools/node.png','/images/tools/ex.png','/images/tools/access.png'],
    },
    {
      date:"[ พฤษภาคม 2022 - มกราคม 2023 ] ",
      title: "ช่วยงานวิจัยของมหาวิทยาลัย พัฒนาระบบควบคุมหุ่นยนต์ AMR",
      description: `พัฒนาเว็บไซต์ควบคุมการทำงานของหุ่นยนต์ 
      • สร้างแผนที่ โดยควบคุมหุ่นยนต์เคลื่อนที่แบบ Manual
      • สร้างแผนการเคลื่อนที่ เลือกตำเเหน่งเเละเส้นทางให้หุ่นยนต์
      • ควบคุมRobot ควบคุมการเคลื่อนที่เเบบอัตโนมัติเเสดงผลตำเเหน่งหุ่นยนต์เรียลไทม์

Ubuntu 18.04 , Nodejs/Express.js , EJS , Websocket , ROS
      `,
      image: "/images/work-ex/robot/robot.png",
      tools: ['/images/tools/node.png','/images/tools/ros.png','/images/tools/ex.png','/images/tools/ws.png'],
    },
    {
      date:"[ กันยายน 2023 ] ",
      title: "ช่วยงานวิจัยของมหาวิทยาลัย ตู้บริจาคข้าวสาร ",
      description: `พัฒนาเว็บไซต์เเละออกเเบบ Database สำหรับเว็บ Dashboard 
เเสดงผลข้อมูลจำนวนผู้ใช้งานเครื่องตู้ข้าวสาร
      • เเสดงจำนวนผู้ใช้งานจำนวน 5 เครื่อง
      • เเสดงระยะเวลาการใช้งานของเครื่อง
      • สามารถเเสดงเป็น Week Month & Year

PHP , MySQL , Hostinger
      `,
      image: "/images/work-ex/sarana/s1.png",
      tools: ['/images/tools/php.png','/images/tools/mysql.png','/images/tools/hostinger.png'],
    },
    {
      date:"[ พฤศจิกายน 2023  - เมษายน 2024 ]",
      title: "ฝึกงานตำเเหน่ง Backend Developer บริษัท Codemonday ",
      description: `• รับผิดชอบในการพัฒนา API และออกแบบฐานข้อมูลของ Module ที่ได้รับมอบหมาย
• พัฒนาระบบ CMS เพื่อการจัดการเนื้อหาและข้อมูลสำหรับให้ User ใช้งาน
• ออกแบบและพัฒนา Email Template สำหรับระบบ Mail sending
• ประสานงานกับ Frontend Designer เเละ QA ในการพัฒนาโปรแกรม`,
      image: "/images/work-ex/internship/in01.png",
      tools: [],
    },
    {
      date:"[ เมษายน 2024 ]",
      title: "Dashboard เเสดงข้อมูลสินค้า Realtime",
      description: `พัฒนาระบบ Dashboard ด้วย Websocket เเสดงข้อมูลสินค้าเเบบ realtime
      • เเสดงข้อมูลสินค้าต่อระยะเวลาที่กำหนด
      • คำนวนค่า OEE , Actual

Nodejs , MariaDB , Websocket`,
      image: "/images/work-ex/dashboard/dash01.png",
      tools: [
        '/images/tools/node.png',
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