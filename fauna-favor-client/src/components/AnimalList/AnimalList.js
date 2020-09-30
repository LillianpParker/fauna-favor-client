import React from 'react';
import "./AnimalList.css"

export default function AnimalList(props) {
    return (
        <div class="list">
            {props.animals.map(animal => {
                console.log(animal)
                return (
                    <div className="showAnimal">
                        <h1>{animal.primaryCommonName}</h1>
                        <h1>{animal.scientificName}</h1>
                        <h2>{animal.iucn.iucnDescEn}</h2>
                        <h3>{animal.speciesGlobal.taxorder}</h3>
                        <h3>{animal.speciesGlobal.family}</h3>
                        <h3>{animal.speciesGlobal.genus}</h3>
                        <p>{animal.occurrenceDelineations[0].separationBarriers}</p>
                        <p>{animal.occurrenceDelineations[0].separationJustification}</p>
                    </div>
                )
            })}
            <h1>More chimkins</h1>
        </div>
    )
}
