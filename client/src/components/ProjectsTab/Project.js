import React from 'react'
import { connect } from 'react-redux'

class Project extends React.Component {

  render(){
    return(
      <div>
        Current Project
        - tires and wheels will be 35's after everything is said and done.
        Last Project
        - we replaces the side doors along with pop out windows in all for doors. Great air circulation at night and now the dog has some wind to keep her distracted from the driving.
        Older Projects
        - the rebuild took all of 2 weeks! amazing. New we have a couch, which can also turn into a bed. A bed, that is almost the size of a full. and storage under the bed as well as under the couch. Pretty good.
      </div>
    )
  }
}

export default connect()(Project)