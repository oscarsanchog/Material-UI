import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

const Character = ({ name, image }) => {
  return (
    <Card>
          <CardMedia
            image={image}
            title={name}
            sx={{ width: 250, height: 250 }}
          />
          <CardContent>
            <Typography variant='h5'>{name}</Typography>
          </CardContent>
        </Card>
  )
}
export default Character