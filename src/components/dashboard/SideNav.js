import React, {useState} from 'react'
import {BsList} from "react-icons/bs"
import {BsFillWalletFill} from "react-icons/bs";

const SideNav = () => {
  const [width, setWidth] = useState("20%")
  const[activeLink, setActiveLink] = useState(null)
  let activeStyle = {
    backgroundColor: "#474747", color: 'var(--primary_green)'
  }
  // let activeIconStyle ={
  //   color: 'var(--primary_green)'
  // }

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
          <BsList color='white'display= 'flex' fontSize={22} onClick={toggleWidth} cursor='pointer'/>
        </div>
        
      </div>
      <div className='sideNavLinks'>
        <div className='links'>
          <button className='link'
            onClick={() => setActiveLink("events")}
            style={activeLink === "events" ? activeStyle : {color: 'white'}}>
            <BsFillWalletFill color={activeLink ? 'var(--primary_green)': 'white'}/> 
            events
          </button>

        </div>
        

      </div>
        
    </div>
  )
}

export default SideNav