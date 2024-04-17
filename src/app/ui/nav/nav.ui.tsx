"use client"

import { Box, Button, Divider, Drawer, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import {Link} from 'react-scroll'
import { fraunces } from '../fonts'
import styles from './nav.module.css'
import { useState } from 'react'

const NavUi = () => {
  const {
    offsetScroll,
    durationScroll
  } = {
    offsetScroll: -70,
    durationScroll: 800
  }
  const [isDrawer, setIsDrawer] = useState(false)
  const handleDrawerToggle = () => {
    setIsDrawer((prev) => !prev)
  }
  return (
    <>
      {/* ------------------- Desktop -------------------*/}
      <Box sx={{
        position: 'sticky',
        top: '0',
        zIndex:'1',
        display: { xs: 'none', md: 'flex'},
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2B3C2C',
        color: '#EAF4E8',
        fontSize: '2rem',
        padding:'20px 30px'
      }}>
        <Box >
          <Link
            style={{cursor:'pointer'}}
            to="Profile" 
            spy={true} 
            smooth={true} 
            offset={offsetScroll} 
            duration={durationScroll}
          >
            <Typography variant='h4' sx={{
              color: '#EAF4E8',
              fontWeight: '500',
              '&:hover': {
                fontWeight: '700',
              }
            }} className={`${fraunces.className}`}>
              Phurikorn.t
            </Typography>
          </Link>
        </Box>

        <Box sx={{
          display:'flex',
          alignItems: 'end',
          gap: '15px'
        }} >

          <Link 
            style={{cursor:'pointer'}}
            to="About" 
            spy={true} 
            smooth={true} 
            offset={offsetScroll} 
            duration={durationScroll}
          >
              <Typography variant='h6' sx={{
                color: '#EAF4E8',
                '&:hover': {
                  fontWeight: '700',
                  textDecoration: 'underline solid #EAF4E8'
                }
              }} className={`${fraunces.className}`}>
                About
              </Typography>
          </Link>

          <Box sx={{color:'#EAF4E8'}}>/</Box>
          <Link            
            style={{cursor:'pointer'}}
            to="Skill" 
            spy={true} 
            smooth={true} 
            offset={offsetScroll} 
            duration={durationScroll}
          >
              <Typography variant='h6' sx={{
                color: '#EAF4E8',
                '&:hover': {
                  fontWeight: '700',
                  textDecoration: 'underline solid #EAF4E8'
                }
              }} className={`${fraunces.className}`}>
                Skills
              </Typography>
          </Link>

          <Box sx={{color:'#EAF4E8'}}>/</Box>
          <Link
            style={{cursor:'pointer'}}
            to="WorkExperience" 
            spy={true} 
            smooth={true} 
            offset={offsetScroll} 
            duration={durationScroll}
          >
              <Typography variant='h6' sx={{
                color: '#EAF4E8',
                '&:hover': {
                  fontWeight: '700',
                  textDecoration: 'underline solid #EAF4E8'
                }
              }} className={`${fraunces.className}`}>
                Experience
              </Typography>
          </Link>
        </Box>

        <Box>
          <Link
            style={{cursor:'pointer'}}
            to="Contract" 
            spy={true} 
            smooth={true} 
            offset={offsetScroll} 
            duration={durationScroll}
          >
            <Button variant="contained"  sx={{
              backgroundColor: '#EAF4E8',
              color: '#2B3C2C',
              borderRadius: '0px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#EAF4Ef',
              }
            }}>
              <Typography variant='h5' sx={{
                fontWeight: '700',
              }} className={`${fraunces.className}`}>
                Contract
              </Typography>
            </Button>
          </Link>

        </Box>
      </Box>

      {/* ------------------- Mobile -------------------*/}

      <Box sx={{
        position: 'sticky',
        top: '0',
        zIndex:'1',
        display: {  xs: 'flex', md: 'none'},
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2B3C2C',
        color: 'white',
        fontSize: '2rem',
        padding:'20px 30px'
      }}>
        <Box >
          <Link 
            style={{cursor:'pointer'}}
            to="Profile" 
            spy={true} 
            smooth={true} 
            offset={offsetScroll} 
            duration={durationScroll}
          >
            <Typography variant='h4' sx={{
              color: '#EAF4E8',
              fontWeight: '500',
              '&:hover': {
                fontWeight: '700',
              }
            }} className={`${fraunces.className}`}>
              Phurikorn.t
            </Typography>
          </Link>
        </Box>
        <Box>
          <IconButton
              sx={{
                color: '#EAF4E8',
              }}
              size="large"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
          </IconButton>
        </Box> 


        <Drawer
          anchor="right"
          variant="temporary"
          open={isDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '50%',
              backgroundColor: '#EAF4E8',
            },
          }}
        >
          <Box
            sx={{
              marginTop: '10px',
            }}
          >
            {/* menu */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                marginRight: '10px',
              }}
            >
              <IconButton
                sx={{
                  color: '#2B3C2C',
                }}
                size="large"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* list item */}
            <Box
              sx={{
                display: 'flex',
                textAlign: 'start',
                padding: '5px 10px',
                flexDirection: 'column',
                rowGap: '15px',
              }}
            >


            <Link 
              onClick={handleDrawerToggle} 
              to="About" 
              spy={true} 
              smooth={true} 
              offset={offsetScroll} 
              duration={durationScroll}
              style={{
                textDecoration:'none',
                marginRight:'15px',
                borderBottom: '1px solid #2B3C2C',
                cursor:'pointer'
            }}>
              <Box sx={{
                display:'flex',
                alignItems:'center',
                color: '#2B3C2C',
                '&:hover': {
                  justifyContent:'space-between',
                }
              }}>
                <Typography variant='h6' sx={{
                  fontWeight: '600',
                  padding:'15px',
                }} className={`${fraunces.className}`}>
                  About
                </Typography>
                <KeyboardTabIcon />
              </Box>
            </Link>

            <Link 
              onClick={handleDrawerToggle} 
              to="Skill" 
              spy={true} 
              smooth={true} 
              offset={offsetScroll} 
              duration={durationScroll}
              style={{
                textDecoration:'none',
                marginRight:'15px',
                borderBottom: '1px solid #2B3C2C',
                cursor:'pointer'
            }}>
              <Box sx={{
                display:'flex',
                alignItems:'center',
                color: '#2B3C2C',
                '&:hover': {
                  justifyContent:'space-between',
                }
                
              }}>
                <Typography variant='h6' sx={{
                  fontWeight: '600',
                  padding:'15px',
                }} className={`${fraunces.className}`}>
                  Skills
                </Typography>
                <KeyboardTabIcon />
              </Box>
            </Link>

            <Link 
              onClick={handleDrawerToggle} 
              to="WorkExperience" 
              spy={true} 
              smooth={true} 
              offset={offsetScroll} 
              duration={durationScroll}
              style={{
                textDecoration:'none',
                marginRight:'15px',
                borderBottom: '1px solid #2B3C2C',
                cursor:'pointer'
            }}>
              <Box sx={{
               display:'flex',
               alignItems:'center',
               color: '#2B3C2C',
               '&:hover': {
                 justifyContent:'space-between',
               }
              }}>
                <Typography variant='h6' sx={{
                  fontWeight: '600',
                  padding:'15px',
                }} className={`${fraunces.className}`}>
                  Experience
                </Typography>
                <KeyboardTabIcon />
              </Box>
            </Link>

            <Link
              onClick={handleDrawerToggle} 
              to="Contract" 
              spy={true} 
              smooth={true} 
              offset={offsetScroll} 
              duration={durationScroll}
            >
              <Button variant="contained" sx={{
                backgroundColor: '#2B3C2C',
                color: 'white',
                width: '100%',
                borderRadius: '0px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#2B3C2C',
                }
              }}>
                <Typography variant='h6' sx={{
                }} className={`${fraunces.className}`}>
                  Contract
                </Typography>
              </Button>
            </Link>

            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  )

}

export default NavUi