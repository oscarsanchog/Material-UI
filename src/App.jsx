import { Button, Typography, Grid } from '@mui/material'
import { Box, Container } from '@mui/system'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Product from './components/Product'
import BluuCard from './components/BluuCard'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'

import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import { createContext } from 'react'

const navLinksArray = [
  { title: `Home`, path: `#`, icon: <InboxIcon /> },
  { title: `Login`, path: `#login`, icon: <DraftsIcon /> },
  { title: `Register`, path: `#register`, icon: <MenuIcon /> },
]
const navLinksContext = createContext(navLinksArray)

const App = () => {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path='/'
          element={
            <Container
              maxWidth='md'
              sx={{ border: 2, borderStyle: 'solid', boxShadow: 3, pb: 2 }}>
              <h1>App</h1>

              <Button variant='contained'>Mi primer botón</Button>

              <Typography
                variant='h1'
                component='h2'
                textAlign='center'
                mt={1}
                color='primary'>
                h1 con Typography
              </Typography>

              <Box
                sx={{ border: 1, p: 1, borderColor: 'red' }}
                component='span'>
                Esto es un Box
              </Box>

              <Button
                variant='outlined'
                color='success'
                startIcon={<AddAPhotoIcon />}>
                Success
              </Button>

              <Button
                variant='outlined'
                color='error'
                endIcon={<ErrorOutlineIcon />}>
                Success
              </Button>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quasi excepturi dolores, provident debitis sequi
                    perspiciatis quo dolorem quia quam consequuntur atque
                    laudantium a ratione architecto dolor quidem molestiae totam
                    assumenda?
                  </p>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quasi excepturi dolores, provident debitis sequi
                    perspiciatis quo dolorem quia quam consequuntur atque
                    laudantium a ratione architecto dolor quidem molestiae totam
                    assumenda?
                  </p>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quasi excepturi dolores, provident debitis sequi
                    perspiciatis quo dolorem quia quam consequuntur atque
                    laudantium a ratione architecto dolor quidem molestiae totam
                    assumenda?
                  </p>
                </Grid>

                <Product />

                <BluuCard />
              </Grid>
            </Container>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
