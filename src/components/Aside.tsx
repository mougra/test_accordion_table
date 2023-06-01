import React from 'react'
import Projecte from './Projecte'

function Aside() {
  return (
    <>
      <div className='aside-navigation'>
        <Projecte link='/' />
        <Projecte link='/NotFound' />
        <Projecte link='/NotFound' />
        <Projecte link='/NotFound' />
      </div>
    </>
  )
}

export default Aside
