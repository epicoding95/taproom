import React, { useState, createContext } from 'react';

export const KegContext = createContext();

export const KegProvider = props => {
    const [kegs, setKegs] = useState([
        {

            name: "kelar",
            brand: "jack daniels",
            price: "$100",
            alcohol: "alot"

        }

    ]);
    const deleteKeg = id => {
        setKegs(kegs.filter(keg => keg.id !== id))
    }


    return (
        <KegContext.Provider value={[kegs, setKegs]}>
            {props.children}
        </KegContext.Provider>
    );
};