import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
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
          <Segment>
            <Segment>
            <StoryForm history={this.props.history} />
            </Segment>
          </Segment>
        </Container>
      );
    }
  }

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryNew);