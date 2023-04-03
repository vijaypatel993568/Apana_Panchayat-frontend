import React from 'react'
import Wrapper from '../assets/wrappers/Sidebar'
import NavLinks from './Navlinks';
const Sidebar = () => {


  return (
    <Wrapper>
      <div
        className="show-sidebar sidebar-container"
      >
        <div className='content'>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar
