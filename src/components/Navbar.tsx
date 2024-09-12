'use client'
import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
} from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
}))

const Navbar: React.FC = () => {
  return (
    <NavbarContainer position='static'>
      <Toolbar>
        <Container
          maxWidth='lg'
          sx={{
            position: 'fixed',
            display: 'flex',
            justifyContent: 'space-between',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <Typography variant='h6' component='div'>
            Bombastic
          </Typography>
          <Grid
            xs={4}
            sx={{
              textDecoration: 'none',
              color: 'white',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
          >
            <Link href='/'>
              <Button>
                <a>Home</a>
              </Button>
            </Link>
            <Link href='/players'>
              <Button>
                <a>Players</a>
              </Button>
            </Link>
          </Grid>
        </Container>
      </Toolbar>
    </NavbarContainer>
  )
}

export default Navbar
