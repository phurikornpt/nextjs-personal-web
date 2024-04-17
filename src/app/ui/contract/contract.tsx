
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { fraunces, param, paramThai } from '../fonts'
import Image from 'next/image'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
const Contract = () => {
  return (
    <Box id='Contract'>
      {/* Desktop */}
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        justifyContent: 'start',
        flexDirection: 'column',
        height: '30rem',
        paddingBottom:'100px',
        background:'#2B3C2C',
      }}>
        
        <Box sx={{
          margin: '100px 0px 30px 150px',
        }}>
          <Typography variant='h3' sx={{
              color: '#fff',
              fontWeight: '700',
          }} className={`${fraunces.className}`}>
              CONTRACT
          </Typography>
        </Box>

        <Box sx={{
          margin: '20px 150px 90px 220px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <LocalPhoneOutlinedIcon/>
            <Typography variant='h6' sx={{
              color: '#fff',
              fontWeight: '400',
            }} className={`${param.className}`}>
                062-5976969
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <EmailOutlinedIcon/>
            <Typography variant='h6' sx={{
              color: '#fff',
              fontWeight: '400',
            }} className={`${param.className}`}>
                phurikornpt@gmail.com
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <GitHubIcon/>
            <Link href="https://github.com/phurikornpt" className={`${param.className}`} style={{
              color: '#fff',
              fontWeight: '400',
              textDecoration: 'none',
            }}>
              <Typography variant='h6'>
                  phurikornpt
              </Typography>
            </Link>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <GitHubIcon/>
            <Link href="https://github.com/phurkornt" className={`${param.className}`} style={{
              color: '#fff',
              // fontWeight: '400',
              textDecoration: 'none',
            }}>
              <Typography variant='h6'>
                my old git : phurkornt
              </Typography>
            </Link>
          </Box>
          {/* <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <LocalPhoneOutlinedIcon/>
            <Typography variant='h5' sx={{
              color: '#fff',
              fontWeight: '400',
            }} className={`${param.className}`}>
                062-5976969
            </Typography>
          </Box> */}
        </Box>

      </Box>
      {/* Mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        // justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'center',
        height: '30rem',
        paddingBottom:'100px',
        background:'#2B3C2C',
      }}>
        
        <Box sx={{
          marginTop: '100px',
          marginBottom: '50px',
        }}>
          <Typography variant='h4' sx={{
              color: '#fff',
              fontWeight: '700',
          }} className={`${fraunces.className}`}>
              CONTRACT
          </Typography>
        </Box>

        <Box sx={{
          margin: '20px 0px 90px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <LocalPhoneOutlinedIcon/>
            <Typography variant='body1' sx={{
              color: '#fff',
              fontWeight: '400',
            }} className={`${param.className}`}>
                062-5976969
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <EmailOutlinedIcon/>
            <Typography variant='body1' sx={{
              color: '#fff',
              fontWeight: '400',
            }} className={`${param.className}`}>
                phurikornpt@gmail.com
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <GitHubIcon/>
            <Link href="https://github.com/phurikornpt" className={`${param.className}`} style={{
              color: '#fff',
              fontWeight: '400',
              textDecoration: 'none',
            }}>
              <Typography variant='body1'>
                  phurikornpt
              </Typography>
            </Link>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <GitHubIcon/>
            <Link href="https://github.com/phurkornt" className={`${param.className}`} style={{
              color: '#fff',
              textDecoration: 'none',
            }}>
              <Typography variant='body1'>
                my old git : phurkornt
              </Typography>
            </Link>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

/**
 * 
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

 */
export default Contract