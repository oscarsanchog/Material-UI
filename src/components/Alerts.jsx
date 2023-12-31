import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Snackbar,
  Typography,
} from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState } from 'react'

import AddReactionIcon from '@mui/icons-material/AddReaction'

const Alerts = () => {
  const [open, setOpen] = useState(true)
  const [openSnackbar, setOpenSnackbar] = useState(false)

  return (
    <>
      <Container>
        <Typography variant='h2' component='h2'>
          Alerts
        </Typography>

        <Box sx={{ display: 'grid', gap: '1rem' }}>
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>

          <Alert
            severity='warning'
            action={
              <>
                <Button color='inherit'>Delete</Button>
                <Button color='inherit'>Undo</Button>
              </>
            }
          >
            This is a warning alert — check it out!
          </Alert>

          <Alert severity='info' icon={<AddReactionIcon />} variant='outlined'>
            This is an info alert — check it out!
          </Alert>

          <Collapse in={open}>
            <Alert
              severity='success'
              onClose={() => {
                setOpen(false)
              }}
            >
              This is a success alert — check it out!
            </Alert>
          </Collapse>

          <Button variant='contained' onClick={() => setOpenSnackbar(true)}>
            Open
          </Button>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={() =>
              setOpenSnackbar(false)
            } /* message='Alerta Snackbar' */
          >
            <Alert severity='error'>
              <AlertTitle>Error</AlertTitle>
              This is an error alert — check it out!
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  )
}
export default Alerts
