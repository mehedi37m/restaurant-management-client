import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {

    const {_id, food_name, food_origin,img, category, quantity, price, made_by, description} = card;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64 w-full' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <p>{category}</p>
    <p>{quantity}</p>
    <p className='text-2xl font-bold'> Price : ${price}</p>
    <div className="card-actions justify-end">
     <Link to={`/details/${_id}`}> <button className="btn btn-primary">Details</button></Link>
     <Link to={`/updateItems/${_id}`}> <button className="btn btn-primary">updateItems</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;