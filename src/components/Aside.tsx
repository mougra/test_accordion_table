import React from 'react'
import Projecte from './Projecte'

function Aside() {
  return (
    <>
      <div className='aside-navigation'>
        <Projecte link='/test_accordion_table/' />
        <Projecte link='/NotFound' />
        <Projecte link='/NotFound' />
        <Projecte link='/NotFound' />
      </div>
    </>
  )
}

export default Aside
