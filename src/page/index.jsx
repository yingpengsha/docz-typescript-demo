import React from 'react'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { ThemeProvider } from 'emotion-theming'
import baseComponents from 'gatsby-theme-docz/src/components'
import { Layout } from './components/Layout'

const componentsMap = {
  ...baseComponents,
  layout: Layout,
}

const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
      <ComponentsProvider components={componentsMap}>
        {children}
      </ComponentsProvider>
    </ThemeProvider>
  )
}

const themeConfig = {
  colors: {
    primary: 'tomato',
    secondary: 'khaki',
    gray: 'lightslategray',
  },
}

export default theme(themeConfig)(Theme)
