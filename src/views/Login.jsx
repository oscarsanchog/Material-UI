import { Button } from '@mui/material'
import { useSnackbar } from 'notistack'

const Login = () => {
  const { enqueueSnackbar } = useSnackbar()

  const handleClick = () => {
    enqueueSnackbar('I love snacks.', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    })
  }

  return (
    <>
      <h2>Login</h2>
      <Button variant='contained' onClick={handleClick}>
        Open
      </Button>
    </>
  )
}
export default Login
