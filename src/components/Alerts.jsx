import { Alert, AlertTitle, Button, Collapse, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { useState } from 'react'

const Alerts = () => {
  const [open, setOpen] = useState(true)

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

          <Alert severity='info'>This is an info alert — check it out!</Alert>

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
        </Box>
      </Container>
    </>
  )
}
export default Alerts
