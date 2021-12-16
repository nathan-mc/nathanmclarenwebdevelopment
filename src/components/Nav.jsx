import React from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.png'

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
  align-items: center;

  background: var(--bg-primary);
`;

const NavItem = styled.a`
  text-decoration: none;
  color: var(--text-accent);
  font-size: 25px;
  font-family: var(--ff-primary);
  padding: 1rem 50px;
`;

const Nav = () => {
  return (
    <NavDiv>
      <NavItem href="/"><img src={logo} alt="nathan mclaren web design logo" width="50px"></img></NavItem>
      <NavItem href="/">HOME</NavItem>
      <NavItem href="/aboutme">ABOUT ME</NavItem>
      <NavItem href="/contactinfo">CONTACT INFO</NavItem>
    </NavDiv>
  )
}

export default Nav
