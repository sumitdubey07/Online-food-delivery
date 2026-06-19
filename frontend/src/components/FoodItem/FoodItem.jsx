import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../context/StoreContext'
import './FoodItem.css' // Import CSS for styling

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  return (
    <div className="food-item">
      {/* Image Container with Add Button */}
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={`${url}/images/${image}`}
          alt={name}
        />

        {/* Add to Cart Button OR Counter */}
        {!cartItems[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="Add to cart"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>

      {/* Item Details */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs.{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
