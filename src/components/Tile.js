//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Tile = ({ 
  backgroundColor,
  children,
	fontSize,
  height,
  margin,
  padding,
  textAlign
}) => (
  <Container
    containerBackgroundColor={backgroundColor}
		containerFontSize={fontSize}
		containerHeight={height}
		containerMargin={margin}
		containerPadding={padding}
		containerTextAlign={textAlign}>
    {children}
  </Container>
)
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Tile.defaultProps = {
  backgroundColor: 'transparent',
	height: 'auto',
  fontSize: '1.25rem',
  margin: '0',
  padding: '0',
  textAlign: 'left',
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  min-height: ${ props => props.containerHeight };
  margin: ${ props => props.containerMargin };
  padding: ${ props => props.containerPadding };
	display: flex;
	flex-direction: column;
  justify-content: center;
  background-color: ${ props => props.containerBackgroundColor };
	font-size: ${ props => props.containerFontSize };
	text-align: ${ props => props.containerTextAlign };
`

export default Tile
