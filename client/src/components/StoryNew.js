import React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';
import StoryForm from './StoryForm';
import { Title, Header1, Header4, DividerWhite } from './StyledComp';

export class StoryNew extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getStories())
  }

    render() {
      return (
        <Container>
          <Title>
            <Header1>Add New Story</Header1>
            <Header4><DividerWhite /></Header4>
          </Title>
          <div style={styles.fade}>
            <div style={styles.fade2}>
            <Link to="/profile"><Button color='yellow'>Cancel</Button></Link>
            <StoryForm history={this.props.history} />
            </div>
          </div>
        </Container>
      );
    }
  }

const styles = {
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

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryNew);