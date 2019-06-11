//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import Tile from '../components/Tile'
import Page from '../components/Page'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Home = () => {
	return (
		<Page>
			<Header />
			<Tile
        fontSize="1.7rem"
        height="100vh">
				<Landing>
          <Text color="#F97873">
						We solve problems by coming together&nbsp;
					</Text>
          <Text color="#1A5FF8">
            to work on one big idea at a time
          </Text>
				</Landing>
			</Tile>
      <Tile>
        <BigIdea>The problem:</BigIdea>
        Only 18% of Americans approve of the work Congress is doing.<br /><br />
				If our boss only approved of 18% of the work we did, we'd probably lose our job.<br /><br />
        We think Congress should be held similarly accountable.<br /><br />
			</Tile>
			<Tile>
        <BigIdea>Our big idea:</BigIdea>
				Pass a constitutional amendment stating that if less than 40% of the American people approve of the work Congress is doing, no member is eligible for re-election
			</Tile>
		</Page>
	)
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Landing = styled.div``

const Text = styled.span`
  color: ${ props => props.color };
`

const BigIdea = styled.h2`
`

export default Home
