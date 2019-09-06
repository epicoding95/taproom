import React, { useContext } from 'react';
import Keg from './Keg';
import { KegContext } from './KegContext';

const KegList = () => {
    const [kegs, setKegs] = useContext(KegContext);
    return (

        <div>
            {
                kegs.map(keg => (
                    <Keg name={Keg.Name}
                        brand={Keg.Brand}
                        price={Keg.Price}
                        alchol={Keg.Alcohol}
                    />
                ))
            }
        </div>

    );
}

export default KegList;
