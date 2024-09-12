/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material'
import './css/FifaCard.css'

type PlayerStats = {
  name: string
  nationality: string | null
  sector: string | null
  playstyle: string | null
  alignment: string | null
  Flexibility: number
  Speed: number
  Aim: number
  ACC: number
  ADP: number
  PS: number
  overall: number
}

type FifaCardProps = {
  player: PlayerStats
}

const FifaCard: React.FC<FifaCardProps> = ({ player }) => {
  if (!player) {
    return <div>Player data is missing.</div>
  }
  return (
    <Card
      className='fifa-card'
      style={{
        backgroundColor: '#fafafa',
        width: 300,
        borderRadius: 16,
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {/* Overall Section */}
      <Box
        className='overall'
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: '#d4af37',
          borderRadius: '50%',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4' style={{ fontWeight: 'bold', color: '#fff' }}>
          {player.overall}
        </Typography>
      </Box>

      {/* Image */}
      <Box className='player-image' style={{ padding: '16px 0' }}>
        <img
          src='../images/teste.png'
          alt={player.name}
          style={{ width: '80%', borderRadius: '10px' }}
        />
      </Box>

      {/* Player Name */}
      <Typography variant='h5' style={{ marginBottom: 8, fontWeight: 'bold' }}>
        {player.name}
      </Typography>

      {/* Stats Section */}
      <CardContent>
        <Box
          className='stats-section'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 16px',
            marginBottom: 16,
          }}
        >
          {/* First Column */}
          <Box className='stats-column'>
            <Typography variant='body1' style={{ fontSize: 18 }}>
              FLX: {player.Flexibility}
            </Typography>
            <Typography variant='body1' style={{ fontSize: 18 }}>
              SPD: {player.Speed}
            </Typography>
            <Typography variant='body1' style={{ fontSize: 18 }}>
              AIM: {player.Aim}
            </Typography>
          </Box>

          {/* Second Column */}
          <Box className='stats-column'>
            <Typography variant='body1' style={{ fontSize: 18 }}>
              ACC: {player.ACC}
            </Typography>
            <Typography variant='body1' style={{ fontSize: 18 }}>
              ADP: {player.ADP}
            </Typography>
            <Typography variant='body1' style={{ fontSize: 18 }}>
              POS: {player.PS}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FifaCard
