import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PopularGamesURL } from '../Api'
const Game = () => {  
  const [Upcoming,setUpcoming] = useState([])
  const [popular,setPopular] = useState([])
  const [newgames,setNewgames] = useState([])
  const Getfetchupcoming = async ()=>{
    const response = await fetch('https://api.rawg.io/api/games?key=16e23b716a67472a919001040f08791f&dates=2023,2024&ordering=-added&page_size = 10')
    
    const data = await response.json()
    setUpcoming(data.results)
   
    
  }

  const Getfetchpopular = async ()=>{
    const response = await fetch('https://api.rawg.io/api/games?key=16e23b716a67472a919001040f08791f&dates=2022,2023&ordering=-rating&page_size=10')
    
    const data = await response.json()
    setPopular(data.results)
   
    
  }
   const Getfetchnewgames = async()=>{
    const response = await fetch('https://api.rawg.io/api/games?key=16e23b716a67472a919001040f08791f&dates=2022,2023&ordering=-release&page_size=10')
    
    const data = await response.json()
    setNewgames(data.results)
   }

useEffect(()=>{
  Getfetchupcoming()
  Getfetchpopular()
  Getfetchnewgames()
},[])
  return (
    <Gamestyle>
      
      {/* upcoming games */}
      <div className="upcoming">
           <h1>Upcoming Games</h1>
           <div className="content">
           {Upcoming.map(item=>{
            return(
              <div key={item.id} className="card">
              <h2>{item.name}</h2>
              <div className="image">
              <img src={item.background_image} alt="" />
              </div>
            </div>
            )
           })}

           </div>
      </div>
      {/* popular games */}
      <div className="upcoming">
           <h1>Polpular Games</h1>
           <div className="content">
           {popular.map(item=>{
            return(
              <div key={item.id} className="card">
              <h2>{item.name}</h2>
              <div className="image">
              <img src={item.background_image} alt="" />
              </div>
            </div>
            )
           })}

           </div>
      </div>
      {/* new games */}
      <div className="upcoming">
           <h1>New Games</h1>
           <div className="content">
           {newgames.map(item=>{
            return(
              <div key={item.id} className="card">
              <h2>{item.name}</h2>
              <div className="image">
              <img src={item.background_image} alt="" />
              </div>
            </div>
            )
           })}

           </div>
      </div>
    </Gamestyle>
  )
}

export default Game

const Gamestyle = styled.div`
padding: 3rem 0rem;
.upcoming{
  h1{
    font-size: 2.8rem;
    font-weight: 700;
  }
}
.content{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
  row-gap: 7rem;
  column-gap: 3rem;
  padding: 0rem 1rem;
  margin: 10rem 0rem;
}
.card{
  background-color: #fff;
  padding-top: 1rem;
  border-radius: 1rem;
  h2{
    text-align: center;
    font-size: 1.2rem;

  }
}
.image{
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  border-bottom-left-radius:1rem;
  border-bottom-right-radius:1rem;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
}
`