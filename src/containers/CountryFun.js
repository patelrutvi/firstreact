import React, { useState } from 'react';
import FamousPlacesFun from './FamousPlacesFun';

function CountryFun(props) {
    const [countryname,setcountryname] = useState("India")
    
    const handleCountry = () => {
        console.log("jhg");
        setcountryname('USA')
    }
    return (
        <div>
            <>
                <h1>Countryes</h1>
                {/* <FamousPlacesFun cname={'uk'} /> */}
                <FamousPlacesFun cname={countryname} />
                <button onClick={handleCountry}>Change </button>
            </>
        </div>
    );
}

export default CountryFun;