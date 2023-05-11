import {Component} from 'react'

import {
  AppContainer,
  Heading,
  Paragraph,
  UL,
  Container,
  Input,
  Button,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    inputOne: '#8ae323',
    inputTwo: '#014f7b',
    activeBtn: gradientDirectionsList[0].directionId,
    directionValue: gradientDirectionsList[0].value,
  }

  inputOne = event => {
    this.setState({inputOne: event.target.value})
  }

  inputTwo = event => {
    this.setState({inputTwo: event.target.value})
  }

  onClickDirectionBtn = id => {
    const item = gradientDirectionsList.filter(
      eachItem => eachItem.directionId === id,
    )

    const {value} = item[0]

    this.setState({activeBtn: id, directionValue: value})
  }

  render() {
    const {inputOne, inputTwo, activeBtn, directionValue} = this.state

    return (
      <AppContainer
        direction={directionValue}
        colorOne={inputOne}
        colorTwo={inputTwo}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph size="20">Choose Direction</Paragraph>
        <UL>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              details={eachItem}
              isActiveBtn={eachItem.directionId === activeBtn}
              onClickDirectionBtn={this.onClickDirectionBtn}
            />
          ))}
        </UL>
        <Paragraph size="20">Pick the Colors</Paragraph>
        <Container direction="row" marginRight="0">
          <Container direction="column" marginRight="45">
            <Paragraph size="18">{inputOne}</Paragraph>
            <Input type="color" onChange={this.inputOne} value={inputOne} />
          </Container>
          <Container direction="column" marginRight="0">
            <Paragraph size="18">{inputTwo}</Paragraph>
            <Input type="color" onChange={this.inputTwo} value={inputTwo} />
          </Container>
        </Container>
        <Button>Generate</Button>
      </AppContainer>
    )
  }
}

export default GradientGenerator
