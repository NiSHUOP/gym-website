import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Stack } from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Typography ml="21px" color="#475569" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
        <Stack direction='row'>
            <Button className='exe-btn-1' sx={{ ml: '21px', color: '#2563eb', border: '2px solid #2563eb', fontSize: '14px', borderRadius: '5px', textTransform: 'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button className='exe-btn-2' sx={{ ml: '21px', color: '#475569', border: '2px solid #475569', fontSize: '14px', borderRadius: '5px', textTransform: 'capitalize' }}>
                {exercise.target}
            </Button>
        </Stack>
    </Link>
  )
}

export default ExerciseCard