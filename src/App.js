import Globalstyle from './GlabalStyle'
import Home from './pages/Home'
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion'
import {Routes,Route} from 'react-router-dom'
import Searched from './pages/Searched';
import Search from './components/Search';
import { useState } from 'react';
function App() {
  const [showhid,setShowhid] = useState(false)

  return (
    <div className="App">
      <AnimatePresence>
          <Globalstyle/>
          <Search showhid={showhid} setShowhid={setShowhid}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route  path='/searched/:search' element={<Searched showhid={showhid} setShowhid={setShowhid}/>}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
