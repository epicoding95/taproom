import React from 'react';

const Keg = (props) => {



    var myStyledComponentStyles = {
        width: "250px",
        border: "15px solid green",
        padding: "50px",
        margin: "20px",
        backgroundColor: "#ecf0f1",
        fontFamily: "verdana"

    }

    var individual = {

    }
    return (
        <div style={myStyledComponentStyles}>
            <h3> Username: {props.name}<hr /></h3>
            <h3>Brand Name: {props.brand}<hr /></h3>
            <h3>Alcohol price: {props.price}<hr /></h3>
            <h3> Alcohol Percentage: {props.alcohol}<hr /></h3>
        </div >

    );
}

export default Keg;