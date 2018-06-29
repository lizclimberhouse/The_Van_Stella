import styled from 'styled-components';

import Mountains from '../images/mountains.jpg'

export const AppBackground = styled.div`
  background: url(${Mountains}) no-repeat center;
  height: 100vh;
  overflow: scroll;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 50px;
`
export const Title = styled.div`
  padding-top: 50px;
`
export const DividerWhite = styled.hr`
  background-color: white;
  height: 3px;
  border: none;
  border-radius: 2px;
`
export const Header1 = styled.h1`
  color: white;  
  text-align: center;
`
export const Header2 = styled.h2`
  color: white;  
`

export const Header4 = styled.h4`
  color: white;  
  text-align: center;
`

export const BackFade1 = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  margin: 1rem 0;
  padding: 1em 1em;
  border-radius: .28571429rem;
`
export const BackFade2 = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  margin: 1rem 0;
  padding: 1em 1em;
  border-radius: .28571429rem;
`