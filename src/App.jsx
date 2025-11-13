import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Frontmaster from './front/components/Frontmaster'
import Home from './front/pages/Home'
import News from './front/pages/News'
import Causes from './front/pages/Causes'
import Events from './front/pages/Events'
import Gallery from './front/pages/Gallery'
import Login from './front/pages/Login'
import Singup from './front/pages/Singup'
import Causesoption from './front/pages/Causesoption'
import Causesoptiontow from './front/pages/Causesoptiontow'
import Eventsdetails from './front/pages/Eventsdetails'
import Newsdetails from './front/pages/Newsdetails'
import Contact from './front/pages/Contact'
import Profile from './front/pages/Profile'

const App = () => {


  return (
    <>
 
        <Routes>
          <Route path='' element={<Frontmaster />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/front/news' element={<News />}></Route>
            <Route path='/front/causes' element={<Causes />}></Route>
            <Route path='/front/events' element={<Events />}></Route>
            <Route path='/front/gallery' element={<Gallery />}></Route>
            <Route path='/front/login' element={<Login />}></Route>
            <Route path='/front/signup' element={<Singup />}></Route>
            <Route path='/front/causesoption' element={<Causesoption />}></Route>
            <Route path='/front/causesoptiontow' element={<Causesoptiontow />}></Route>
            <Route path='/front/Eventsdetails' element={<Eventsdetails />}></Route>
            <Route path='/front/newsdetails' element={<Newsdetails />}></Route>
            <Route path='/front/contact' element={<Contact />}></Route>
            <Route path='/front/profile' element={<Profile/>}></Route>
          </Route>
        </Routes>
      
    </>
  )
}

export default App
