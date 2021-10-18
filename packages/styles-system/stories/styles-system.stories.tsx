import { Meta, Story } from '@storybook/react'
import React from 'react'

import StylesSystem, { StylesSystemProps } from '../src/styles-system'

export default {
  title: 'Design System/StylesSystem',
  component: StylesSystem,
  argTypes: {},
} as Meta<StylesSystemProps>

const Template: Story<StylesSystemProps> = (args) => <StylesSystem {...args} />

export const StylesSystemDefault = Template.bind({})

StylesSystemDefault.args = {
  children: 'StylesSystem',
} as StylesSystemProps
