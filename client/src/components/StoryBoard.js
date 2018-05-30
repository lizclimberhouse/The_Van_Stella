import React from 'react';
import { Header, Container, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getStories } from '../actions/stories';

class StoryBoard extends React.Component {

  componentDidMount() {
    const { dispatch, stories } = this.props;
    // debugger 
    dispatch(getStories())
  }

  render(){
    const { stories } = this.props;
    // debugger
      return(
        <div style={styles.storyBox}>
          <Header as='h2'>StoryBoard</Header>
          <Header as='h3'>Story1</Header>
          <Header as='h4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut sapien eu ipsum convallis aliquet. Etiam aliquam ex at consectetur dictum. Donec mattis eget velit sed egestas. Vivamus quis suscipit nulla, id semper felis. Fusce rutrum lorem eu dui eleifend euismod. Aliquam quis facilisis massa, sed consequat ante. Ut suscipit neque sed laoreet convallis. Aliquam eu dolor id tortor aliquet lacinia. Mauris dictum risus finibus massa tempor, non finibus dolor eleifend. Praesent id enim euismod, semper dolor sit amet, condimentum quam. Sed porttitor porta varius. Aenean sed facilisis est. Donec lacinia convallis ex, quis volutpat erat congue ac. Nulla malesuada neque vulputate, commodo lacus ac, iaculis felis.<br/><br/>Sed rhoncus dui ac nibh rhoncus, vel consequat dolor congue. Donec dolor massa, convallis in rutrum ut, varius at nisi. Sed vitae mollis enim. Nam dictum nibh quis feugiat pulvinar. Vestibulum pretium, nunc eget vestibulum porta, justo ex sodales orci, sed porta quam felis in eros. Aliquam erat volutpat. Vivamus mattis fermentum nisi, eu aliquet urna porttitor nec. Nunc sagittis nisi vel pellentesque vehicula. Vivamus ullamcorper mollis lacus non imperdiet. Curabitur non orci vel turpis malesuada malesuada sed vel magna. Etiam efficitur, lacus nec ullamcorper scelerisque, lorem felis scelerisque ipsum, at cursus ipsum risus id orci. Quisque venenatis ante fermentum dolor pulvinar commodo.<br/><br/>Donec id ante at elit viverra vestibulum eu a tortor. Sed ac ex et elit congue ullamcorper ut eget mi. Vestibulum quis ullamcorper elit. Etiam tristique turpis vitae ante maximus, vitae porta diam finibus. Sed finibus libero nisl, eget pellentesque diam dapibus quis. Proin sit amet sollicitudin lorem, in venenatis lacus. Nulla fringilla ornare posuere. Integer quis facilisis purus, sed laoreet enim. Aliquam non risus viverra, auctor nibh vel, vestibulum tortor. Aliquam non aliquet mi.</Header>
          <div>
            {/* { stories ? 
            <p>something</p>
            :
            <p>nothing</p>} */}
            { stories.map( story =>
              <p>{story.title}</p>
            )}
          </div>
        </div>
      )
    }
}

const styles = {
  storyBox: {
    backgroundColor: 'yellow',
    padding: '50px',
  }
}

const mapStateToProps = (state) => {
  return { stories: state.stories }
}

export default connect(mapStateToProps)(StoryBoard);