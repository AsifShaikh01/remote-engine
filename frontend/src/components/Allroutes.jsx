import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ClientRegistration from './ClientRegistration'
import DevRegistration from './DevRegistration'
import DevLogin from './DevLogin'
import ClientLogin from './ClientLogin'
import DevBoarding from './DevBoarding'


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/client/register" element={<ClientRegistration/>} />
      <Route path="/developer/register" element={<DevRegistration/>} />
      <Route path="/developer/login" element={<DevLogin/>} />
      <Route path="/client/login" element={<ClientLogin/>} />
      <Route path="/developer/devboard" element={<DevBoarding/>} />
    </Routes>
  )
}

export default Allroutes
