import { useTheme } from '.'

export const useStyle = (component: string): any => {
  const theme = useTheme()

  return theme.components[component]
}
