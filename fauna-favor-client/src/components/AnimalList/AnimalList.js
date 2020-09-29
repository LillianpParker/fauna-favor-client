import React from 'react';
import "./AnimalList.css"

function AnimalList (props) {
 return(
    <div>
        <h1>Look at all those chimkins</h1>
        {/* {props.animals,map( book => {
            return (
                <div key={animal.id} className="animal">
                    <h1>More chimkins</h1>
                </div>
            )
        })} */}
    </div>
 )
}

export default AnimalList;