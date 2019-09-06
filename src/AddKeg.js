import React, { useState, useContext } from 'react';
import { KegContext } from './KegContext';

const AddKeg = () => {


    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [alcohol, setAlcohol] = useState('');
    const [kegs, setKegs] = useContext(KegContext);

    return (

        <div></div>
    )
}

export default AddKeg;