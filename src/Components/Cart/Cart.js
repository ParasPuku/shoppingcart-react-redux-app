import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";

import EmptyCart from "../../Assets/empty-cart.png";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return cart.length > 0 ? (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.empty__cart_container}>
      <img src={EmptyCart} alt="" />
      <h1>Ooooops, Your Cart is Empty.!!</h1>
      <h2>Checkout what is trending now..</h2>
      <Link to="/">
        <button className={styles.continue__shopping__btn}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCartReducer.cart,
  };
};

export default connect(mapStateToProps)(Cart);
