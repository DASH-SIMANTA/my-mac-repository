import Cousin from "../Cousin/Cousin";
import { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin name={'Babon'}></Cousin>
                <Cousin name={'Sanchita'}></Cousin>
                <Cousin name={'Avro'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;