import React from 'react'
import mvt_useState from './components/mvt_useState'
import mvt from './components/mvt'
import mvtUsecontext from './components/mvtUsecontext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Mai Văn Trường - hock</h1>
      <hr/>
      <mvt_useState />
      <hr/>
      <mvt/>
      <hr/>
      <mvtUsecontxt />
    </div>
  )
}
