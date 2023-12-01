import styled from '@emotion/styled'
import { Box, Button, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

const Product = () => {
  const Img = styled('img')({
    width: '200',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
  })
  
  return (
    <Container>
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          overflow: 'hidden',
          mt: 5
        }}
        >
        <Img
          src='https://via.placeholder.com/200'
          alt='imagen de prueba'  
        />
        <Box sx={{ flexGrow: 1, display: 'grid', gap: 2 }}>
          <Typography variant='h4'>Product name</Typography>
          <Typography variant='body1'>Product description</Typography>
          <Button variant='contained'>Add card</Button>
        </Box>
        <Box 
          sx={{ mr: 2 }}
          component={'p'}
        >
          $1000
        </Box>
      </Paper>
    </Container>
  )
}
export default Product
