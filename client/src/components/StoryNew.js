import React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';
import StoryForm from './StoryForm';
import { Title, Header1, Header4, DividerWhite, BackFade1, BackFade2 } from './StyledComp';

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
          <BackFade1>
            <BackFade2>
            <Link to="/profile"><Button color='yellow'>Cancel</Button></Link>
            <StoryForm history={this.props.history} />
            </BackFade2>
          </BackFade1>
        </Container>
      );
    }
  }

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryNew);