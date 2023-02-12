import React, { useState,useEffect,useRef } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import SearchedDetails from '../components/SearchedDetails'
const Searched = ({showhid,setShowhid}) => {
  const [SearchItem,setSearchitem]= useState()
  const [show,setShow] = useState(false)
  const [details,setDetails] = useState([])
  const params = useParams()
  const Getsearchitem = async(name)=>{
    const data = await fetch(`https://api.rawg.io/api/games?key=16e23b716a67472a919001040f08791f&search=${name}`)
    const search = await data.json()
   setSearchitem(search.results)
   console.log(search.results)
  }
  useEffect(()=>{
    Getsearchitem(params.search)
  },[params.search])
  const OpenClose = async(item)=>{
    setShow(!show)
    setDetails(item)
 } 
 const bgcontroll = useRef()
 const HideShow = (e)=>{
    if(bgcontroll.current==e.target){
     setShow(false)
    }
 }
  return (
    <Searchedstyle>
      <SearchedDetails HideShow={HideShow} show={show} details={details} bgcontroll={bgcontroll} />
       <div className="containersearched">
       {SearchItem && <div className="content">
         {SearchItem.map((item,index)=>{
          return(
            <div onClick={()=>OpenClose(item)} key={index} className="card">
              <h2>{item.name}</h2>
              <div className="image">
              <img src={item.background_image} alt="" />
              </div>
            </div>
          )
         })}
         </div>}
       </div>
        
    </Searchedstyle>
  )
}

export default Searched

const Searchedstyle = styled.div`
 
 .containersearched{
  width: var(--container-width-lg);
 margin: auto;
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

`