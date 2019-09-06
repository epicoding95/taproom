import React from 'react';

const Keg = (props) => {



    var myStyledComponentStyles = {

        backgroundColor: "#ecf0f1",
        fontFamily: "sans-serif",
        paddingTop: "50px"
    }
    return (
        <div style={myStyledComponentStyles}>
            <h3>{props.name}</h3>
            <h3>{props.brand}</h3>
            <h3>{props.price}</h3>
            <h3>{props.alcohol}</h3>
        </div>

    );
}

export default Keg;