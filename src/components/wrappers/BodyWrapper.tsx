import React from 'react'
import { Box } from 'native-base'

interface Props {
    children: React.ReactNode
}

const BodyWrapper = ({ children }: Props) => {
  return (
    <Box flex={1} p={8}>
      {children}
    </Box>
  )
}

export default BodyWrapper
