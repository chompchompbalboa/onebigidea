//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import logo from '../images/logo.png'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const LogoContainer = ({
  size
}) => {
  return (
    <Container>
      <StyledImage
        size={size}
        src={logo}/>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
LogoContainer.propTypes = {
  size: string
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

const StyledImage = styled.img`
  height: ${ props => props.size };
  width: auto;
`

export default LogoContainer