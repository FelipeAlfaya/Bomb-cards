'use client'
import React, { useState } from 'react'
import './page.css'
import Image from 'next/image'
//flag countries
import Brazil from '../../images/Brazil.svg'
import Argentina from '../../images/Argentina.svg'
import Canada from '../../images/Canada.svg'
import France from '../../images/France.svg'
import Italy from '../../images/Italy.svg'
import Mexico from '../../images/Mexico.svg'
import Philipines from '../../images/Philipines.svg'
import Poland from '../../images/Poland.svg'
import Romania from '../../images/Romania.svg'
import Russia from '../../images/Russia.svg'
import Serbia from '../../images/Serbia.png'
import Dominican from '../../images/Dominican.png'
import Georgia from '../../images/Georgia.png'
import Slovenia from '../../images/Slovenia.svg'
import Turkey from '../../images/Turkey.svg'
import UAE from '../../images/UAE.svg'
import Ukraine from '../../images/Ukraine.svg'
import USA from '../../images/USA.svg'
import Palestine from '../../images/Palestine.png'
import Colombia from '../../images/Colombia.png'
import Germany from '../../images/Germany.png'

//guilds
import LS from '../../images/guilds/LS.png'
import Moonshine from '../../images/guilds/Moonshine.png'
import Nightfall from '../../images/guilds/Nightfall.png'
import Atomix from '../../images/guilds/Atomix.png'
import unemployed from '../../images/guilds/unemployed.png'

//profiles
import Alfa from '../../images/people/Alfa.png'
import Profile from '../../images/people/Profile.png'
import polski from '../../images/people/polski.jpg'
import A2 from '../../images/people/A2_1.png'
import Tadex from '../../images/people/Tadex.gif'
import Hespera from '../../images/people/Hespera.jpg'
import BRuki from '../../images/people/BRuki.png'
import SC from '../../images/people/SC.png'
import Paladino from '../../images/people/Paladino.png'

import { IconButton, InputAdornment, TextField, Button } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid'
import Navbar from '../../components/Navbar'

interface Player {
  id: string
  name: string
  guild: string | null
  nationality: string | null
  sector: string | null
  playstyle: string
  alignment: string | null
  Flexibility: number
  Speed: number
  Aim: number
  ACC: number
  ADP: number
  PS: number
  overall: number
  OBS?: string
}

const playerData: Player[] = [
  {
    id: '1',
    name: 'Suka',
    guild: 'Moonshine',
    nationality: 'Russia',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 88,
    Speed: 91,
    Aim: 90,
    ACC: 88,
    ADP: 86,
    PS: 88,
    overall: 88,
  },
  {
    id: '2',
    name: 'Miro',
    guild: 'Moonshine',
    nationality: 'Russia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 84,
    Speed: 85,
    Aim: 82,
    ACC: 81,
    ADP: 79,
    PS: 81,
    overall: 82,
  },
  {
    id: '3',
    name: 'Rian',
    guild: 'unemployed',
    nationality: 'Colombia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 75,
    Speed: 86,
    Aim: 73,
    ACC: 75,
    ADP: 78,
    PS: 79,
    overall: 77,
  },
  {
    id: '4',
    name: 'Rion',
    guild: 'Nightfall',
    nationality: 'Canada',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 82,
    Speed: 90,
    Aim: 80,
    ACC: 84,
    ADP: 88,
    PS: 90,
    overall: 85,
  },
  {
    id: '5',
    name: 'Yumi',
    guild: 'Nightfall',
    nationality: 'France',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 95,
    Speed: 88,
    Aim: 98,
    ACC: 98,
    ADP: 95,
    PS: 97,
    overall: 95,
  },
  {
    id: '6',
    name: 'A2',
    guild: 'LS',
    nationality: 'Palestine',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 97,
    Speed: 86,
    Aim: 98,
    ACC: 99,
    ADP: 99,
    PS: 98,
    overall: 96,
  },
  {
    id: '7',
    name: 'Alfa',
    guild: 'LS',
    nationality: 'Brazil',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 85,
    Speed: 98,
    Aim: 91,
    ACC: 96,
    ADP: 85,
    PS: 95,
    overall: 92,
  },
  {
    id: '8',
    name: 'Seised',
    guild: 'LS',
    nationality: 'Mexico',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 86,
    Speed: 97,
    Aim: 95,
    ACC: 92,
    ADP: 85,
    PS: 94,
    overall: 91,
  },
  {
    id: '9',
    name: 'Zender (Sender)',
    guild: 'Nightfall',
    nationality: 'Russia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 85,
    Speed: 90,
    Aim: 90,
    ACC: 88,
    ADP: 88,
    PS: 95,
    overall: 89,
  },
  {
    id: '10',
    name: 'Tadex',
    guild: 'LS',
    nationality: 'Slovenia',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 97,
    Speed: 94,
    Aim: 95,
    ACC: 88,
    ADP: 96,
    PS: 96,
    overall: 94,
  },
  {
    id: '11',
    name: 'Adrian',
    guild: 'Nightfall',
    nationality: 'Romania',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 90,
    Speed: 88,
    Aim: 99,
    ACC: 95,
    ADP: 90,
    PS: 85,
    overall: 91,
  },
  {
    id: '12',
    name: 'Hespera',
    guild: 'LS',
    nationality: 'USA',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 90,
    Speed: 99,
    Aim: 95,
    ACC: 93,
    ADP: 90,
    PS: 98,
    overall: 94,
  },
  {
    id: '13',
    name: 'Hedinn',
    guild: 'LS',
    nationality: 'Turkey',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 92,
    Speed: 99,
    Aim: 79,
    ACC: 78,
    ADP: 80,
    PS: 74,
    overall: 84,
    OBS: "Didn't Play Enough to be 100% sure.",
  },
  {
    id: '14',
    name: 'Plep',
    guild: 'LS',
    nationality: 'Philipines',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 93,
    Speed: 94,
    Aim: 84,
    ACC: 83,
    ADP: 82,
    PS: 92,
    overall: 88,
    OBS: "Didn't Play Enough to be 100% sure.",
  },
  {
    id: '15',
    name: 'Annis',
    guild: 'LS',
    nationality: 'Poland',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 76,
    Speed: 80,
    Aim: 82,
    ACC: 80,
    ADP: 73,
    PS: 80,
    overall: 78,
  },
  {
    id: '16',
    name: 'Pivo',
    guild: 'Moonshine',
    nationality: 'Russia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 73,
    Speed: 75,
    Aim: 73,
    ACC: 76,
    ADP: 77,
    PS: 73,
    overall: 74,
  },
  {
    id: '17',
    name: 'Terami',
    guild: 'Atomix',
    nationality: 'Ukraine',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 75,
    Speed: 80,
    Aim: 75,
    ACC: 76,
    ADP: 71,
    PS: 80,
    overall: 76,
  },
  {
    id: '18',
    name: 'Ren',
    guild: 'unemployed',
    nationality: 'Argentina',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 79,
    Speed: 92,
    Aim: 78,
    ACC: 79,
    ADP: 80,
    PS: 94,
    overall: 83,
  },
  {
    id: '19',
    name: 'Over1kBlades',
    guild: 'unemployed',
    nationality: 'Russia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 77,
    Speed: 79,
    Aim: 78,
    ACC: 79,
    ADP: 76,
    PS: 77,
    overall: 77,
  },
  {
    id: '20',
    name: 'Renterik',
    guild: 'Moonshine',
    nationality: 'Russia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 75,
    Speed: 76,
    Aim: 73,
    ACC: 70,
    ADP: 69,
    PS: 71,
    overall: 72,
  },
  {
    id: '21',
    name: 'Lunicia',
    guild: 'Nightfall',
    nationality: 'USA',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 78,
    Speed: 79,
    Aim: 76,
    ACC: 77,
    ADP: 76,
    PS: 73,
    overall: 76,
  },
  {
    id: '22',
    name: 'Jenox',
    guild: 'Nightfall',
    nationality: 'Argentina',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 82,
    Speed: 81,
    Aim: 86,
    ACC: 83,
    ADP: 80,
    PS: 79,
    overall: 82,
  },
  {
    id: '23',
    name: 'Zangetsu',
    guild: 'unemployed',
    nationality: 'Italy',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 88,
    Speed: 86,
    Aim: 94,
    ACC: 88,
    ADP: 89,
    PS: 88,
    overall: 89,
  },
  {
    id: '24',
    name: 'Jade',
    guild: 'unemployed',
    nationality: 'France',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 81,
    Speed: 80,
    Aim: 89,
    ACC: 88,
    ADP: 86,
    PS: 79,
    overall: 83,
  },
  {
    id: '25',
    name: 'Aliya',
    guild: 'LS',
    nationality: 'USA',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 81,
    Speed: 79,
    Aim: 80,
    ACC: 75,
    ADP: 75,
    PS: 73,
    overall: 77,
  },
  {
    id: '26',
    name: 'Thyme',
    guild: 'unemployed',
    nationality: 'Canada',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 77,
    Speed: 88,
    Aim: 79,
    ACC: 77,
    ADP: 75,
    PS: 70,
    overall: 78,
  },
  {
    id: '27',
    name: 'Lunnarii',
    guild: 'Nightfall',
    nationality: 'USA',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 85,
    Speed: 79,
    Aim: 81,
    ACC: 80,
    ADP: 79,
    PS: 77,
    overall: 79,
  },
  {
    id: '28',
    name: 'Paladino',
    guild: 'Nightfall',
    nationality: 'Brazil',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 80,
    Speed: 84,
    Aim: 83,
    ACC: 82,
    ADP: 75,
    PS: 85,
    overall: 81,
  },
  {
    id: '29',
    name: 'Syal',
    guild: 'unemployed',
    nationality: 'Ukraine',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 85,
    Speed: 85,
    Aim: 85,
    ACC: 82,
    ADP: 90,
    PS: 80,
    overall: 84,
  },
  {
    id: '30',
    name: 'Reanu Keeves',
    guild: 'LS',
    nationality: 'Germany',
    sector: null,
    playstyle: '',
    alignment: null,
    Flexibility: 75,
    Speed: 80,
    Aim: 80,
    ACC: 72,
    ADP: 67,
    PS: 68,
    overall: 73,
  },
  {
    id: '31',
    name: 'Asura',
    guild: 'Nightfall',
    nationality: 'USA',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 84,
    Speed: 95,
    Aim: 90,
    ACC: 91,
    ADP: 87,
    PS: 86,
    overall: 89,
  },
  {
    id: '32',
    name: 'Leach',
    guild: 'Nightfall',
    nationality: 'USA',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 80,
    Speed: 78,
    Aim: 81,
    ACC: 82,
    ADP: 76,
    PS: 79,
    overall: 79,
  },
  {
    id: '33',
    name: 'Ryd',
    guild: 'Nightfall',
    nationality: 'Italy',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 79,
    Speed: 81,
    Aim: 85,
    ACC: 90,
    ADP: 77,
    PS: 80,
    overall: 81,
  },
  {
    id: '34',
    name: 'Esdeath',
    guild: 'Nightfall',
    nationality: 'Philipines',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 82,
    Speed: 80,
    Aim: 85,
    ACC: 82,
    ADP: 78,
    PS: 84,
    overall: 82,
  },
  {
    id: '35',
    name: 'Cat',
    guild: 'Nightfall',
    nationality: 'USA',
    sector: null,
    playstyle: '',
    alignment: null,
    Flexibility: 70,
    Speed: 69,
    Aim: 68,
    ACC: 74,
    ADP: 68,
    PS: 69,
    overall: 68,
  },
  {
    id: '36',
    name: 'BRuki',
    guild: 'LS',
    nationality: 'Italy',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 78,
    Speed: 80,
    Aim: 78,
    ACC: 76,
    ADP: 70,
    PS: 75,
    overall: 76,
  },
  {
    id: '37',
    name: 'Acros',
    guild: 'LS',
    nationality: 'USA',
    sector: null,
    playstyle: '',
    alignment: null,
    Flexibility: 78,
    Speed: 81,
    Aim: 83,
    ACC: 75,
    ADP: 70,
    PS: 73,
    overall: 76,
  },
  {
    id: '38',
    name: 'Yoda',
    guild: 'unemployed',
    nationality: 'Dominican',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 68,
    Speed: 70,
    Aim: 69,
    ACC: 70,
    ADP: 65,
    PS: 71,
    overall: 68,
  },
  {
    id: '39',
    name: 'Sushi',
    guild: 'unemployed',
    nationality: 'Serbia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 65,
    Speed: 62,
    Aim: 65,
    ACC: 68,
    ADP: 66,
    PS: 65,
    overall: 65,
  },
  {
    id: '40',
    name: 'Blitz Comet',
    guild: 'unemployed',
    nationality: 'Georgia',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 80,
    Speed: 88,
    Aim: 85,
    ACC: 80,
    ADP: 75,
    PS: 82,
    overall: 81,
  },
  {
    id: '41',
    name: 'Sirzechs',
    guild: 'Atomix',
    nationality: 'Brazil',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 75,
    Speed: 78,
    Aim: 77,
    ACC: 72,
    ADP: 70,
    PS: 72,
    overall: 73,
  },
  {
    id: '42',
    name: 'Kuze',
    guild: 'unemployed',
    nationality: 'Argentina',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 78,
    Speed: 78,
    Aim: 80,
    ACC: 83,
    ADP: 84,
    PS: 82,
    overall: 80,
  },
  {
    id: '43',
    name: 'SC',
    guild: 'LS',
    nationality: 'Netherlands',
    sector: null,
    playstyle: 'AGGRO',
    alignment: null,
    Flexibility: 90,
    Speed: 90,
    Aim: 92,
    ACC: 84,
    ADP: 85,
    PS: 83,
    overall: 87,
  },
]

const Page: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [sortBy, setSortBy] = useState<
    'name' | 'Flexibility' | 'Speed' | 'Aim' | 'ACC' | 'ADP' | 'PS' | 'overall'
  >('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleSortChange = (
    criteria:
      | 'name'
      | 'Flexibility'
      | 'Speed'
      | 'Aim'
      | 'ACC'
      | 'ADP'
      | 'PS'
      | 'overall'
  ) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(criteria)
      setSortOrder('asc')
    }
  }

  const filteredPlayers = playerData
    .filter((player) =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortBy]
      const bValue = b[sortBy]
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

  const getProfileImagePath = (name: string): string => {
    switch (name) {
      case 'Alfa':
        return Alfa.src
      case 'Suka':
        return polski.src
      case 'Miro':
        return polski.src
      case 'Terami':
        return polski.src
      case 'Pivo':
        return polski.src
      case 'Zender (Sender)':
        return polski.src
      case 'Renterik':
        return polski.src
      case 'Over1kBlades':
        return polski.src
      case 'A2':
        return A2.src
      case 'Tadex':
        return Tadex.src
      case 'BRuki':
        return BRuki.src
      case 'Hespera':
        return Hespera.src
      case 'SC':
        return SC.src
      case 'Paladino':
        return Paladino.src
      default:
        return Profile.src
    }
  }

  const getFlagImagePath = (nationality: string | null): string => {
    switch (nationality) {
      case 'Brazil':
        return Brazil.src
      case 'Argentina':
        return Argentina.src
      case 'Canada':
        return Canada.src
      case 'France':
        return France.src
      case 'Italy':
        return Italy.src
      case 'Mexico':
        return Mexico.src
      case 'Philipines':
        return Philipines.src
      case 'Poland':
        return Poland.src
      case 'Romania':
        return Romania.src
      case 'Russia':
        return Russia.src
      case 'Slovenia':
        return Slovenia.src
      case 'Turkey':
        return Turkey.src
      case 'UAE':
        return UAE.src
      case 'Ukraine':
        return Ukraine.src
      case 'USA':
        return USA.src
      case 'Colombia':
        return Colombia.src
      case 'Germany':
        return Germany.src
      case 'Palestine':
        return Palestine.src
      case 'Serbia':
        return Serbia.src
      case 'Dominican':
        return Dominican.src
      case 'Georgia':
        return Georgia.src
      default:
        return '/images/default-flag.png'
    }
  }

  const playerTier = (overall: number): string => {
    if (overall >= 96) {
      return 'X'
    } else if (overall >= 93) {
      return 'SS+'
    } else if (overall >= 90) {
      return 'SS'
    } else if (overall >= 87) {
      return 'S'
    } else if (overall >= 85) {
      return 'A+'
    } else if (overall >= 83) {
      return 'A'
    } else if (overall >= 80) {
      return 'B+'
    } else if (overall >= 78) {
      return 'B'
    } else if (overall >= 75) {
      return 'C+'
    } else {
      return 'C'
    }
  }

  const getClubImagePath = (club: string | null): string => {
    switch (club) {
      case 'LS':
        return LS.src
      case 'Nightfall':
        return Nightfall.src
      case 'Moonshine':
        return Moonshine.src
      case 'Atomix':
        return Atomix.src
      case 'unemployed':
        return unemployed.src
      default:
        return '/images/default-club.png'
    }
  }

  return (
    <>
      {/*Template by: ../..selimdoyranli*/}
      <Navbar toolbar={`Players (${playerData.length})`} />
      <div className='filters'>
        <div className='search-container'>
          <TextField
            variant='outlined'
            placeholder='Search by player name'
            onChange={handleSearchChange}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' sx={{ boderColor: 'white' }}>
                  <IconButton edge='end'>
                    <GridSearchIcon sx={{ color: 'white' }} />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                borderColor: 'white',
              },
            }}
            sx={{
              input: { color: 'white', width: '100%' },
            }}
            fullWidth
          />
        </div>
        <div className='sort-buttons'>
          <Button
            className='sort-button'
            onClick={() => handleSortChange('name')}
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
          >
            Sort by Name{' '}
            {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            className='sort-button'
            onClick={() => handleSortChange('Flexibility')}
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
          >
            Sort by Flexibility{' '}
            {sortBy === 'Flexibility' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
            className='sort-button'
            onClick={() => handleSortChange('Speed')}
          >
            Sort by Speed{' '}
            {sortBy === 'Speed' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
            className='sort-button'
            onClick={() => handleSortChange('Aim')}
          >
            Sort by Aim {sortBy === 'Aim' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
            className='sort-button'
            onClick={() => handleSortChange('ACC')}
          >
            Sort by ACC {sortBy === 'ACC' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
            className='sort-button'
            onClick={() => handleSortChange('ADP')}
          >
            Sort by ADP {sortBy === 'ADP' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            sx={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#1976d2',
              '& a': {
                textDecoration: 'none',
                color: 'white',
              },
            }}
            className='sort-button'
            onClick={() => handleSortChange('overall')}
          >
            Sort by Overall{' '}
            {sortBy === 'overall' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
        </div>
      </div>
      {filteredPlayers.length > 0 && (
        <div className='cards-container'>
          {filteredPlayers.map((player) => (
            <div className='fut-player-card' key={player.name}>
              <div className='player-card-top'>
                <div className='player-master-info'>
                  <div className='player-rating'>
                    <span>{player.overall}</span>
                  </div>
                  <div className='player-position'>
                    <span>{playerTier(player.overall)}</span>
                  </div>
                  <div className='player-nation'>
                    <Image
                      src={getFlagImagePath(player.nationality) || ''}
                      alt={`${player.nationality} flag`}
                      width={350}
                      height={250}
                    />
                  </div>
                  <div className='player-club'>
                    <Image
                      src={getClubImagePath(player.guild)}
                      alt={player.guild || ''}
                      draggable='false'
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className='player-picture'>
                  <Image
                    src={getProfileImagePath(player.name)}
                    alt='Messi'
                    draggable='false'
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className='player-card-bottom'>
                <div className='player-info'>
                  <div className='player-name'>
                    <span>{player.name}</span>
                  </div>
                  <div className='player-features'>
                    <div className='player-features-col'>
                      <span>
                        <div className='player-feature-value'>
                          {player.Flexibility}
                        </div>
                        <div className='player-feature-title'>FLX</div>
                      </span>
                      <span>
                        <div className='player-feature-value'>
                          {player.Speed}
                        </div>
                        <div className='player-feature-title'>SPD</div>
                      </span>
                      <span>
                        <div className='player-feature-value'>{player.ACC}</div>
                        <div className='player-feature-title'>ACC</div>
                      </span>
                    </div>
                    <div className='player-features-col'>
                      <span>
                        <div className='player-feature-value'>{player.Aim}</div>
                        <div className='player-feature-title'>AIM</div>
                      </span>
                      <span>
                        <div className='player-feature-value'>{player.ADP}</div>
                        <div className='player-feature-title'>ADP</div>
                      </span>
                      <span>
                        <div className='player-feature-value'>{player.PS}</div>
                        <div className='player-feature-title'>POS</div>
                      </span>
                    </div>
                  </div>
                </div>
                {player.OBS && (
                  <div className='player-info'>
                    <div className='player-observation'>
                      <span>{player.OBS}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredPlayers.length === 0 && (
        <div className='no-players'>
          <span>No players found with the given search criteria.</span>
        </div>
      )}
    </>
  )
}

export default Page
