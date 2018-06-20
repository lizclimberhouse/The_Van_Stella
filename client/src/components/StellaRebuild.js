import React from 'react';
import { Header, Step, Icon, Image, Segment } from 'semantic-ui-react';

class StellaRebuild extends React.Component {

  render() {
    return(
      <div>
        <div>
          <Step.Group attached='top'>
            <Step>
              <Icon name='truck' />
              <Step.Content>
                <Step.Title>Getting Stella</Step.Title>
                {/* <Step.Description>Choose your shipping options</Step.Description> */}
              </Step.Content>
            </Step>

            <Step active>
            {/* Need to make a toggle or something for which step is active :) */}
              <Icon name='trash' />
              <Step.Content>
                <Step.Title>Clean Out</Step.Title>
                {/* <Step.Description>Enter billing information</Step.Description> */}
              </Step.Content>
            </Step>

            <Step>
              <Icon name='wrench' />
              <Step.Content>
                <Step.Title>Rebuild</Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <Segment attached style={styles.border}>
            <p>Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked Text here depending on the differnet button clicked</p>
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

{/* <div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Purchase</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div>

<div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Undoing</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div>

<p>The Cleaning</p>
<div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Undoing</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div>

<p>Insulation</p>
<div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Undoing</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div>

<p>Flooring</p>
<div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Undoing</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div>
<p>Sit & Sleep</p>
<div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Undoing</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div>
<p>Make It Your Own</p>
<div style={styles.fade}>
<div style={styles.fade2}>
  <Header as='h3'>The Undoing</Header>
  <p>Wow, KSL, you are amazing. We bought Stella on a hot Saturday afternoon for less than half of what we should have paid.</p>
</div>
</div> */}