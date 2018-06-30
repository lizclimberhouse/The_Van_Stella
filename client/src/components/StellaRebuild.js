import React from 'react';
import { Step, Icon } from 'semantic-ui-react';
import StellaOptions from './StellaOptions';
import { BackFade1 } from './StyledComp';

class StellaRebuild extends React.Component {
  state = { option: "GettingStella", text: "", active1: true, active2: false, active3: false }

  setOption1 = () => {
    this.setState( state => {
      return { option: "GettingStella", active1: true, active2: false, active3: false }
    })
  }

  setOption2 = () => {
    this.setState( state => {
      return { option: "CleanOut", active1: false, active2: true, active3: false }
    })
  }

  setOption3 = () => {
    this.setState( state => {
      return { option: "Rebuild", active1: false, active2: false, active3: true  }
    })
  }

  render() {
    const { option } = this.state;
    return(
      <div>
        <Step.Group stackable='tablet' widths={3}>
          <Step active={this.state.active1} onClick={this.setOption1}>
            <Icon name='cart' />
            <Step.Content>
              <Step.Title>Getting Stella</Step.Title>
            </Step.Content>
          </Step>
          <Step active={this.state.active2} onClick={this.setOption2}>
            <Icon name='trash' />
            <Step.Content>
              <Step.Title>Clean Out</Step.Title>
            </Step.Content>
          </Step>
          <Step active={this.state.active3} onClick={this.setOption3}>
            <Icon name='wrench' />
            <Step.Content>
              <Step.Title>Rebuild</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <BackFade1>
          <StellaOptions option={option} />
        </BackFade1>
      </div>
    )
  }
}

export default StellaRebuild;