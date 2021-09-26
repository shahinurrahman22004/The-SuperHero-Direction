import React from 'react';

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    let total = 0;
    let name = '';
    for(const actor of cart){
        total = total + actor.OscarNominations;
        name = name + actor.name + ', ';
    }
    return (
        <div>
            <h3>Added Summery</h3>
            <h4>Actors Added: {props.cart.length}</h4>
            <p>Total: {total}</p>
            <p>Added Person: {name}   </p>
        </div>
    );
};

export default Cart;