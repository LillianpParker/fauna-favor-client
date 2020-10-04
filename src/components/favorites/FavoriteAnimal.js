import React, { useState, useEffect, Link } from 'react';
import "./FavoriteAnimal.css"

import { useOktaAuth } from '@okta/okta-react';

function FavoriteAnimal(props) {
    const [favorites, setFavorites] = useState([])
    const getFavorites = async () => {
        try {
            const response = await fetch('https://fauna-favor-api.herokuapp.com/favorites')
            const data = await response.json()
            setFavorites(data)
        } catch (error) {
            console.error(error)
        }
    }

    getFavorites()

    return (
        <div>
            <div className="favorites">
                <h1 className="favTitle">Favorite Animals</h1>
                <div>
                    {favorites.map(animal => {
                        console.log(animal)
                        return (
                            <div>
                                <div>
                                    <h1>Common Name: {animal.primaryCommonName}</h1>
                                    <h1>Scientific Name: {animal.scientificName}</h1>
                                    <h2>IUCN Status: {animal.iucn}</h2>
                                    <h3>Order: {animal.order}</h3>
                                    <h3>Family: {animal.family}</h3>
                                    <h3>Genus: {animal.genus}</h3>
                                    <p>Barriers: {animal.barriers}</p>
                                    <p>Justification: {animal.justification}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default FavoriteAnimal