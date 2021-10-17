import { Box, Text } from 'ink'
import TextInput from 'ink-text-input'
import React from 'react'

interface ActiveFieldProps {
  name: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  label: string
  onSubmit: () => void
  activeField: string
}

const ActiveField = ({
  name,
  value,
  setValue,
  label,
  onSubmit,
  activeField,
}: ActiveFieldProps) => {
  if (activeField !== name) {
    return (
      <Box>
        <Text color="gray">{label}</Text>
        <Text color="gray">{value}</Text>
      </Box>
    )
  }

  return (
    <Box>
      <Text color="greenBright">{label}</Text>
      <TextInput value={value} onChange={setValue} onSubmit={onSubmit} />
    </Box>
  )
}

export default ActiveField
