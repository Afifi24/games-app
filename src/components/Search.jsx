import React, { useState } from 'react'
import styled from 'styled-components'
import {SiCodeigniter} from 'react-icons/si'
import { useNavigate,Link } from 'react-router-dom'
const Search = ({setShowhid,showhid}) => {
    const navigate = useNavigate()
    const [Input,setInput] = useState()
    const sumbitHandler = (e)=>{
        e.preventDefault()
        setInput('')
        navigate('/searched/' + Input)

    }
    
  return (
    <Searchstyle>
         <div className="search">
            <div className="icons">
              <SiCodeigniter/><Link to={'/'}>ignite</Link>
            </div>
            <form onSubmit={sumbitHandler}  >
              <input value={Input} onChange={(e)=>setInput(e.target.value)} type="text" />
              <button onClick={()=>setShowhid(!showhid)} type='submit'>Search</button>
            </form>
        </div>
    </Searchstyle>
  )
}

export default Search

const Searchstyle = styled.div`

.search{
  display: grid;
  place-items: center;
  margin-bottom: 4rem;
  margin-top: 3rem;
}
.icons{
  display: flex;
  gap:.5rem;
  font-size: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  a{
    font-weight: 700;
    text-decoration: none;
    color:#111;
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
/* MEDIA QUERIES */
@media screen and (max-width:500px) {
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