import { Meta, Story } from '@storybook/react'
import React from 'react'

import { LlamaProvider, LlamaProviderProps } from '../src'

export default {
  title: 'Design System/ThemeSystem',
  component: LlamaProvider,
  argTypes: {},
} as Meta<LlamaProviderProps>

const Template: Story<LlamaProviderProps> = () => (
  <LlamaProvider>
    <div>Provider</div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <p>Paragraph Provider</p>
  </LlamaProvider>
)

export const ThemeSystemDefault = Template.bind({})
