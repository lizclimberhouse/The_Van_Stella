import React from 'react';
import { Header, Step, Icon, Image, Segment, Button } from 'semantic-ui-react';
import Options from './Options';

class StellaRebuild extends React.Component {
  state = { option: "GettingStella", text: "" }

  setOption1 = () => {
    const { option } = this.state;
    this.setState( state => {
      return { option: "GettingStella" }
    })
  }

  setOption2 = () => {
    const { option } = this.state;
    this.setState( state => {
      return { option: "CleanOut" }
    })
  }

  setOption3 = () => {
    const { option } = this.state;
    this.setState( state => {
      return { option: "Rebuild" }
    })
  }

  render() {
    return(
      <div>
        <div>
          <Step.Group attached='top'>
            <Step onClick={this.setOption1}>
              <Icon name='truck' />
              <Step.Content>
                <Step.Title>Getting Stella</Step.Title>
                {/* <Step.Description>Choose your shipping options</Step.Description> */}
              </Step.Content>
            </Step>

            <Step onClick={this.setOption2}>
            {/* Need to make a toggle or something for which step is active :) */}
              <Icon name='trash' />
              <Step.Content>
                <Step.Title>Clean Out</Step.Title>
                {/* <Step.Description>Enter billing information</Step.Description> */}
              </Step.Content>
            </Step>

            <Step onClick={this.setOption3}>
              <Icon name='wrench' />
              <Step.Content>
                <Step.Title>Rebuild</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Segment attached style={styles.border}>
            <Options option={this.state.option} />
            {/* <p>Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked</p> */}
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
  },
  fade: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    margin: "1rem 0",
    padding: "1em 1em",
    borderRadius: ".28571429rem",
  },
  fade2: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    margin: "1rem 0",
    padding: "1em 1em",
    borderRadius: ".28571429rem",
  }
}

export default StellaRebuild;