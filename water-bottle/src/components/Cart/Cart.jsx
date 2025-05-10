import PropTypes from 'prop-types'; 'prop-types'
import './cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h3>Cart:{cart.length}</h3>
            <div className="cart-container">
                {/* {cart.map(bottle => <img id={bottle.id} src={bottle.img}></img>)} */}
                {cart.map(bottle => <div>
                    <img id={bottle.id} src={bottle.img}></img>
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)}
            </div>
            
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;