import React from 'react'
import {Consumer} from './context'

const BlueText = ({children}) => <span style={{color: 'blue'}}>{children}</span>

class RedText extends React.Component {
  render() {
    return <span style={{color: 'red'}}>{this.props.children}</span>
  }
}

const DynamicComponent = ({children}) => (
  <Consumer>
    {({TextComponent}) => {
      return <TextComponent>{children}</TextComponent>
    }}
  </Consumer>
)


export {BlueText, RedText, DynamicComponent}
