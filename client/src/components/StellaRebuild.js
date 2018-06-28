import React from 'react';
import { Step, Icon, Segment } from 'semantic-ui-react';
import Options from './Options';

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
        <div>
          <Step.Group attached='top' style={styles.border}>
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
          <Segment attached style={styles.border}>
            <Options option={option} />
          </Segment>
        </div>
      </div>
    )
  }
}


const styles = {
  border: {
    margin: "0",
    border: "none",
    // boarderShaddow: "none",
  },

  // fade: {
  //   backgroundColor: "rgba(255, 255, 255, 0.4)",
  //   margin: "1rem 0",
  //   padding: "1em 1em",
  //   borderRadius: ".28571429rem",
  // },
  // fade2: {
  //   backgroundColor: "rgba(255, 255, 255, 0.7)",
  //   margin: "1rem 0",
  //   padding: "1em 1em",
  //   borderRadius: ".28571429rem",
  // }
}

export default StellaRebuild;