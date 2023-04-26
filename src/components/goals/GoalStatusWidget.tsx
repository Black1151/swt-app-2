import React from 'react'
import { Badge } from 'native-base'
import theme from '../../../theme/theme'

interface Props {
  status: string;
}

const GoalStatusWidget = ({ status }: Props) => {

  console.log(status)

  return (
    <Badge variant="solid" colorScheme={theme.colors.primary[500]}>
      {status}
    </Badge>
  )
}

export default GoalStatusWidget
