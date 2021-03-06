import { LlamaProvider } from '@llama-ui/theme-system'
import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Box, Container, Flex, Grid } from '../src'
import { BoxProps } from '../src/box'
import { FlexProps } from '../src/flex'
import { GridProps } from '../src/grid'

export default {
  title: 'Design System/Layout',
  component: Grid,
  argTypes: {},
} as Meta<GridProps>

const GridTemplate: Story<GridProps> = () => (
  <LlamaProvider>
    <Container>
      <Grid cols={[2, 4]} gap={4}>
        <Box h={24} w={25} radius={4} bg="primary.700" />
        <Box h={24} w={24} radius={4} bg="primary.700" />
        <Box h={24} w={24} radius={4} bg="primary.700" />
        <Box h={24} w={24} radius={4} bg="primary.700" />
      </Grid>
    </Container>
  </LlamaProvider>
)

export const GridComponent = GridTemplate.bind({})

GridComponent.args = {
  children: 'Grid',
} as GridProps

const FlexTemplate: Story<FlexProps> = () => (
  <LlamaProvider>
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Box h={24} w={24} radius={4} bg="primary.700" />
        <Box h={54} w={24} radius={4} bg="primary.700" />
        <Box h={24} w={24} radius={4} bg="primary.700" />
        <Box h={24} w={24} radius={4} bg="primary.700" />
      </Flex>
    </Container>
  </LlamaProvider>
)

export const FlexComponent = FlexTemplate.bind({})

FlexComponent.args = {
  children: 'Flex',
} as FlexProps

const BoxTemplate: Story<BoxProps> = () => (
  <LlamaProvider>
    <Box h={124} w={124} radius={8} bg="primary.700" />
  </LlamaProvider>
)

export const BoxComponent = BoxTemplate.bind({})

BoxComponent.args = {
  children: 'Box',
} as BoxProps
