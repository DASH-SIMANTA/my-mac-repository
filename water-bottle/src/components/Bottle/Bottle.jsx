import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price,category,seller,stock,ratings}=bottle;
    return (
        <div className='bottle-Style'>
            <h2>Name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p><small>Category: {category}</small></p>
            <p><small>stock:{stock}</small></p>
            <p><small>ratings:{ratings}</small></p>
            <hr />
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
            
        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;