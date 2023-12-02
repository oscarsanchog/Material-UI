import { createContext } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

// 1. Crear el contexto
export const NavLinks = createContext()

// 2. Crear el provider, que es un componente de react, que envolverá al componente que queremos que tenga acceso al contexto
export const NavLinksProvider = ({ children }) => {
  const navLinksArray = [
    { title: `Home`, path: '/', icon: <InboxIcon /> },
    { title: `Login`, path: '/login', icon: <DraftsIcon /> },
    { title: `Register`, path: '/register', icon: <MenuIcon /> },
  ]
  
  return (
    <NavLinks.Provider value={navLinksArray}>
      {children}
    </NavLinks.Provider>
  )
}
