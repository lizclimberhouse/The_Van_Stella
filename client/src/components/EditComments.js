import React from 'react'
import Comments from './Comments'
import { Divider } from 'semantic-ui-react'

class EditComments extends React.Component {

  

  render() {
    return(
      <div>
        <Divider />
        <Comments story={this.props.story} comments={this.props.comments} url="profile" />
      </div>
    )
  }
}

export default EditComments