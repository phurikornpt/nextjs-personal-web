
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'


const skills:Record<string,string[]> = {
  'Backend': [
    'Javascript/Typescript',
    'Python , C/C++',
    'Node.js / Express.js',
    'Nest.js',
    'PostgreSQL , MongoDB',
    'Prisma , TypeORM',
    'Docker',
  ],
  'Frontend': [
    'HTML / CSS',
    'React / Next.js',
    'Mui , tailwind',
  ],
  'Tools':[
    "Postman",
    "Git/Github",
    "Jira , Miro",
    "Notion"
  ],
  'Robot/IOT':[
    'Arduino / esp',
    'Ubuntu / ros',
    'Raspberry pi',
  ],
  'CMS':[
    'PayloadCMS'
  ],
  'Languages':[
    'Thai ( Native )',
    'English ( B1 )',
  ]
}

const Skill = () => {
  return (
    <Box id='Skill' sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      background:'url(/images/bg-02.jpg)',
      backgroundPosition:'center',
      backgroundSize:'cover',
      height: '55rem',
    }}>
      
      <Box sx={{
        display: {xs:'none',md:'flex'},
      }}>
        <Typography variant='h3' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
            marginBottom:'70px'
        }} className={`${fraunces.className}`}>
            SKILLS
        </Typography>
      </Box>

      {/* for mobile */}
      <Box sx={{
        display: {xs:'flex',md:'none'},
      }}>
        <Typography variant='h4' sx={{
            color: '#2B3C2C',
            fontWeight: '700',
            margin:'100px 0px 50px 0px'
        }} className={`${fraunces.className}`}>
            SKILLS
        </Typography>
      </Box>
      
      <Box sx={{
        background: 'rgba(255, 255, 255, 0.55)',
        padding:{xs:'20px 20px',md: '70px 30px'},
        margin:{xs:'0px 50px 50px 50px',md:'0px'}
      }}>
        <Grid container sx={{
          textAlign: 'center',
        }}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              }} className={`${param.className}`}>
                  Backend
            </Typography>
            <ul 
              className={`${param.className}`} 
              style={{
                display:'inline-block',
                textAlign:'left',
                fontWeight: '300',
                fontSize: '1.1rem',
              }}
            >
              { skills['Backend'].map((value,index) => <li key={index}>{value}</li>)}
            </ul>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant='h6' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              }} className={`${param.className}`}>
                  Frontend
            </Typography>
            <ul 
              className={`${param.className}`} 
              style={{
                display:'inline-block',
                textAlign:'left',
                fontWeight: '300',
                fontSize: '1.1rem',
              }}
            >
              { skills['Frontend'].map((value,index) => <li key={index}>{value}</li>)}
            </ul>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography  variant='h6' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              }} className={`${param.className}`}>
                  Tools
            </Typography>
            <ul 
              className={`${param.className}`} 
              style={{
                display:'inline-block',
                textAlign:'left',
                fontWeight: '300',
                fontSize: '1.1rem',
              }}
            >
              { skills['Tools'].map((value,index) => <li key={index}>{value}</li>)}
            </ul>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant='h6' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              }} className={`${param.className}`}>
                  Robot/IOT
            </Typography>
            <ul 
              className={`${param.className}`} 
              style={{
                display:'inline-block',
                textAlign:'left',
                fontWeight: '300',
                fontSize: '1.1rem',
              }}
            >
              { skills['Robot/IOT'].map((value,index) => <li key={index}>{value}</li>)}
            </ul>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant='h6' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              }} className={`${param.className}`}>
                  CMS
            </Typography>
            <ul 
              className={`${param.className}`} 
              style={{
                display:'inline-block',
                textAlign:'left',
                fontWeight: '300',
                fontSize: '1.1rem',
              }}
            >
              { skills['CMS'].map((value,index) => <li key={index}>{value}</li>)}
            </ul>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography  variant='h6' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              textAlign: 'center',
              }} className={`${param.className}`}>
                  Languages
            </Typography>
            <ul 
              className={`${param.className}`} 
              style={{
                display:'inline-block',
                textAlign:'left',
                fontWeight: '300',
                fontSize: '1.1rem',
              }}
            >
              { skills['Languages'].map((value,index) => <li key={index}>{value}</li>)}
            </ul>
          </Grid>
        </Grid>

      </Box>
    </Box>
  )
}

export default Skill