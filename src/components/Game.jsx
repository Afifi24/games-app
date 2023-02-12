import React, { useEffect, useState,useRef } from 'react'
import styled from 'styled-components'
import { PopularGamesURL } from '../Api'
import GameDetails from './GameDetails'
const Game = () => {  
  const [Upcoming,setUpcoming] = useState([])
  const [popular,setPopular] = useState([])
  const [newgames,setNewgames] = useState([])
  const [show,setShow] = useState(false)
  const [details,setDetails] = useState([])
  const bgcontroll = useRef()
  const HideShow = (e)=>{
     if(bgcontroll.current==e.target){
      setShow(false)
     }
  }
  const OpenClose = async(item)=>{
     setShow(!show)
     setDetails(item)
  }
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
      <GameDetails details={details} bgcontroll={bgcontroll} show={show} HideShow={HideShow}
    setShow={setShow}/>

      <div className="container">
      {/* upcoming games */}
      <div className="upcoming">
       
           <h1>Upcoming Games</h1>
           <div className="content">
           {Upcoming.map(item=>{
            return(
              <div onClick={()=>OpenClose(item)} key={item.id} className="card">
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
              <div onClick={()=>OpenClose(item)} key={item.id} className="card">
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
              <div onClick={()=>OpenClose(item)} key={item.id} className="card">
              <h2>{item.name}</h2>
              <div className="image">
              <img src={item.background_image} alt="" />
              </div>
            </div>
            )
           })}

           </div>
      </div>
      </div>
    </Gamestyle>
  )
}

export default Game

const Gamestyle = styled.div`
.container{
padding: 3rem 0rem;
width: var(--container-width-lg);
margin: auto;
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
  column-gap: 2rem;
  padding: 0rem 1rem;
  margin: 7rem 0rem;
}
.card{
  background-color: #fff;
  padding-top: 1rem;
  border-radius: 1rem;
  cursor: pointer;
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
    transition: 500ms;



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