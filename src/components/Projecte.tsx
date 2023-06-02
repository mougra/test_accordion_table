import { NavLink } from 'react-router-dom'
import projectList from '../assets/svg/task.svg'
import '../styled/aside.scss'

interface ProjecteProps {
  link: string
}

function Projecte({ link }: ProjecteProps) {
  return (
    <div className='nav-container'>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'active-link' : 'noactive-link'
        }
      >
        <div className='nav_item'>
          <img
            src={projectList}
            alt='Display card line'
            className='main-app-svg'
          />
        </div>
      </NavLink>
    </div>
  )
}

export default Projecte
