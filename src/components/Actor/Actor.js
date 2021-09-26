import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Actor.css';

const Actor = (props) => {
    // console.log("hello");

    const {name, img, ActingSkill, Oscars, OscarNominations, conutry} = props.actor;

    const icon = <FontAwesomeIcon icon={faCartPlus} />

    return (
        <div className="actors">
            <div>
                <img src={img} alt="" />
                <h4 className="actor-name">Name: {name}</h4>
                <h5>Country: {conutry}</h5>
                <p>Acting Skill: {ActingSkill}</p>
                <p><small>Oscars {Oscars}</small></p>
                <p>Oscar Nominations: {OscarNominations}</p>
                
                <button onClick={() => props.handleAddToCart(props.actor)} className="add-btn">{icon} add to cart</button>
            </div>
        </div>
    );
};

export default Actor;