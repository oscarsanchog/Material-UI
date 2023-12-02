import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import NavListDrawer from './NavListDrawer'
import { useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { Box } from '@mui/system'

const navLinks = [
  { title: `Home`, path: `#`, icon: <InboxIcon /> },
  { title: `Login`, path: `#login`, icon: <DraftsIcon /> },
  { title: `Register`, path: `#register`, icon: <MenuIcon /> },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color='inherit'
            size='large'
            onClick={() => setOpen(true)}
            sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Typography
            variant='h6'
            sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navLinks.map(({ title, path }) => (
              <Button
                key={title}
                color='inherit'
                href={path}
                component='a'>
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: 'flex', sm: 'none' } }}
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  )
}
export default Navbar
