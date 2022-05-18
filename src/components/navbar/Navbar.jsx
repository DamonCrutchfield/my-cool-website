import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import './Navbar.css';

const Navbar = () => {
    return (
        <Box
        sx={{
            width: '100vw',
            height: 100,
            backgroundColor: 'blue'
          }}
        >
            <AppBar></AppBar>
        </Box>
    );
}

export default Navbar;