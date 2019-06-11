//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo.png'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const LogoContainer = () => {
  return (
    <Container>
      <StyledImage src={logo}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

const StyledImage = styled.img`
  width: 40vw;
  height: auto;
`

export default LogoContainer