//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Tile = ({ 
  children,
	fontSize,
	height
}) => (
  <Container
		containerFontSize={fontSize}
		containerHeight={height}>
    {children}
  </Container>
)
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Tile.defaultProps = {
	height: 'auto',
	fontSize: '1rem'
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
	min-height: ${ props => props.containerHeight };
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: ${ props => props.containerFontSize };
`

export default Tile
