import { Theme } from '@emotion/react'

export type ColorsType = {
  [key: string]:
    | string
    | {
        [hue: number]: string
      }
}

type Colors = Theme['colors']

type TesteColorStrings = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [keyColors in keyof Colors]: `${keyColors}.${keyof Colors[keyColors]}`
}

type ValueOf<T> = T[keyof T]
export type AllKeys = ValueOf<TesteColorStrings>

export const colorsLight = {
  primary: {
    50: '#F6FAFD',
    100: '#E2EFF9',
    200: '#CCE4F5',
    300: '#B5D8F0',
    400: '#9BCAEB',
    500: '#7DBAE5',
    600: '#5AA7DE',
    700: '#2D8FD5',
    800: '#006FBE',
    900: '#004170',
  },
  black: {
    0: '#F9F9FA',
    50: '#ECEEEF',
    100: '#DEE1E3',
    200: '#CFD3D7',
    300: '#ADB4B9',
    400: '#98A1A8',
    500: '#7F8B93',
    600: '#606E79',
    700: '#374047',
    800: '#000A12',
  },
  red: {
    50: '#FEF8F9',
    100: '#FBE9EB',
    200: '#F8DADC',
    300: '#F4C8CC',
    400: '#F0B5BA',
    500: '#EC9EA5',
    600: '#E6838B',
    700: '#DF5F6A',
    800: '#D2202F',
    900: '#85000B',
  },
  green: {
    50: '#F1FCF6',
    100: '#D2F6E1',
    200: '#AFEFC9',
    300: '#85E7AE',
    400: '#52DC8B',
    500: '#2BCC6E',
    600: '#27B763',
    700: '#219D55',
    800: '#1A7C43',
    900: '#0F4927',
  },
}

export const colorsDark = {
  primary: {
    50: '#004170',
    100: '#006FBE',
    200: '#2D8FD5',
    300: '#5AA7DE',
    400: '#7DBAE5',
    500: '#9BCAEB',
    600: '#B5D8F0',
    700: '#CCE4F5',
    800: '#E2EFF9',
    900: '#F6FAFD',
  },
  black: {
    0: '#000A12',
    50: '#374047',
    100: '#606E79',
    200: '#7F8B93',
    300: '#98A1A8',
    400: '#ADB4B9',
    500: '#CFD3D7',
    600: '#DEE1E3',
    700: '#ECEEEF',
    800: '#F9F9FA',
  },
  red: {
    50: '#85000B',
    100: '#D2202F',
    200: '#DF5F6A',
    300: '#E6838B',
    400: '#EC9EA5',
    500: '#F0B5BA',
    600: '#F4C8CC',
    700: '#F8DADC',
    800: '#FBE9EB',
    900: '#FEF8F9',
  },
  green: {
    50: '#0F4927',
    100: '#1A7C43',
    200: '#219D55',
    300: '#27B763',
    400: '#2BCC6E',
    500: '#52DC8B',
    600: '#85E7AE',
    700: '#AFEFC9',
    800: '#D2F6E1',
    900: '#F1FCF6',
  },
}
