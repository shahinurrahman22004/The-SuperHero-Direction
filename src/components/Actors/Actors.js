import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import Cart from '../Cart/Cart';
import './Actors.css';

const Actors = () => {
    const [actors, setActors] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./best-actors.JSON')
        .then(res => res.json())
        .then(data => setActors(data));
    } , [])

    const handleAddToCart = (actor) => {
        const newCart = [...cart, actor];
        setCart(newCart);
    }

    return (
        <div className="actors-container">
            <div className="actor-container">
                {
                    actors.map(actor => <Actor key={actor.key} actor={actor} handleAddToCart={handleAddToCart}></Actor>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Actors;