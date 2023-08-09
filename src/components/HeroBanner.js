import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import Banner from '../assets/images/Banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#0f172a" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={3}>
      Check out the most effective exercises
    </Typography>
    <Button className='hero-btn' href='#exercises' variant="contained" color="primary" sx={{ padding: '6px 12px',  textTransform: 'none',  }}>Explore Exercise</Button>
    <Typography fontWeight={600} color="#0f172a" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={Banner} alt='Banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner