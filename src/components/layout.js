import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    imgLogo,
    navBar,
    navLinks,
    navLinkItem,
    navLinkLogo,
    navLinkText
} from './layout.module.css'
import logo from '../images/signature.png' 

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <nav className={navBar}>
        <ul className={navLinks}>
          <li className={navLinkLogo}><img className={imgLogo} src ={logo} alt="Logo"/></li>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/project" className={navLinkText}>Projects</Link></li>
          <li className={navLinkItem}><Link to="/contact" className={navLinkText}>Contact Me</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout