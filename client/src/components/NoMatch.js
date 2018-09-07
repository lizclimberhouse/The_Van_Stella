import React from 'react'
import { Link } from 'react-router-dom'
import { Header1 } from './StyledComp'

const NoMatch = () => (
  <Header1>
    Page Not Found
    <Link to='/'> Home</Link>
  </Header1>
)

export default NoMatch
