import React from 'react';
import './Watch.css'

const Watch = ({watch}) => {
    const{brand,model,features, price}=watch;
    return (
        <div className='watch-style'>
            <h2>Watch: {brand} </h2>
            <h3>Model:{model}</h3>
            <h4>Features:{features}</h4>
            <p>Price: {price}</p>
            
        </div>
    );
};

export default Watch;