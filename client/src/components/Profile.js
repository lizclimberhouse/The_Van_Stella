import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import StoryBoard from './StoryBoard';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return(
      <Container style={styles.mainPadding}>
        <div style={styles.heading}>
          <Header as='h1' textAlign='center'>Profile</Header>
          <Header as='h4' textAlign='center' style={styles.equation}><Divider style={styles.divider} /><Link to='add_story'>Add New Story</Link></Header>
        </div>
        <br/>
        <StoryBoard url={this.props.match.path} history={this.props.history} />
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

export default Profile;
