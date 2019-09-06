import React, { useContext } from 'react';
import { KegContext } from './KegContext';

const Nav = () => {

    const [kegs, setKegs] = useContext(KegContext);
    return (
        <div>
            <h1>Kelar Crisp</h1>
            <p> list of kegs available: {kegs.length}</p>

        </div>

    );
}

export default Nav;