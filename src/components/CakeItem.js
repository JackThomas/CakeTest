import React from 'react';
import { NavLink } from 'react-router-dom';


const CakeItem = props => (
    <NavLink exact to={`cake/${props.cakeID}`} className="cake-item">
        <div className="cake-item__inner">
            <img className="cake-item__image" src={props.imageUrl} alt={props.name} />
            <div className="cake-item__details" >
                <p className="cake-item-details__name">{props.name}</p>
            </div>
        </div>
    </NavLink>
);

export default CakeItem;