// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.colorOne},
    ${props => props.colorTwo}
  );
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 27px;
  font-family: 'roboto';
  font-weight: bold;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-size: ${props => props.size}px;
  font-family: 'roboto';
  font-weight: 400;
  margin-top: 25px;
`
export const UL = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items: center;
  margin-right: ${props => props.marginRight}px;
`

export const Input = styled.input`
  width: 90px;
  height: 47px;
  padding: 0px;
  margin-top: 10px;
`

export const Button = styled.button`
  width: 140px;
  height: 50px;
  background-color: #00c9b7;
  border-radius: 9px;
  border: none;
  color: #1e293b;
  font-size: 17px;
  font-family: 'roboto';
  font-weight: 600;
  margin-top: 35px;
  cursor: pointer;
  outline: none;
`
