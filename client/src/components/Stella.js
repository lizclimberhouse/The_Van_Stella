import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';

export class Stella extends React.Component {

  render() {
    return(
      <Container style={styles.mainPadding}>
        <div style={styles.heading}>
          <Header as='h1' textAlign='center'>Stella</Header>
          <Header as='h4' textAlign='center' style={styles.equation}><Divider style={styles.divider} />the van</Header>
        </div>
        <br/>
      </Container>
    )
  }
}

const styles = {
  mainPadding: {
    padding: '30px 0',
  },
  divider: {
    backgroundColor: 'white',
  },
  heading: {
    backgroundColor: 'green',
    padding: '50px',
  },
}

export default Stella;