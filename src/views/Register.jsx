import { Box, TextField, Button } from '@mui/material'
import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState({
    email: false,
    message: '',
  })

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    !validateEmail(email) &&
      setError({
        error: true,
        message: 'Email no válido',
      })
  }

  return (
    <>
      <h2>Register</h2>
      <Box component='form' onSubmit={handleSubmit}>
        <TextField
          id='email'
          label='Email'
          required
          type='email'
          variant='outlined'
          fullWidth
          error={error.error}
          helperText={error.message}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Button type='submit' variant='outlined' sx={{ mt: 2 }}>
          Registrarse
        </Button>
      </Box>
    </>
  )
}
export default Register
