import React, { useState, useContext } from 'react';
import Keg from './Keg';
import { KegContext } from './KegContext';

const KegList = () => {
    const [kegs, setKegs] = useContext(KegContext);

    return (

        <div>
            {
                kegs.map(keg => (
                    <Keg name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        alchol={keg.alcohol}
                        key={keg.id}
                    />
                ))
            }
        </div>

    );
}

export default KegList;
