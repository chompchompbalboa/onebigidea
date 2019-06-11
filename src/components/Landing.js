//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Landing = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Header>
        one big idea:
      </Header>
      <Paragraph>
        If Congress doesn't do their job, they shouldn't have a job.
      </Paragraph>
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 0 7vw;
`

const LogoContainer = styled.div`
  margin: 10vh 0 5vh 0;
`

const Header = styled.h1``

const Paragraph = styled.div`
  margin-bottom: 3vh;
  font-size: 1.65rem;
`

export default Landing