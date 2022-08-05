import React, {useState} from 'react'
import {BsList} from "react-icons/bs";

const SideNav = () => {
  const [width, setWidth] = useState("20%")

  function toggleWidth(){
    width === "20%" ? setWidth("10%") : setWidth("20%")
  }
  return (
    <div className='dashboardSideNav' style={{width: width}}>

      <div className='sideNavLogoSection' >

        <div id='sideNavLogo'>
          N
        </div>

        <div id='sideNavHamburger'>
          <BsList color='white' fontSize={20} onClick={toggleWidth} cursor='pointer'/>
        </div>
        
      </div>

        SideNav
    </div>
  )
}

export default SideNav