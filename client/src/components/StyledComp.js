import styled from 'styled-components';
// import Mountains from '../images/mountains.png';  
  // background: url(${Mountains});
  // background-repeat: no-repeat;
  // background-size: cover;
import Mountains from '../images/mountains.jpg'

export const AppBackground = styled.div`
  background: url(${Mountains}) no-repeat center; 
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
