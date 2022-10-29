import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <>

       <Box width='100%' display='flex' alignItems='center' justifyContent='center' mt='50px'   bgcolor='#f0eded' pb='20px' pt='10px'
       >

        <Typography>
<span style={{fontWeight:'800',fontSize:"20px" , color: '#eb1c1c' , 
}}>

         Falcon Fitness
</span>
        <br />
        <span style={{
          marginLeft:'12px',
          fontSize:'17px',

          marginTop:'20px'
        
        }}>
         All rights reserved 

        </span>
        </Typography>

       </Box>



    </>
  )
}

export default Footer