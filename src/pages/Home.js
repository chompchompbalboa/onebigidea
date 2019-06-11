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
        height="80vh">
				<Landing>
          <Text color="#F97873">
						We solve problems by coming together&nbsp;
					</Text>
          <Text color="#1A5FF8">
            to work on <b>one big idea</b> at a time
          </Text>
				</Landing>
			</Tile>
      <Tile>
        <TileHeader>The problem:</TileHeader>
        Only 18% of Americans approve of the work Congress is doing.<br /><br />
        We think Congress needs some incentive to do better.<br /><br />
			</Tile>
			<Tile>
        <TileHeader>Our big idea:</TileHeader>
        Pass a constitutional amendment stating that if less than 40% of the American people approve of the work Congress is doing, no member is eligible for re-election<br /><br />
			</Tile>
      <Tile>
        <TileHeader>Why this will work:</TileHeader>
        Currently, individual congressman or congresswoman don't have much incentive to work with members they disagree with. <br /><br />
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

const TileHeader = styled.h2`
`

export default Home
