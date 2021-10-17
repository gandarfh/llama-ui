<p style="background: #fff; border-radius: 8px;" align="center">
  <img src="logos/logo-llama-ds.png" alt="llama logo" width="340" />
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
import React from "react";
import { ThemeProvider } from "@llama-ui/react";

const App = () => {
  return <ThemeProvider>// your code</ThemeProvider>;
};

export default App;
```

## setting our theme in your project

```tsx
// styles/styled.d.ts
import "@emotion/react";
import { IThemeCustom } from "@llama-ui/react";

declare module "styled-components" {
  export interface DefaultTheme extends IThemeCustom {}
}
```

## Packages

| Project | Package                                              | Version                                                                                                         | Docs                                                                                            |
| ------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| React   | [`React`](https://npmjs.com/package/@llama-ui/react) | [![latest](https://img.shields.io/npm/v/@llama-ui/react/latest.svg)](https://npmjs.com/package/@llama-ui/react) | [![README](https://img.shields.io/badge/README--@llama-ui/react.svg)](packages/React/README.md) |
| Theme   | [`Theme`](https://npmjs.com/package/@llama-ui/theme) | [![latest](https://img.shields.io/npm/v/@llama-ui/theme/latest.svg)](https://npmjs.com/package/@llama-ui/theme) | [![README](https://img.shields.io/badge/README--@llama-ui/theme.svg)](packages/Theme/README.md) |
