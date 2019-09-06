import React, { useState, useContext } from 'react';
import { KegContext } from './KegContext';

const AddKeg = () => {


    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [kegs, setKegs] = useContext(KegContext);

    const updateName = update => {
        setName(update.target.value);
    }
    const updateBrand = update => {
        setBrand(update.target.value);
    }
    const updatePrice = update => {
        setPrice(update.target.value);
    }
    const updateAlcohol = update => {
        setAlcohol(update.target.value);
    }
    const AddAnotherKeg = e => {
        e.preventDefault();
        setKegs(prevKegs => [...prevKegs, { name: name, brand: brand, price: price, alcohol: alcohol }])
    }


    return (
        <form onSubmit={AddAnotherKeg} >
            <p><strong>Alchohol Name</strong></p>
            <input type="text"
                name="name"
                value={name}
                onChange={updateName} />
            <p><strong>Alchohol Brand</strong></p>
            <input type="text"
                name="brand"
                value={brand}
                onChange={updateBrand} />
            <p><strong>Alchohol Price</strong></p>
            <input type="text"
                name="price"
                value={price}
                onChange={updatePrice} />
            <p><strong>Alchohol Percentage</strong></p>
            <input type="text"
                name="alcohol"
                value={alcohol}
                onChange={updateAlcohol} />

            <button>Submit</button>
        </form>

    );
}

export default AddKeg;