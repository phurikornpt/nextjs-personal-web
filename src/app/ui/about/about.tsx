
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { fraunces, paramThai } from '../fonts'
const content = [
  {
    title: 'About me',
    content: `My name is Phurikorn Thongyoi and my nicknamed is Phu. 
    I graduated from KMUTNB with a Bachelor of Engineering Program in Electronics Engineering Technology (Computer).`
  },
  {
    title: 'During my studies',
    content: `I participated in the Robotics club,
    which provided me with various experiences including competitions,
    developing automation systems and
    assist team activities, organizing STEM events
    and being a lecturer to teach younger students about robots. `
  },
  {
    title: 'My Internship at Software House company',
    content: `I completed a 4-month internship as a Backend Developer at
     a software house company, where I got the opportunity to work on real projects
      in the development field. This experience made me excited about the constant challenges of 
        new requirements and I developed a fondness for this line of work.
    `
  }
]
const aboutContent =
`About me
My name is Phurikorn Thongyoi and my nicknamed is Phu. 
I am currently studying in the fourth year of the 
Bachelor of Engineering Technology in Electronics Engineering program 
at the Faculty of Industrial Technology, King Mongkut's University of Technology North Bangkok.
I will be graduating this year.

During my studies
I participated in the Robotics club,
which provided me with various experiences including competitions,
developing automation systems and
assist team activities, organizing STEM events
and being a training speaker to teach younger students about robots. 

My interest

`
// const aboutContent = `ผมนาย ภูริกรณ์ ทองย้อย ชื่อเล่นภู กำลังศึกษาอยู่ในระดับปริญญาตรี ปีที่ 4 สาขาเทคโนโลยีวิศวกรรมอิเล็กทรอนิกส์ 
// คณะวิทยาลัยเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ กำลังจะจบการศึกษาในปีนี้ครับ

// ซึ่ง Stack ที่ได้จับบ่อยๆจะเป็น
//   • Typescript/Nodejs/Express
//   • Prisma/MongoDB 
//   • Joi , Zod
  
// ผมสนใจในสายงาน Backend Developer ครับ เเละตั้งเป้าไว้ว่าจะเป็น Fullstack Developer ในอนาคตครับ

// `
const About = () => {
  return (
    <Box id='About'>
      {/* Desktop */}
      <Box sx={{
        display: { xs: 'none', md: 'flex'},
        flexDirection: 'column',
        background: 'rgb(230,231,225,.6)',
        color: 'black',
        fontSize: '2rem',
        padding: '10px 0px',
        height: '50rem',
      }}>
        <Box sx={{
          margin: '100px 0px 30px 150px',
        }}>

          <Box>
              <Typography variant='h3' sx={{
                  color: '#2B3C2C',
                  fontWeight: '700',
              }} className={`${fraunces.className}`}>
                  ABOUT
              </Typography>
          </Box>

        
        </Box>
        <Box sx={{
          margin: '50px 0px 30px 150px',
          display: 'flex',
          gap:'20px'
        }}>
              <Image src='/profile/myself01.jpg' 
                  width={300} 
                  height={370}
                  style={{
                    objectFit: 'cover',
                  }}
                  alt='profile' 
              />
              <Box sx={{
                maxWidth: '52vw',
              }}>
                {
                  content.map((item) => {
                    return (<>
                        <Typography variant='h6' sx={{
                          color: '#2B3C2C',
                          fontWeight: '500',
                          whiteSpace: 'pre-line',
                        }} className={`${fraunces.className}`}>
                          {item.title}
                        </Typography>
                        <Typography variant='body1' sx={{
                          color: 'rgba(0,0,0,.7)',
                          fontWeight: '200',
                        }} className={`${paramThai.className}`}>
                          {item.content}
                        </Typography>
                    </>)
                  })
                }
                {/* <Typography variant='h6' sx={{
                  color: '#2B3C2C',
                  fontWeight: '500',
                  whiteSpace: 'pre-line',
                }} className={`${fraunces.className}`}>
                  {content[0].title}
                </Typography>
                <Typography variant='body1' sx={{
                  color: '#2B3C2C',
                  fontWeight: '300',
                }} className={`${paramThai.className}`}>
                  {content[0].content}
                </Typography> */}
                
              </Box>
        </Box>
      </Box>
      {/* Mobile */}
      <Box sx={{
        display: { xs: 'flex', md: 'none'},
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgb(230,231,225,.6)',
        color: 'black',
        padding: {sm:'50px', xs: '50px 20px'},
        // height: '40rem',
      }}>
          <Typography variant='h4' sx={{
              color: '#2B3C2C',
              fontWeight: '700',
              marginBottom: '30px',
          }} className={`${fraunces.className}`}>
              ABOUT
          </Typography>
          <Image src='/profile/myself01.jpg' 
                width={200} 
                height={250}
                style={{
                  objectFit: 'contain',
                }}
                alt='profile' 
          />
          <Box sx={{
                marginTop: '30px',
              }}>

                {
                  content.map((item) => {
                    return (<>
                        <Typography variant='body1' sx={{
                          color: '#2B3C2C',
                          fontWeight: '600',
                          whiteSpace: 'pre-line',
                        }} className={`${fraunces.className}`}>
                          {item.title}
                        </Typography>
                        <Typography variant='body2' sx={{
                          color: 'rgba(0,0,0,.7)',
                          fontWeight: '200',
                        }} className={`${paramThai.className}`}>
                          {item.content}
                        </Typography>
                    </>)
                })
              }
              {/* <Typography variant='body1' sx={{
                color: '#2B3C2C',
                
                fontWeight: '300',
                whiteSpace: 'pre-line',
              }} className={`${paramThai.className}`}>
                {aboutContent}
              </Typography> */}
              
          </Box>
      </Box>
    </Box>
  )
}

export default About