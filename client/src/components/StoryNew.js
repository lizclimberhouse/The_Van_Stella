import React from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';
import StoryForm from './StoryForm';

export class StoryNew extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getStories())
  }

    render() {
      return (
        <Container style={styles.mainPadding}>
          <div style={styles.heading}>
            <Header as='h1' textAlign='center'>Add New Story</Header>
            <Header as='h4' textAlign='center' style={styles.equation}><Divider style={styles.divider} /></Header>
          </div>
          <br/>
          <StoryForm />
        </Container>
      );
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

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryNew);