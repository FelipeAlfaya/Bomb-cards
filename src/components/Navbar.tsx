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
import '../app/players/page.css'

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
}))
interface NavbarProps {
  toolbar: string
}

const Navbar: React.FC<NavbarProps> = ({ toolbar }) => {
  return (
    <NavbarContainer position='fixed'>
      <Toolbar>
        <Container
          maxWidth='lg'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <Typography variant='h6' component='div'>
            {toolbar}
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
              <Button
                className='navbar-button'
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  '& a': {
                    textDecoration: 'none',
                    color: 'white',
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link href='/players'>
              <Button
                className='navbar-button'
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  '& a': {
                    textDecoration: 'none',
                    color: 'white',
                  },
                }}
              >
                Players
              </Button>
            </Link>
          </Grid>
        </Container>
      </Toolbar>
    </NavbarContainer>
  )
}

export default Navbar
