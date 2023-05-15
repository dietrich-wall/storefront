import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import Modal from "../Modal";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav $scrollNav>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              MotorradX.de
          </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

