import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-orange-500 rounded-md p-4 flex flex-col text-center">
            <h2 >
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl my-8 ">{name}</h4>
            <div className="pl-6 flex-grow"> 
                {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className="mt-12 bg-orange-700 w-full py-2 font-bold rounded-lg hover:bg-orange-900"> Buy Now </button>
            
        </div>
    );
};

PriceOption.propTypes ={
    option: PropTypes.object,
}

export default PriceOption;