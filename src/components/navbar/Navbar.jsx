import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import NavListDrawer from './NavListDrawer'
import { useContext, useState } from 'react'
import { NavLinks } from '../../contexts/navLinks'
import { NavLink } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/system'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navLinksFromContext = useContext(NavLinks)

  return (
    <>
      <AppBar position='none'>
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
            {navLinksFromContext.map(({ title, path }) => (
              <Button
                key={title}
                color='inherit'
                to={path}
                component={NavLink}>
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
        <NavListDrawer setOpen={setOpen} />
      </Drawer>
    </>
  )
}
export default Navbar
