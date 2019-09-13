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
       

        }
       
    ]);
   

    return (
        <KegContext.Provider value={[kegs, setKegs]}>
            {props.children}
        </KegContext.Provider>
    );
};