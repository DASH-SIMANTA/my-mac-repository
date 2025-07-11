import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const GrandPa = () => {
    const [money, setMoney] = useState(1000);
    const asset= 'diamond'
    return (
        <div className="grandpa">
            <h2>GrandPa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                   <AssetContext.Provider value='gold'>
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>
           </AssetContext.Provider>
            </MoneyContext.Provider>
        
        </div>
    );
};

export default GrandPa;




/**
 * TO create Context API
 * 1. Create a context and export it
 *.  -useContext to access value in the context API
 *    - useContext(AssetContext) to access the value in the context API
 *    - useContext(AssetContext) in the child components to access the value in the context API
 *    - useContext(AssetContext) in the parent components to access the value in the context API
 *    - useContext(AssetContext) in the grand parent components to access the value in the context API
 *    - useContext(AssetContext) in the great grand parent components to access the value in the context API
 *    - useContext(AssetContext) in the great great grand parent components to access the value in the context API          
 * 
 * 
 *    - createContext() from react
 *    - createContext('default value') if you want to set a default value
 *    - createContext({}) if you want to set an object as default value
 *    - createContext([]) if you want to set an array as default value
 *    - createContext(null) if you want to set null as default value
 *    - createContext(undefined) if you want to set undefined as default value
 *    - createContext(0) if you want to set 0 as default value
 *    - createContext(false) if you want to set false as default value
 *    - createContext(true) if you want to set true as default value
 *    - createContext('') if you want to set an empty string as default value           
 * 2. Create a provider
 * 3. Set the value of the provider
 * 4. Use the context in the child components
 * 5. Use the context in the parent components
 * 6. Use the context in the grand parent components
 */