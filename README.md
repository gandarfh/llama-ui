<p align="center">
  <img src="assets/logo-llama-ds.png" alt="llama logo" height="280" />
</p>

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![styled with emotion](https://img.shields.io/badge/styled_with-emotion-ff69b4.svg)](https://github.com/emotion-js/emotion)
[![NPM](https://img.shields.io/npm/v/@llama-ui/react?color=%23eee111&label=version)](https://www.npmjs.com/package/@llama-ui/react)

This project contains my registry packages using

- Lerna
- Emotion
- Jest
- Typescript

## Install

```bash
yarn add @llama-ui/react
```

## Usage

```tsx
// app.tsx
import React from 'react'
import { ThemeProvider } from '@llama-ui/react'

const App = () => {
  return <ThemeProvider>...your code</ThemeProvider>
}

export default App
```

# Roadmap

## Documentation to create

- [ ] getting started
- [ ] Home showing all features and description about llama
- [ ] styled props (how work)
- [ ] responsive (how work)
- [ ] custom theme (creating)
- [ ] default theme (easy info)
- [ ] typescript (llama.d.ts)
- [ ] properties and colors keys
- [ ] global styles

## Factory

- [x] styled system
- [x] responsive props
- [x] opacity colors tokens
- [ ] custom theme
- [ ] generate theme types
- [x] support css variables
- [ ] inject custom theme components into components
- [ ] remove from repo documentations

## Components to create and more documentations

- [x] Factory of any html/svg element
- [x] Theme provider
- [x] Global style

- [ ] Typography

  - [ ] Heading
  - [ ] Paragraph

- [x] Layouts

  - [x] Box
  - [x] Grid
  - [x] Flex
  - [x] Container

- [ ] Form

  - [ ] Input
  - [ ] Button
  - [ ] Radio Button
  - [ ] Checkbox
  - [ ] Switch
  - [ ] Select
  - [ ] Date Picker
  - [ ] Range Picker
  - [ ] slider
  - [ ] range slider
  - [ ] Autocomplete

- [ ] Loadings

  - [ ] circular
  - [ ] progress
  - [ ] linear
  - [ ] dots
  - [ ] shadow skeleton

- [ ] Table

  - [ ] Head Table
  - [ ] Column table
  - [ ] Row table
  - [ ] Cell table

- [ ] Modal

  - [ ] overlay modal
  - [ ] Header modal
  - [ ] content modal

- [ ] Drawer

  - [ ] overlay drawer
  - [ ] content drawer

- [ ] Tooltip

- [ ] Popover

- [ ] Portal

- [ ] Animations
<!-- Find animations to create -->
