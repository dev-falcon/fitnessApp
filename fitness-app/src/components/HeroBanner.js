import { Box, Button, Typography } from '@mui/material'

import HeroBannerImage from "../assets/images/banner.jpg"
import React from 'react'
// import {}

const HeroBanner = () => {
  return (
    <>
        <Box sx={{mt:{lg:'200px', xs:'70px'},
        ml:{sm:'50px'}}}     position="relative" p='20px'    >


        <Typography color='#FF2526'
        fontWeight='800' fontSize='40px'
        mb="23px" mt="30px"
>
    Falcon Fitness
</Typography>

<Typography fontWeight='700' fontSize='42px' marginTop='10px'>
    Eat , Sleep, Exercise <br/> Repeat
</Typography>


<Typography fontSize='26px' lineHeight='35px' marginBottom='50px' marginTop='20px' mb={3} >
Check out the most effective exercises personalized <br /> to you
</Typography>

<Button variant='contained' size='large'  href='#exercises' style={{width:'280px',height:"60px",fontSize:"18px" , fontWeight:'normal',backgroundColor:'#e02829'}}>
    Explore Exercises
</Button>


<img src={HeroBannerImage} className="hero-banner-img" alt="" />




    </Box>

    </>
  )
}

export default HeroBanner