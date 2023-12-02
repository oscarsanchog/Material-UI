import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { NavLinks } from '../../contexts/navLinks'

import { Box } from '@mui/system'
import { useContext } from 'react'

const NavListDrawer = () => {
  const navLinksFromContext = useContext(NavLinks)
  
  return (
    <Box sx={{ width: 250, bgcolor: 'white' }}>
      {/* <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary='Drafts' />
          </ListItem>
        </List>
      </nav>

      <Divider /> */}

      <nav>
        <List>
          {navLinksFromContext.map(({ title, path, icon }) => (
            <ListItem
              disablePadding
              key={title}>
              <ListItemButton
                component='a'
                href={path}>
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
