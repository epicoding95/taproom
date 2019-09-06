import React from 'react';

const Keg = (props) => {

    return (
<div>
    <h3>{props.name}</h3>
    <h3>{props.brand}</h3>
    <h3>{props.price}</h3>
    <h3>{props.alcohol}</h3>
</div>

    )
}

export default Keg;