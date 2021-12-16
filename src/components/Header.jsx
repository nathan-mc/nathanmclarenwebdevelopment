import React from 'react'
import styled from 'styled-components'

import { device } from '../device';

import headingimage from '../assets/header.png'

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;

  background: var(--bg-primary);

  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
  }

  padding-bottom: 2.5rem;
`;

const ChildDivL = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  @media ${device.tablet} {
    width: 50%;
  }
`;

const ChildDivR = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%

  @media ${device.tablet} {
    width: 50%;
  }
`;

const GradientHeader = styled.h1`
  background-color: #4158D0;
  background-image: linear-gradient(90deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: var(--ff-primary);
  font-weight: 900;
  font-size: 65px;
  line-height: 75px;
  letter-spacing: -0.04em;

  padding: 0 5rem;
`;

const Subheading = styled.p`
  font-family: var(--ff-primary);
  font-weight: 900;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.04em;

  color: var(--text-primary);

  padding: 0 5rem;
`;


const Header = () => {
  return (
    <ParentDiv>
      <ChildDivL>
        <GradientHeader>Let’s Build Something Amazing Together</GradientHeader>
        <Subheading>I work closely with my clients to build websites that they are proud to show off.</Subheading>
      </ChildDivL>
      <ChildDivR>
        <img src={headingimage} alt="illustration of person working on computer" width="100%"/>
      </ChildDivR>
    </ParentDiv>
  )
}

export default Header
