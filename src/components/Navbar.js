import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/GYM LOGO.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap: {sm: '112px', xs: '40px'}, mt: {sm: '32px', xs: '20px'}, justifyContent: 'none'}} px="20px">
        <Link to="/">
            <img src={Logo} alt='Logo' style={{width: '70px', margin: '0 28px' }}/>
        </Link>
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
            <Link to="/" style={{textDecoration: "none", color: "#3A1212", borderBottom: "3px solid #0f172a"}}>Home</Link>
            <a href='#exercises' style={{textDecoration: "none", color: "#3A1212"}}>Exercise</a>
        </Stack>
    </Stack>
  )
}

export default Navbar