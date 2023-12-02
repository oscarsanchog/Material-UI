import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { NavLinks } from '../../contexts/navLinks'
import { NavLink } from 'react-router-dom'

import { Box } from '@mui/system'
import { useContext } from 'react'

const NavListDrawer = ({ setOpen }) => {
  const navLinksFromContext = useContext(NavLinks)
  
  return (
    <Box sx={{ width: 250, bgcolor: 'white' }}>
      <nav>
        <List>
          {navLinksFromContext.map(({ title, path, icon }) => (
            <ListItem
              disablePadding
              key={title}>

              <ListItemButton
                component={NavLink}
                to={path}
                onClick={() => setOpen(false)}>

                <ListItemIcon>{icon}</ListItemIcon>

                <ListItemText primary={title} />

              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  )
}
export default NavListDrawer
