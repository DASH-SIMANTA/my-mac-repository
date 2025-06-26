import PropTypes from "prop-types";
import { MdVerified } from "react-icons/md";

const Feature = ({feature}) => {

    return (
        <div>
            <p className="flex items-center">
                <MdVerified className="text-blue-600 mr-4"></MdVerified>{feature}
            </p>           
        </div>
    );
};
Feature.propTypes ={
    feature: PropTypes.string,
}

export default Feature;