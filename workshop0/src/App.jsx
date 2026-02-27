import { Routes, Route, Link } from 'react-router-dom'
import { DAppKitProvider, ConnectButton } from '@mysten/dapp-kit-react'
import { dAppKit } from './util/dapp-kit'
import {Home} from './home'
import './App.css'


function App() {
  return (
    <DAppKitProvider dAppKit={dAppKit}>
      <div className='h-screen w-screen'>
        <nav className='top-0 left-0 w-full h-16 bg-gray-800/40 gap-x-6 text-white flex items-center justify-end px-4'>
          <p>Workshop 0</p>
          <ConnectButton />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </DAppKitProvider>
  )
}

export default App

//pwd = "suiwallet "(space included)