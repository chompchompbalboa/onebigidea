//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Disappears from '../components/Disappears'
import Page from '../components/Page'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Home = () => {
  return (
    <Page>
      <Header />
      <Disappears>
        <Intro>
          one big idea:
        </Intro>
        <Paragraph>
          If Congress doesn't do their job, they shouldn't have that job.
        </Paragraph>
      </Disappears>
      <Disappears>
        Only 18% of Americans approve of the work Congress is doing.
      </Disappears>
      <Disappears>
        We don't know about you, but our boss would have an issue if he only approved of 18% of the work we did.
      </Disappears>
      <Disappears>
        As a matter of fact, if we didn't improve on that number, we'd probably lose our job.
      </Disappears>
      <Disappears>
        We think Congress should be held similarly accountable. To make that happen, we want to:
      </Disappears>
      <Disappears>
        Pass a constitutional amendment stating that if Congress's approval rating drops below 40%, no member is eligible for re-election
      </Disappears>
    </Page>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Intro = styled.h1`
font-size: 1em;
text-decoration: underline;
`

const Paragraph = styled.div`
`

export default Home