"use client"

import { Box, Button, Divider, Drawer, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

import Link from 'next/link'
import { fraunces } from '../fonts'
import styles from './nav.module.css'
import { useState } from 'react'

const NavUi = () => {
  const [isDrawer, setIsDrawer] = useState(false)
  const handleDrawerToggle = () => {
    setIsDrawer((prev) => !prev)
  }
  return (
    <>
      {/* #EAF4E8 */}
      {/* #2B3C2C */}
      {/* ------------------- Desktop -------------------*/}

      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2B3C2C',
        color: '#EAF4E8',
        fontSize: '2rem',
        padding:'20px 30px'
      }}>
        <Box >
          <Link href="/" style={{
            textDecoration: 'none',
          }}>
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

          <Link href='#About' style={{textDecoration:'none'}}>
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
          <Link href='/' style={{textDecoration:'none'}}>
              <Typography variant='h6' sx={{
                color: '#EAF4E8',
                '&:hover': {
                  fontWeight: '700',
                  textDecoration: 'underline solid #EAF4E8'
                }
              }} className={`${fraunces.className}`}>
                Skill
              </Typography>
          </Link>

          <Box sx={{color:'#EAF4E8'}}>/</Box>
          <Link href='/' style={{textDecoration:'none'}}>
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
          <Button variant="contained" sx={{
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

        </Box>
      </Box>

      {/* ------------------- Mobile -------------------*/}

      <Box sx={{
        display: {  xs: 'flex', md: 'none'},
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2B3C2C',
        color: 'white',
        fontSize: '2rem',
        padding:'20px 30px'
      }}>
        <Box >
          <Link href="/" style={{
            textDecoration: 'none',
          }}>
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


            <Link href='/' style={{
              textDecoration:'none',
              marginRight:'15px',
              borderBottom: '1px solid #2B3C2C',
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

            <Link href='/' style={{
              textDecoration:'none',
              marginRight:'15px',
              borderBottom: '1px solid #2B3C2C',
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
                  Skill
                </Typography>
                <KeyboardTabIcon />
              </Box>
            </Link>

            <Link href='/' style={{
              textDecoration:'none',
              marginRight:'15px',
              borderBottom: '1px solid #2B3C2C',
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

            <Button variant="contained" sx={{
              backgroundColor: '#2B3C2C',
              color: 'white',
              borderRadius: '0px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#2B3C2C',
              }
            }}>
              <Typography variant='h6' sx={{
                // color: '#2B3C2C'
              }} className={`${fraunces.className}`}>
                Contract
              </Typography>
            </Button>
              

            


            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  )

}

export default NavUi