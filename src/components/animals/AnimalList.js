import React, { useEffect, useState } from 'react';
import "./AnimalList.css"
import Button from 'simple-react-button';

export default function AnimalList(props) {
    const [buttonText, setButtonText] = useState('❤️ Favorite This Animal ❤️')
    const addFav = (animal) => {
        animal.userId = 'secretUserId12345'
        const favs = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(animal)
        }
        
        fetch('https://fauna-favor-api.herokuapp.com/favorites', favs)
            .then(response => response.json())
            .then(animal => {
                console.log(animal)
            })
        console.log(fetch.response)
    }

    return (
        <div class="bg" >
            <div class="list">
                {props.animals.map(animal => {
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
                            <button onClick={() => addFav(animal)}
                            >{buttonText}
                            </button>
                        </div>
                    )
                })}
                <div>
                </div>
            </div>
            <div>
                <a class="fav-link" href="/favorites">See My Favorite Animals</a>
            </div>

        </div>
    )
}
