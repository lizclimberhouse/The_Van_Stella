import React from 'react'
import { connect } from 'react-redux'

class Project extends React.Component {

  render(){
    return(
      <div>
        Current Project

        Last Project

        Older Projects
      </div>
    )
  }
}

export default connect()(Project)