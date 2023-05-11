// Write your code here

import {LI, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, isActiveBtn, onClickDirectionBtn} = props
  const {directionId, displayText} = details

  const onClickTheBtn = () => {
    onClickDirectionBtn(directionId)
  }

  return (
    <LI key={directionId}>
      <Button type="button" active={isActiveBtn} onClick={onClickTheBtn}>
        {displayText}
      </Button>
    </LI>
  )
}

export default GradientDirectionItem
