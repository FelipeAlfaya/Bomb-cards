'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import Brazil from '../images/Brazil.svg'
import Argentina from '../images/Argentina.svg'
import Canada from '../images/Canada.svg'
import France from '../images/France.svg'
import Italy from '../images/Italy.svg'
import Mexico from '../images/Mexico.svg'
import Philipines from '../images/Philipines.svg'
import Poland from '../images/Poland.svg'
import Romania from '../images/Romania.svg'
import Russia from '../images/Russia.svg'
import Slovenia from '../images/Slovenia.svg'
import Turkey from '../images/Turkey.svg'
import UAE from '../images/UAE.svg'
import Ukraine from '../images/Ukraine.svg'
import USA from '../images/USA.svg'

const playerData = [
  {
    name: 'Suka',
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
    name: 'Miro',
    nationality: 'Russia',
    sector: null,
    playstyle: 'PAS',
    alignment: null,
    Flexibility: 90,
    Speed: 89,
    Aim: 85,
    ACC: 89,
    ADP: 87,
    PS: 87,
    overall: 87,
  },
  {
    name: 'Rian',
    nationality: 'Argentina',
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
    name: 'Rion',
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
    name: 'Yumi',
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
    name: 'A2',
    nationality: 'UAE',
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
    name: 'Alfa',
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
    name: 'Seised',
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
    name: 'Zender (Sender)',
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
    name: 'Tadex',
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
    name: 'Adrian',
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
    name: 'Hespera',
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
    name: 'Hedinn',
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
    name: 'Plep',
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
    name: 'Annis',
    nationality: 'Poland',
    sector: null,
    playstyle: 'MIX',
    alignment: null,
    Flexibility: 71,
    Speed: 72,
    Aim: 82,
    ACC: 80,
    ADP: 73,
    PS: 80,
    overall: 75,
  },
  {
    name: 'Pivo',
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
    name: 'Terami',
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
    name: 'Ren',
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
    name: 'Over1kBlades',
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
    name: 'Renterik',
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
    name: 'Lunicia',
    nationality: null,
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
    name: 'Jenox',
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
    name: 'Zangetsu',
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
    name: 'Jade',
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
    name: 'Aliya',
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
    name: 'Thyme',
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
    name: 'Lunnarii',
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
    name: 'Paladino',
    nationality: 'Brazil',
    sector: null,
    playstyle: 'MIX',
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
    name: 'Syal',
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
]

const Page: React.FC = () => {
  const getFlagImagePath = (nationality: string | null): string => {
    switch (nationality) {
      case 'Brazil':
        return Brazil
      case 'Argentina':
        return Argentina
      case 'Canada':
        return Canada
      case 'France':
        return France
      case 'Italy':
        return Italy
      case 'Mexico':
        return Mexico
      case 'Philipines':
        return Philipines
      case 'Poland':
        return Poland
      case 'Romania':
        return Romania
      case 'Russia':
        return Russia
      case 'Slovenia':
        return Slovenia
      case 'Turkey':
        return Turkey
      case 'UAE':
        return UAE
      case 'Ukraine':
        return Ukraine
      case 'USA':
        return USA
      default:
        return '/images/default-flag.png'
    }
  }

  return (
    <>
      <div className='cards-container'>
        {playerData.map((player) => (
          <div className='fut-player-card' key={player.name}>
            <div className='player-card-top'>
              <div className='player-master-info'>
                <div className='player-rating'>
                  <span>{player.overall}</span>
                </div>
                <div className='player-position'>
                  <span>{player.playstyle}</span>
                </div>
                <div className='player-nation'>
                  <Image
                    src={getFlagImagePath(player.nationality)}
                    alt={`${player.nationality} flag`} // Fixed alt text
                    width={350}
                    height={250}
                  />
                </div>
                {/* <div className='player-club'>
                  <Image
                    src='https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg'
                    alt='Barcelona'
                    draggable='false'
                  />
                </div> */}
              </div>
              <div className='player-picture'></div>
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
                      <div className='player-feature-value'>{player.Speed}</div>
                      <div className='player-feature-title'>SPD</div>
                    </span>
                    <span>
                      <div className='player-feature-value'>{player.Aim}</div>
                      <div className='player-feature-title'>AIM</div>
                    </span>
                  </div>
                  <div className='player-features-col'>
                    <span>
                      <div className='player-feature-value'>{player.ACC}</div>
                      <div className='player-feature-title'>ACC</div>
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
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Page
