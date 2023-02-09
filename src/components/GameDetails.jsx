import React,{useRef,useState} from 'react'
import styled from 'styled-components'

const GameDetails =({bgcontroll,show,setShow,HideShow,details})=>{

    return(
        <Gamedetailsstyle>
           <div onClick={(e)=>HideShow(e)} ref={bgcontroll} className={show?'containner active':'containner'}>
           <div className="bg-container">
             <header>
             <div className="left">
             <h5>{details.name}</h5>
             <div className="rating">
                this is the rating part
             </div>
             </div>
             <div className="right">
                <h5>Platforms</h5>
                 <p>details</p>
             </div>

             </header>
             <div className="image">
                <img src={details.background_image} alt="" />
             </div>
             <div className="image">
                <img src={details.background_image} alt="" />
             </div>
             <div className="image">
                <img src={details.background_image} alt="" />
             </div>
           </div>
           </div>
        </Gamedetailsstyle>
    )
}
export default GameDetails;

const Gamedetailsstyle = styled.div`

.containner{
background-color: rgba(0,0,0,0.8);
position: fixed;
width: 100%;
height: 100%;
display: flex;
align-items: center;
z-index: 5;
display: none;
cursor: pointer;
}
.bg-container{
    background-color: #fff;
    width: 70%;
    height:100%;
    margin: auto;
   padding:4rem;
   overflow-y:scroll;
   p{
    line-height:1.8;
   }
   /* this one work for google and safari */
   ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
  /* this one is working for only firfox */
  /* scrollbar-width: thin;
  scrollbar-color: #888 #fff; */
}
.active{
    display: block;
}
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
   
}
/* MEDIA QUERIES */

@media screen and (max-width:800px) {
    .bg-container{
     padding: 2rem;
    }
    .image{
        max-height: 20rem;
        border-radius: 0;
    }
}
@media screen and (max-width:400px) {
    .bg-container{
     padding: 1rem;
     width: 80%;
    }
    .image{
        max-height: 20rem;
        border-radius: 0;
    }
   header{
    right,.left{
        h2{
        font-size:0.7rem;
    }
    }
   }
}

`