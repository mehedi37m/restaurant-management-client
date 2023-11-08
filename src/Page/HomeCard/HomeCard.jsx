import React, { useEffect, useState } from 'react';
import Cards from '../AllFood/Cards';
import { Link } from 'react-router-dom';

const HomeCard = () => {
    const [foodCards, setFoodCards] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:5000/items`)
        .then(res => res.json())
        .then(data => setFoodCards(data))
    },[])
    return (
        <div className='py-10'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    foodCards.slice(0,6).map(card => <Cards key={card._id} card={card} ></Cards>)
                }
            </div>
            <div className='mt-8 flex justify-center'>
            <Link to='/allItems'><button className='btn btn-secondary'>See More</button></Link>
            </div>
        </div>
    );
};

export default HomeCard;