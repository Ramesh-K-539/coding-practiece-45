// Style your elements here

import styled from 'styled-components'

export const LI = styled.li`
  list-style-type: none;
  margin-left: 0px;
  padding-left: 0px;
  margin-right: 15px;
`
export const Button = styled.button`
  height: 38px;
  width: 100px;
  border: none;
  border-radius: 5px;
  background-color: #ededed;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.active ? 1 : 0.5)};
`
