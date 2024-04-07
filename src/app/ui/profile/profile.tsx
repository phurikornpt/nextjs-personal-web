
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'

const Profile = () => {
  return (
    <>
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2rem',
        margin: '0px',
        height: '50rem',
        backgroundImage:'url(profile/bg-image.jpg)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'repeat',
      }}>
        <Grid container spacing={3}>
          <Grid item xs={6} sx={{
            margin: '100px 0px 0px 5vw',
          }}>
            <Box sx={{
              padding: '50px 50px',
              background: 'rgb(255,255,255,.85)',
              
            }}>
              <Typography variant='h3' sx={{
                  color: '#2B3C2C',
                  fontWeight: '700',
                }} className={`${fraunces.className}`}>
                  Hello world
              </Typography>

              <Typography variant='h6' sx={{
                  color: '#2B3C2C',
                  fontWeight: '500',
                  marginTop: '20px',
                }} className={`${paramThai.className}`}>
                  สวัสดีครับ ผมชื่อภูนะครับเป็นนักศึกษาชั้นปีที่ 4 กำลังจะจบการศึกษาในปีนี้ครับ
                  ผมสนใจในตำเเหน่ง Junior Backend Developer ครับ เเละใน Website นี้จะเป็น Profile ของผมครับ
              </Typography>

            </Box>

            <Box sx={{
              marginTop: '45px',
              display: 'flex',
              gap: '20px',
            }}>

              <Button variant="contained" sx={{
                background: 'white',
                color: '#2B3C2C',
                borderRadius: '0px',
                textTransform: 'none',
                padding: '20px 25px',
                '&:hover': {
                  backgroundColor: '#2B3C2C',
                  color: 'white',
                }
              }}>
                <Typography variant='h6' sx={{
                  fontWeight: '700',
                }} className={`${fraunces.className}`}>
                  Download Resume
                </Typography>
              </Button>

              <Button variant="contained" sx={{
                background: '#2B3C2C',
                color: 'white',
                borderRadius: '0px',
                textTransform: 'none',
                padding: '20px 25px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#2B3C2C',
                }
              }}>
                <Typography variant='h6' sx={{
                  fontWeight: '700',
                }} className={`${fraunces.className}`}>
                  Contract Me
                </Typography>
              </Button>
            </Box>
            
            

          </Grid>

          <Grid item xs={6}>
            
          </Grid>
        </Grid>
        {/* <Box sx={{
          // display: 'flex',
          // alignItems: 'start',
          gap: '20px',
          margin: '100px 150px 0px 150px',
        }}>
          <Box sx={{
            backgroundColor: 'white',
          }}>
            <Box sx={{
              margin: '30px',
            }}>

              <Typography variant='h5' sx={{
                  // color: '#2B3C2C'
                }} className={`${fraunces.className}`}>
                  Contract
              </Typography>

            </Box>

          </Box>

        </Box> */}
      </Box>
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2rem',
        margin: '0px',
        height: '50rem',
        backgroundImage:'url(profile/bg-image.jpg)',
        // backgroundPosition:'',
        backgroundSize:'cover',
        backgroundRepeat:'repeat',
      }}>
        <Grid container>
          <Grid item xs={12} sx={{
            margin: '100px 5vw 0px 5vw',
          }}>
            <Box sx={{
              padding: '50px 50px',
              background: 'rgb(255,255,255,.85)',
              
            }}>
              <Typography variant='h4' sx={{
                  color: '#2B3C2C',
                  fontWeight: '700',
                }} className={`${fraunces.className}`}>
                  Hello world
              </Typography>

              <Typography variant='body1' sx={{
                  color: '#2B3C2C',
                  fontWeight: '500',
                  marginTop: '20px',
                }} className={`${paramThai.className}`}>
                  สวัสดีครับ ผมชื่อภูนะครับเป็นนักศึกษาชั้นปีที่ 4 กำลังจะจบการศึกษาในปีนี้ครับ
                  ผมสนใจในตำเเหน่ง Junior Backend Developer ครับ เเละใน Website นี้จะเป็น Profile ของผมครับ
              </Typography>

            </Box>

            <Box sx={{
              marginTop: '45px',
              display: 'flex',
              gap: '20px',
            }}>

              <Button variant="contained" sx={{
                background: 'white',
                color: '#2B3C2C',
                borderRadius: '0px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#2B3C2C',
                  color: 'white',
                }
              }}>
                <Typography variant='body1' sx={{
                  fontWeight: '700',
                }} className={`${fraunces.className}`}>
                  Download Resume
                </Typography>
              </Button>

              <Button variant="contained" sx={{
                background: '#2B3C2C',
                color: 'white',
                borderRadius: '0px',
                textTransform: 'none',
                padding: '15px 20px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#2B3C2C',
                }
              }}>
                <Typography variant='body1' sx={{
                  fontWeight: '700',
                }} className={`${fraunces.className}`}>
                  Contract Me
                </Typography>
              </Button>
            </Box>
            
            

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Profile