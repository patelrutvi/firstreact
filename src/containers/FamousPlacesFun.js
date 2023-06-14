import React from 'react';

function FamousPlacesFun(props) {
    return (
        <div>
            <h1>Famous places</h1>
            <p>{props.cname === 'India' ? 'India : Taj Mahal' : 'USA: The Statue of Liberty'}</p>
        </div>
    );
}
 
export default FamousPlacesFun;