import { Box, Text, useApp } from 'ink'
import Spinner from 'ink-spinner'
import React from 'react'

interface CommandProps {
  action: string
  label: string
  run: () => Promise<void>
}

const CommandActive = ({ action, label, run }: CommandProps) => {
  const { exit } = useApp()
  const handleRun = React.useCallback(async () => {
    try {
      await run()
    } catch (err) {
      console.log(err)
      exit()
    }
  }, [run, exit])

  React.useEffect(() => {
    handleRun()
  }, [handleRun])

  return (
    <Box alignItems="center">
      <Text color="yellow">{action}: </Text>
      <Text color="green">{label}</Text>
      <Box marginLeft={1}>
        <Spinner />
      </Box>
    </Box>
  )
}

export default CommandActive
