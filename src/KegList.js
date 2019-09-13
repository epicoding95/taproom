import React, { useState, useContext } from 'react';
import Keg from './Keg';
import { KegContext } from './KegContext';
import { v4 } from 'uuid';
import { tsPropertySignature } from '@babel/types';
const KegList = (props) => {
    const [kegs, setKegs] = useContext(KegContext);

    return (

        <div>
            {
                kegs.map(keg => (
                    <Keg name={keg.name}
                        brand={keg.brand}
                        price={keg.price}
                        alcohol={keg.alcohol}
                        key={keg.id}
                        id={keg.id}
                        deleteKeg={props.deleteKeg}
                    />
                ))
            }
        </div>

    );
}

export default KegList;
