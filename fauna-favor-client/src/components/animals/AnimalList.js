import React from 'react';
import "./AnimalList.css"

export default function AnimalList(props) {
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
                        </div>
                    )
                })}
            </div>
            <div class="favorites">
                <div class="favTitle"><h1>Favorites</h1></div>
            </div>
        </div>
    )
}