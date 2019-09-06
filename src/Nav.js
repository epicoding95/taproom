import React, { useContext } from 'react';
import { KegContext } from './KegContext';

const Nav = () => {


    var styledNav = {

    }

    const [kegs, setKegs] = useContext(KegContext);
    return (
        <div>
            <h1>Kelar's Kegs</h1>
            <p> <strong>list of kegs available: {kegs.length}</strong></p>

        </div>

    );
}

export default Nav;