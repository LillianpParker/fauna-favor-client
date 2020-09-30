import React from 'react';
import "./AnimalList.css"

export default function AnimalList(props) {
    return (
        <div class="list">
            {props.animals.map(animal => {
                console.log(animal)
                return (
                    <div>
                        <h1>{animal.primaryCommonName}</h1>
                    </div>
                )
            })}
            <h1>More chimkins</h1>
        </div>
    )
}
