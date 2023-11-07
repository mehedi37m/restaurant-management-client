import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const AllFoodCard = () => {

const [foodCards, setFoodCards] = useState([]);

useEffect(() =>{
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(data => setFoodCards(data))
},[])

console.log(foodCards)


    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-bold'>All Food Here...</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    foodCards.map(card => <Cards key={card._id} card={card} ></Cards>)
                }
            </div>
        </div>
    );
};

export default AllFoodCard;