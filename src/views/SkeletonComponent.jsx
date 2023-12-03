import { Container, Box } from '@mui/material'
import Character from '../components/Character'
import CharacterSkeleton from '../components/CharacterSkeleton'
import { useEffect, useState } from 'react'

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 1000))

const SkeletonComponent = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      await fakePromise()
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const { results } = await response.json()
      setCharacters(results)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container maxWidth='md'>
      <h1>Rick and Morty</h1>
      <Box sx={{ display: 'grid', gap: 2, maxWidth: 250, mx: 'auto' }}>
        {loading
          ? Array.from(new Array(4)).map((_, index) => (
              <CharacterSkeleton key={index} />
            ))
          : characters.map((character) => (
              <Character
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
      </Box>
    </Container>
  )
}
export default SkeletonComponent
