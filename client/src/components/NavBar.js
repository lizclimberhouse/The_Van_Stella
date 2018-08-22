import React, { Component } from 'react'
import { Menu, Container, Image, MenuMenu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../actions/auth'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props

    if (user.id) {
      return (
        <Menu.Menu position='right'>
           <Link to='/profile'>
            <Menu.Item style={styles.navLinks} name='Profile' />
          </Link>
          <Menu.Item
            style={styles.navLinks}
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      )
    }
    return (
      null
      // <Menu.Menu position='right' verticalAlign='top'>
      //   <Image src={van} style={styles.pic} />
      // </Menu.Menu>
      // <Menu.Menu position='right'>
      //   <Link to='/register'>
      //     <Menu.Item style={styles.navLinks} name='Register' />
      //   </Link>
      //   <Link to='/login'>
      //     <Menu.Item style={styles.navLinks} name='Login' />
      //   </Link>
      // </Menu.Menu>
    )
  }

  render() {
    return (
      <div>
        <Menu pointing secondary style={styles.border}>
          <Link to='/'>
            <Menu.Item style={styles.navLinks} name='Home' />
          </Link>
          <Link to='/stella'>
            <Menu.Item style={styles.navLinks} name='Stella' />
          </Link>
          <Link to='/archive'>
            <Menu.Item style={styles.navLinks} name='Archive' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}

const styles = {
  navLinks: {
    color: 'white',
  },
  border: {
    border: 'none',
  },
  pic: {
    height: '50px',
    paddingRight: '20px',
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar))
