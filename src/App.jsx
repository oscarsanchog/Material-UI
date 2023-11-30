import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

const App = () => {
  return (
      <Container maxWidth='md' sx={{ border: 2, borderStyle: 'solid', boxShadow: 3, pb: 2 }}>
        <h1>App</h1>
        <Button variant='container'>Mi primer botón</Button>
        <Typography variant='h1' component='h2' textAlign='center' mt={1}>h1 con Typography</Typography>
        <Box sx={{ border: 1, p: 1 }}>
          Esto es un Box
        </Box>
      </Container>
  )
}

export default App
