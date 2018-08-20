import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { deleteStory } from '../actions/stories'
import { setFlash } from '../actions/flash'

class StoryDelete extends React.Component {

  deleteStory = (id) => {
    const { dispatch } = this.props
    dispatch(deleteStory(id))
    dispatch(setFlash('Story Deleted. Redirected to Home page', 'red'))
    this.props.history.push('/archive')
  }

  render() {
    const { id } = this.props
    return(
      <div>
        <br />
        <p>Permanently delete this story?</p>
        <Button color='red' onClick={() => this.deleteStory(id)}>Confirm</Button>
      </div>
    )
  }
}

export default connect()(StoryDelete)