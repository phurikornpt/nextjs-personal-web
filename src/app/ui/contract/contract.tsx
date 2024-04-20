
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { fraunces, param } from '../fonts';
const Contract = () => {
  return (
    <Box id='Contract'>
      {/* Desktop */}
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        // justifyContent: 'start',
        flexDirection: 'column',
        height: '30rem',
        paddingBottom:'50px',
        background:'#2B3C2C',
      }}>
        
        <Box sx={{
          margin: '100px 0px 40px 150px',
        }}>
          <Typography variant='h3' sx={{
              color: '#fff',
              fontWeight: '700',
          }} className={`${fraunces.className}`}>
              CONTRACT
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          margin: '20px 0px 0px 220px',
          flexDirection: 'column',
          gap: '20px',
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
                second git : phurkornt
              </Typography>
            </Link>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <Image
              src='/images/contract/line-logo.png' 
              width={24} 
              height={24}
              style={{
                color: '#fff',
                objectFit: 'contain',
                filter: 'invert(1)'
              }}
              alt='profile'
            >
            </Image>
            <Typography variant='h6'>
              phurikorn
            </Typography>
          </Box>
    
        </Box>

      </Box>

      {/* Mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        // justifyContent: 'start',
        flexDirection: 'column',
        alignItems: 'start',
        background:'#2B3C2C',
      }}>
        
        <Box sx={{
          marginTop: '50px',
          marginBottom: '30px',
          marginLeft: '40px',
        }}>
          <Typography variant='h4' sx={{
              color: '#fff',
              fontWeight: '700',
          }} className={`${fraunces.className}`}>
              CONTRACT
          </Typography>
        </Box>

        <Box sx={{
          margin: '20px 0px 50px 100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
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
              fontWeight: '400',
            }}>
              <Typography variant='body1'>
                second git : phurkornt
              </Typography>
            </Link>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
          }}>
            <Image
              src='/images/contract/line-logo.png' 
              width={24} 
              height={24}
              style={{
                color: '#fff',
                objectFit: 'contain',
                filter: 'invert(1)',
                fontWeight: '400',
              }}
              alt='profile'
            >
            </Image>
            <Typography variant='body1'>
              phurikorn
            </Typography>
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