import React from 'react'
import Card from '../components/Card'



export default function Home() {
  return (
    <div>
      <div className='title'>
        <h1>Game Walkthroughs</h1>
      </div>
      <div className='cardcontainer'>
        <Card title="Star Wars Knights of the Old Republic" link="/kotor" backgroundImage='../images/wp4163373.jpg' />
        
      </div>
    </div>

    
  )
}
