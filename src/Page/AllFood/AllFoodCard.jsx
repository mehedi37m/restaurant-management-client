import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const AllFoodCard = () => {

const [foodCards, setFoodCards] = useState([]);
const [searchFood, setSearchFood] = useState('');

useEffect(() =>{
    fetch('http://localhost:5000/items')
    .then(res => res.json())
    .then(data => setFoodCards(data))
},[])

// console.log(foodCards)


const handleSearch = () => {
    fetch(`http://localhost:5000/SearchFood/${searchFood}`)
    .then(res => res.json())
    .then(data => {
        setFoodCards(data)
    })

}

    return (
        <div className='my-10'>
            <h1 className='text-5xl text-center font-bold'>All Food Here...</h1>

            <div  className="input-group flex justify-center my-10">
                <input className="input input-bordered" onChange={(e)=>setSearchFood(e.target.value)} type="text" placeholder='search food name' name="name" id="" />
                <button className='btn btn-ghost' onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    foodCards.map(card => <Cards key={card._id} card={card} ></Cards>)
                }
            </div>
        </div>
    );
};

export default AllFoodCard;