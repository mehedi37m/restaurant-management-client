import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {

    const {_id, food_name, food_origin,img, category, quantity, price, made_by, description} = card;
    return (
        <div>
            <div className="card card-compact h-[500px] glass w-96 bg-base-100 shadow-xl">
  <figure><img className='h-64 w-full' src={img} alt="Food" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{food_name}</h2>
    <p className='text-xl font-bold text-blue-900 '>{category}</p>
    <p className='text-xl font-bold text-blue-900 '>Stock : {quantity}</p>
    <p className='text-2xl font-bold'> Price : ${price}</p>
    <div className="card-actions justify-start">
     <Link to={`/details/${_id}`}> <button className="btn btn-primary">Details</button></Link>
     <Link to={`/updateItems/${_id}`}> <button className="btn btn-primary">update</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cards;