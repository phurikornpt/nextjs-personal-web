"use client"
import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-scroll'
import { fraunces, paramThai } from '../fonts'

const profileContent = `Hi, I'm Phu. I'm a fourth-year student will graduate this year. This webpage will be my profile.
`
const Profile = () => {
  const {
    offsetScroll,
    durationScroll
  } = {
    offsetScroll: -50,
    durationScroll: 800
  }
  return (
    <Box id='Profile'>
      {/* Desktop */}
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
      }}>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '50px',
              margin: '100px auto',
              background: 'rgb(255,255,255,.75)',
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
                  maxWidth:'80%',
                }} className={`${paramThai.className}`}>
                  {profileContent}
              </Typography>
              
              <Box sx={{
                marginTop: '45px',
                display: 'flex',
                gap: '20px',
              }}>

              <Button variant="outlined" href='/profile/phurikorn-resume.pdf' target='_blank' sx={{
                background: 'white',
                color: '#2B3C2C',
                borderRadius: '0px',
                borderColor: '#2B3C2C',
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
                <Link
                  style={{cursor:'pointer'}}
                  to="Contract" 
                  spy={true} 
                  smooth={true} 
                  offset={offsetScroll} 
                  duration={durationScroll}
                >
                  <Typography variant='h6' sx={{
                    fontWeight: '700',
                  }} className={`${fraunces.className}`}>
                    Contract Me
                  </Typography>
                </Link>
              </Button>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
      {/* Mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2rem',
        margin: '0px',
        height: '50rem',
        backgroundImage:'url(profile/bg-image.jpg)',
        backgroundSize:'cover',
      }}>
        <Grid container>
          <Grid item xs={12} sx={{
            margin: '100px 5vw 0px 5vw',
          }}>
            <Box sx={{
              padding: '20px 20px',
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
                  {profileContent}
              </Typography>

              <Box sx={{
                marginTop: '45px',
                display: 'flex',
                gap: '20px',
              }}>

                <Button variant="contained" href='/profile/phurikorn-resume.pdf' target='_blank'  sx={{
                  background: 'white',
                  color: '#2B3C2C',
                  borderRadius: '0px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#2B3C2C',
                    color: 'white',
                  }
                }}>
                  <Typography variant='body2' sx={{
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
                  <Link
                    style={{cursor:'pointer'}}
                    to="Contract" 
                    spy={true} 
                    smooth={true} 
                    offset={offsetScroll} 
                    duration={durationScroll}
                  >
                    <Typography variant='body2' sx={{
                      fontWeight: '700',
                    }} className={`${fraunces.className}`}>
                      Contract Me
                    </Typography>
                  </Link>
                </Button>
              </Box>

            </Box>

            
            

          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Profile