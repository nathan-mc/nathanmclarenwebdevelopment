import React from 'react'
import styled from 'styled-components'

import { device } from '../device';

import logo from '../assets/logo.png'

const ParentDiv = styled.div`
  display: flex;
  flex-direct: row;

  background: var(--bg-primary);

  width: 100%;
`;

const ChildDivL = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 75%;

  @media ${device.tablet} {
    display: flex;
  }
`;

const ChildDivR = styled.div`
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 25%;

  @media ${device.tablet} {
    display: flex;
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: var(--text-accent);
  font-size: 25px;
  font-family: var(--ff-primary);
  padding: 1rem 50px;

  display: flex;
  align-items: center;
`;

const Nav = () => {
  return (
    <ParentDiv>
      <ChildDivL>
        <NavItem href="/"><img src={logo} alt="nathan mclaren web design logo" width="50px" /></NavItem>
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/aboutme">ABOUT ME</NavItem>
        <NavItem href="/contactinfo">CONTACT INFO</NavItem>
      </ChildDivL>
      <ChildDivR>
        <NavItem href="tel:+12042459118">(204) 245-9118</NavItem>
      </ChildDivR>
    </ParentDiv>



  )
}

export default Nav
