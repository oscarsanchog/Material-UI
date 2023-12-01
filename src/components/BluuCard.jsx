import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

const BluuCard = () => {
  return (
    <Card
      sx={{
        mt: 5,
        transition: '0.2s',
        '&:hover': { transform: 'scale(1.05)' },
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://via.placeholder.com/1000x200"
          height="200"
          alt="imagen de prueba"
        />
        <CardContent>
          <Typography variant="h5">Card Tittle</Typography>
          <Typography
            component="p"
            variant="body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            deleniti adipisci pariatur itaque ut iure magnam, quisquam tempore
            at, perspiciatis officiis amet! Fugit libero voluptas deserunt
            repellendus id in quibusdam.
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="contained">Add</Button>
          <Button color="error">Remove</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
export default BluuCard
