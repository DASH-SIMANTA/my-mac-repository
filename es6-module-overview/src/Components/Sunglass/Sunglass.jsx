import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide } from '../../Utils/calculator';

const Sunglass = () => {
    const first =66;
    const second =77;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vaag =divide(first, second);
    console.log(vaag,sum, mult);
    return (
        <div>
            
            
            
            
        </div>
    );
};

export default Sunglass;