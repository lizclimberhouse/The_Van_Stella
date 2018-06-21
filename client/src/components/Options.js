import React from 'react';

class Options extends React.Component {

  render() {
    const option = this.props
    if (option == 'GettingStella') {
      return(
        <div>GettingStella</div>
      )
    }
    else if (option === "CleanOut") {
      return(
        <div>CleanOut</div>
      )
    }
    else {
      return(
        <div>Rebuild</div>
      )
    }
  }
}

export default Options;