import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import Nav from '../images/nav.png';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
           <Link to='/profile'>
            <Menu.Item name='Profile' />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='Home' />
          </Link>
          <Link to='/stella'>
            <Menu.Item name='Stella' />
          </Link>
          { this.rightNavs() }
        </Menu>
      </div>
    );
  }
}
// style={styles.navBar}
// const styles = {
//   navBar: {
//     height: '300px',
//     backgroundImage: `url(${Nav})`,
//     width: 'auto',
//     backgroundRepeat: 'no-repeat'
//   },
// }

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
