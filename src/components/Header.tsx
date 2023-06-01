import React from 'react'
import notification from '../assets/svg/actions.svg'
import '../styled/header.scss'

function Header() {
  return (
    <>
      <div className='header'>
        <div className='header_logo'>
          <div className='header_logo-img'></div>
          <h1 className='header_logo-title'>Проект</h1>
        </div>
        <div className='header_user'>
          <img src={notification} alt='notification' className='notification' />
          <div className='user-img'></div>
          <div className='user_data'>
            <span className='user_data-name'>Иванов В.А.</span>
            <span className='user_data-position'>Должность</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
