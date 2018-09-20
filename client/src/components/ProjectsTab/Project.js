import React from 'react'
import { connect } from 'react-redux'

class Project extends React.Component {

  render(){
    return(
      <div>
        Current Project
        - tires and wheels
        Last Project
        - doors and windows
        Older Projects
        - couch, bed, storage
      </div>
    )
  }
}

export default connect()(Project)