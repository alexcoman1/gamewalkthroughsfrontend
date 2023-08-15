import React from 'react'
import Card from '../components/Card'
import kotorImage from '../images/wp4163373.jpg'
import cyberpunkImage from '../images/cyberpunkcover.jpg'



export default function Home() {
  return (
    <div>
      <div className='title'>
        <h1>Game Walkthroughs</h1>
      </div>
      <div className='cardcontainer'>
        <Card title="Star Wars Knights of the Old Republic" link="/kotor" backgroundImage={kotorImage} />
        <Card title="Cyberpunk 2077" link="/cyberpunk" backgroundImage={cyberpunkImage} />
        
      </div>
    </div>

    
  )
}
