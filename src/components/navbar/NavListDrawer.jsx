import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import { Box } from '@mui/system'

const NavListDrawer = ({ navLinks }) => {
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
          {navLinks.map(({ title, path, icon }) => (
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
