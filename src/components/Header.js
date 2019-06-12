//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Header = () => {
  return (
    <Container>
      <Logo size="4.5vh"/>
      <Donate>
        Donate
      </Donate>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 4.5vh 6vw;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.2) 100%);
`

const Donate = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header