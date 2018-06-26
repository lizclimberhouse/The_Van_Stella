import React from 'react';
import { Image } from 'semantic-ui-react';
import pic1 from '../images/nav.png'

class Options extends React.Component {

  render() {
    const { option } = this.props
    if (option == 'GettingStella') {
      return(
        <div>
          <Image size='medium' src={pic1} />
          <p>Getting Stella</p>

        </div>
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