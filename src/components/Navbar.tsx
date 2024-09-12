'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material'
import { styled } from '@mui/system'

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
}))

const Navbar: React.FC = () => {
  return (
    <NavbarContainer position='static'>
      <Toolbar>
        <Container
          maxWidth='lg'
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography variant='h6' component='div'>
            Bomb Wiki
          </Typography>
          <div>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>About</Button>
          </div>
        </Container>
      </Toolbar>
    </NavbarContainer>
  )
}

export default Navbar
