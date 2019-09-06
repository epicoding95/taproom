import React from 'react';
import PropTypes from "prop-types";
import keg from './images/keg.jpeg';


const Keg = (props) => {



    var myStyledComponentStyles = {
        float: "left",
        width: "33.33%",
        width: "250px",
        border: "5px solid green",
        padding: "50px",
        margin: "20px",
        backgroundColor: "#ecf0f1",
        fontFamily: "verdana"

    }

    var individual = {

    }
    return (
        <div row="row">
            <div style={myStyledComponentStyles}>
                <img src={keg} />
                <h3> Username: {props.name}<hr /></h3>
                <h3>Brand Name: {props.brand}<hr /></h3>
                <h3>Alcohol price: {props.price}<hr /></h3>
                <h3> Alcohol Percentage: {props.alcohol}<hr /></h3>
            </div >
        </div >

    );
}

Keg.propTypes = {
    username: PropTypes.string,
    brandName: PropTypes.string,
    AlcoholPrice: PropTypes.string,
    AlcoholPercentage: PropTypes.string
}

export default Keg;