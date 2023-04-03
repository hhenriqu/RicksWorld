import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CharacterCard = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;

  @media (min-width: 950px) {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 50vw;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const CharacterImage = styled.img`
  width: 50%;
  height: auto;

  @media (min-width: 950px) {
    width: 70px;
    height: auto;
  }
`

const CharacterName = styled.p`
  margin: 0;
  font-size: 1.5rem;

  @media (min-width: 950px) {
    margin: 0;
    font-size: 10px;
  }
`

const CharacterStatus = styled.p`
  margin: 0;
  font-size: 1rem;

  @media (min-width: 950px) {
    margin: 0;
    font-size: 10px;
  }
`

const FavoriteButton = styled.button`
  background-color: white;
  border: 0px;
  font-size: 1rem;
  padding: 5px;

  img {
    height: 30px;
    width: 30px;
  }
`

function CardCharList() {
  const [characters, setCharacters] = useState([])
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
      return storedFavorites || []
    } else {
      return []
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  }, [favorites])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const toggleFavorite = character => {
    const index = favorites.findIndex(favorite => favorite.id === character.id)
    if (index === -1) {
      setFavorites(favorites => [...favorites, character])
    } else {
      setFavorites(favorites => {
        const newFavorites = [...favorites]
        newFavorites.splice(index, 1)
        return newFavorites
      })
    }
  }

  return (
    <div>
      {characters.map(character => (
        <CharacterCard key={character.id}>
          <CharacterImage src={character.image} alt={character.name} />
          <CharacterName>{character.name}</CharacterName>
          <CharacterStatus>
            {character.status} - {character.species}
          </CharacterStatus>
          <p>{character.gender}</p>
          <p>{character.location.name}</p>
          <p>{character.origin.name}</p>
          <FavoriteButton
            favorite={favorites.some(favorite => favorite.id === character.id)}
            onClick={() => toggleFavorite(character)}
          >
            {favorites.some(favorite => favorite.id === character.id) ? (
              <img src="/icon_favorited.png" alt="" />
            ) : (
              <img src="/icon_tofavorite.png" alt="" />
            )}
          </FavoriteButton>
        </CharacterCard>
      ))}
    </div>
  )
}

export default CardCharList
