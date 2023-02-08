import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { PopularGamesURL } from '../Api'
import {SiCodeigniter} from 'react-icons/si'
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
        <div className="search">
            <div className="icons">
              <SiCodeigniter/><small>ignite</small>
            </div>
            <form >
              <input type="text" />
              <button>Search</button>
            </form>
        </div>
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

.search{
  display: grid;
  place-items: center;
  margin-bottom: 4rem;
}
.icons{
  display: flex;
  gap:.5rem;
  font-size: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  small{
    font-weight: 700;
  }

}
form{
  display: flex;
  align-items: center;
  input{
    width:20rem;
    height: 2.5rem;
    border: none;
    box-shadow: 0px 0px 20px rgba(255,255,255,0.1);
    outline: none;
    padding: 0rem 1rem;
    font-size: 1.2rem;
  }
  button{
    cursor: pointer;
    width:7rem;
    height:2.5rem;
    border: none;
    background-color: #ff2625;
    color:#fff;
    opacity: 0.7;
    font-size:1.1rem;

  }
}
.upcoming{
  h1{
    font-size: 2.8rem;
    font-weight: 700;
    color:#ff2625;
    opacity: 0.5;
    margin-left: 4rem;
  }
}
.content{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  row-gap: 4rem;
  column-gap: 3rem;
  padding: 0rem 1rem;
  margin: 7rem 0rem;
}
.card{
  background-color: #fff;
  padding-top: 1rem;
  border-radius: 1rem;
  h2{
    text-align: center;
    font-size: 1rem;
    color: #222;

  }
  min-height: 30rem;
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
    opacity: 0.8;
    transition: 500ms;
    &:hover{
      opacity: 1;
    }


  }
}
/* MEDIA QUERIES */
@media screen and (max-width:500px) {
  .upcoming{
    h1{
      font-size: 1.7rem;
      margin-left:1.5rem;
    }
  }
  form{
  display: flex;
  align-items: center;
  input{
    width:15rem;
    height: 2.5rem;
    padding: 0rem 1rem;
    font-size: 1rem;
  }
  button{
    cursor: pointer;
    width:4rem;
    height:2.5rem;
    font-size:.9rem;

  }
}
.content{
  margin: 4rem 0rem;
}
}

`