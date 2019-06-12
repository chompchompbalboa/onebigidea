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
				<TileContent>
          <Text color="#fd5650">
						We <LandingLargeText>solve problems</LandingLargeText> by coming together&nbsp;
					</Text>
          <Text color="#1A5FF8">
            to work on <LandingLargeText>one big idea</LandingLargeText> at a time
          </Text>
				</TileContent>
			</Tile>
      <Tile>
        <TileHeader>The problem:</TileHeader>
        <TileContent>
          Only <LargeText>18%</LargeText> of Americans approve of the work Congress is doing. Less than <LargeText>10%</LargeText> believe Congress has their best interests in mind when writing legislation.<br /><br />
          We think Congress needs some <LargeText>incentive to do better.</LargeText><br /><br />
        </TileContent>
			</Tile>
      <SpacerContainer>
        <Spacer />
      </SpacerContainer>
			<Tile>
        <TileHeader>Our big idea:</TileHeader>
        <TileContent>
          We want to pass a <LargeText>constitutional amendment</LargeText> stating that if <LargeText>less than 40%</LargeText> of the American people approve of the work Congress is doing, <LargeText>no member is eligible for re-election</LargeText><br /><br />
        </TileContent>
			</Tile>
      <SpacerContainer>
        <Spacer />
      </SpacerContainer>
      <Tile>
        <TileHeader>Why we think this will work:</TileHeader>
        <TileContent>
          We've built a system that rewards politicians for their refusal to compromise. What we need to do instead is build a system to <LargeText>reward politicians for working together.</LargeText><br /><br />
          We all know there's no greater reward to a politician than <LargeText>re-election</LargeText> - with this amendment, they have to <LargeText>earn that right by working together to gain the approval of the American People.</LargeText>
        </TileContent>
      </Tile>
      <Tile
        backgroundColor="rgb(245, 245, 245)"
        height="30vh"
        fontSize="1.7rem"
        margin="4vh 0 2vh 0"
        padding="3vw"
        textAlign="center">
        <TileContent>
          <b>
          <Text color="#1A5FF8">
            If Congress can't do their job&nbsp;
          </Text>
          <Text color="#fd5650">
            they shouldn't have their job.
          </Text>
          </b>
        </TileContent>
      </Tile>
      <Tile>
        <TileHeader>We need your help:</TileHeader>
        <TileContent>
          We're at the very beginning of this journey. Right now, our focus is on <LargeText>raising public awareness</LargeText> on the idea - and we're relying on you and your <LargeText>word of mouth</LargeText> to help us out.<br/><br/>
          We also need your <LargeText>time and money.</LargeText> Please take a look at the available <LargeText>volunteer</LargeText> openings. If you have the ability to, please <LargeText>donate</LargeText> using the links below.
        </TileContent>
      </Tile>
      <Tile>
        <ActionsContainer>
          <ActionButton>
            Donate
          </ActionButton>
          <ActionButton>
            Volunteer
          </ActionButton>
        </ActionsContainer>
      </Tile>
      <Tile
        backgroundColor="rgb(245, 245, 245)"
        padding="1.5rem 1rem">
        <LargeText>
          one big idea.
        </LargeText>
        based in seattle, wa<br/>
        <em>a registered 527 organization</em>
      </Tile>
		</Page>
	)
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Text = styled.span`
  color: ${ props => props.color };
`

const TileHeader = styled.h1`
`

const TileContent = styled.div``

const LargeText = styled.span`
  font-size: 1.35em;
  font-weight: bold;
`

const LandingLargeText = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

const SpacerContainer = styled.div`
  margin: 3vh 0;
  width: 100%;
  display: flex;
  jusfify-content: center;
  align-items: center;
`

const Spacer = styled.div`
  width: 50%;
  height: 1px;
  background-color: black;
`

const ActionsContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ActionButton = styled.div`
  margin-top: 1rem;
  width: 80%;
  padding: 1rem 0;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.div`
  height: 15vh;
  background-color: rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: rgb(180, 66, 233); 
`

export default Home
