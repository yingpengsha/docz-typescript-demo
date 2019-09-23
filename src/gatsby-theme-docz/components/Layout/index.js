/** @jsx jsx */
import { useRef, useState } from 'react'
import { jsx, Box, Layout as BaseLayout, Main, Container } from 'theme-ui'
import { Global } from '@emotion/core'

import global from 'gatsby-theme-docz/src/theme/global'
import { Header } from 'gatsby-theme-docz/src/components/Header'
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar'
import { Menu } from 'gatsby-theme-docz/src/components/Icons'
import * as styles from './styles'

export const Layout = ({ children, doc }) => {
  const [open, setOpen] = useState(false)
  const nav = useRef()

  const handleMenu = () => {
    setOpen(s => !s)
    if (!nav.current) return
    const navLink = nav.current.querySelector('a')
    if (navLink) navLink.focus()
  }
  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <Header nav={nav} onOpen={setOpen} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          {
            doc.value.fullDocument
            ? 
              (
                <div style={{height: '100%', width: '100%'}}>{children}</div>
              )
            : 
              (
                <Container sx={styles.content} data-testid="main-container">
                  <Box sx={styles.menuIcon}>
                    <button sx={styles.menuButton} onClick={handleMenu}>
                      <Menu size={25} />
                    </button>
                  </Box>
                  {children}
                </Container>
              )
          }
        </div>
      </Main>
    </BaseLayout>
  )
}
