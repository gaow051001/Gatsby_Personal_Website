import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    imgLogo,
    navBar,
    navLinks,
    navLinkItem,
    navLinkLogo,
    navLinkText,
    separatorLine
} from './layout.module.css'
import logo from '../images/signature.png' 
import { Fade } from "react-awesome-reveal";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <nav className={navBar}>
        <ul className={navLinks}>
          <Fade direction="down" cascade damping={0.3} triggerOnce>
            <li className={navLinkLogo}><img className={imgLogo} src ={logo} alt="Logo"/></li>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="/project" className={navLinkText}>Projects</Link></li>
            <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact Me</Link></li>
          </Fade>
        </ul>
      </nav>
        <hr className={separatorLine}/>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout