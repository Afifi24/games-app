import React,{useRef,useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import emptystar from '../img/star-empty.png'
import fullstar from '../img/star-full.png'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import ninten from '../img/nintendo.svg'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
const SearchedDetails =({bgcontroll,show,HideShow,details})=>{
    return(
       
        <Gamedetailsstyle>
           <div onClick={(e)=>HideShow(e)} ref={bgcontroll} className={show?'containner active':'containner'}>
           <motion.div 
           className="bg-container" layout >
           <header>
             <div className="left">
             <h5>{details.name}</h5>
             <div className="rating">
                <p>Rating: <span>{details.rating}</span></p>
                {show &&
              <div className="stars">
                {Math.floor(details.rating) ===3 &&(
                <div className="hello">
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                </div>
                )}
                {Math.floor(details.rating) ===4 &&(
                <div className="hello">
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={emptystar} alt="" />
                </div>
                )}
                {Math.floor(details.rating) ===2 &&(
                <div className="hello">
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                </div>
                )}
                {Math.floor(details.rating) ===5 &&(
                <div className="hello">
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                <img src={fullstar} alt="" />
                </div>
                )}
               
                {Math.floor(details.rating) ===1 &&(
                <div className="hello">
                <img src={fullstar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                </div>
                )}
                {Math.floor(details.rating) ===0 &&(
                <div className="hello">
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                <img src={emptystar} alt="" />
                </div>
                )}
              </div>
                  }
             </div>
             </div>
             <div className="right">
                <h5>Platforms</h5>
                {show &&<div className="formsdetails">
                   
                   {(details.platforms.name==='PC' || 'Linux') && <img src={apple} alt="" />}
                   {(details.platforms.name==='PlayStation 5'|| 'PlayStation 4') && <img src={playstation} alt="" />}
                   {(details.platforms.name==="Xbox One"||  "Xbox Series S/X") &&  <img src={xbox} alt="" />}
                   {(details.platforms.name==="Nintendo Switch") &&  <img src={ninten} alt="" />}
                   
             
   </div>}
             </div>

             </header>
             {show && <div>
             {details.short_screenshots.map((item,idx)=>{
                return(
                    <div key= {idx} className="imagee">
                    <img src={item.image} alt="" />
                 </div>
                )
             })}
             </div>}
           </motion.div>
           </div>
        </Gamedetailsstyle>
    )
}
export default SearchedDetails;

const Gamedetailsstyle = styled(motion.div)`

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
top: 0%;
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

   ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }
}
.active{
    display: block;
}
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
   
}
.rating{
    margin-top: 2rem;
    p{
        font-size: 1.2rem;
        letter-spacing: 3px;
        opacity: 0.4;
        span{
            font-size: 1rem;
        }
    }
}
.formsdetails{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 1rem;
    img{
        width: 2rem;
    }
}
.right{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.stars{
    img{
       width: 2.2rem;
    }
}
.imagee{
  width: 100%;
  height: 100%;
  /* padding-top: 3rem; */
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 500ms;
  }
}
.left, .right{
    h5{
        color: #012;
        font-size: 1.3rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }
}
/* MEDIA QUERIES */
@media screen and (max-width:900px) {
  
    .imagee{
        max-height: 17rem;
        border-radius: 0;
    }
}
@media screen and (max-width:800px) {
    .bg-container{
     padding: 2rem;
    }
    .imagee{
        max-height: 20rem;
        border-radius: 0;
    }
    .formsdetails{
    img{
        width: 1.5rem;
    }
}
.stars{
    img{
       width: 1.5rem;
    }
}
.rating{
    p{
        font-size: 1rem;
        letter-spacing: 3px;
        opacity: 0.4;
        span{
            font-size: .8rem;
        }
    }
}
}
@media screen and (max-width:500px) {
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        text-align: center;
    }
    .bg-container{
     padding: 1rem;
    }
}
@media screen and (max-width:400px) {
    .bg-container{
     padding: 1rem;
     width: 80%;
    }
    
   
}

`