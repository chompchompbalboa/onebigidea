//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class Disappears extends Component {

  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  state = {
    opacity: 1
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    const containerTop = this.container.current.offsetTop
    const windowTop = window.pageYOffset
    const windowHeight = window.innerHeight
    if (containerTop + (windowHeight / 2) < windowTop) {
      this.setState({
        opacity: 0
      })
    }
    else {
      // i want to know where the top of the container is relative to the middle of the screen
      const window50 = windowTop + (windowHeight / 2)
      const opacity = ((Math.abs(containerTop - window50) / windowHeight) * 2) > 1 
                      ? 2 - ((Math.abs(containerTop - window50) / windowHeight) * 2)
                      : ((Math.abs(containerTop - window50) / windowHeight) * 2)
      this.setState({
        opacity: opacity > 1 ? 1 : opacity
      })
    }
  }

  render() {
    const {
      children
    } = this.props
    const {
      opacity
    } = this.state
    return (
      <Container
        ref={this.container}
        opacity={opacity}>
        {children}
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div.attrs(props => ({
  style: { opacity: props.opacity }
}))`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
`

export default Disappears