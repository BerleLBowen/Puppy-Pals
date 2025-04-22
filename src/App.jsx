import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log('hello worlds')
  console.log(puppies)

  const [featPupId, setFeatPupId] = useState(null)


  function handleClick(id) {
    setFeatPupId(id)
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div>
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        
      { 
   puppies.map((puppy) => {
     return <p onClick={() => handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>
   })
}
      </div>
    </>
  )
}

export default App
