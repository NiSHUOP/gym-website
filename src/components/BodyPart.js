import React from 'react';
import { Stack, Typography } from '@mui/material';
import ICON from '../assets/icons/cardio.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {


  return (
    <Stack type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"

      sx={{
        borderTop: bodyPart === item ? '3px solid #2196f3' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px'
      }}
    onClick={() => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
    }}
    >
      <img src={ICON} alt="GYM" style={{ width: '150px', height: '150px' }} />
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>

  )
}

export default BodyPart