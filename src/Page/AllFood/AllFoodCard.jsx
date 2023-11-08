import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Helmet } from 'react-helmet-async';

const AllFoodCard = () => {

const [foodCards, setFoodCards] = useState([]);
const [searchFood, setSearchFood] = useState('');
const [currentPage, setCurrentPage] = useState(0);
const [itemsPerPage, setItemsPerPage] = useState(10);
const [count, setCount] = useState(0)

const numberOfPages = Math.ceil(count / itemsPerPage)
const pages = [...Array(numberOfPages).keys()]

useEffect(()=>{
    fetch('http://localhost:5000/itemsCount')
    .then(res => res.json())
    .then(data => {
        setCount(data.count)
    })
},[])

useEffect(() =>{
    fetch(`http://localhost:5000/items?page=${currentPage}&size=${itemsPerPage}`)
    .then(res => res.json())
    .then(data => setFoodCards(data))
},[currentPage, itemsPerPage])

// console.log(foodCards)


const handleSearch = () => {
    fetch(`http://localhost:5000/SearchFood/${searchFood}`)
    .then(res => res.json())
    .then(data => {
        setFoodCards(data)
    })

}

const handleItemsPerPage = e => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
}

const handlePrevPage = () => {
    if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
    }
}

const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1);
    }
}

    return (
        <div className='my-10'>
             <Helmet>
                <title>CZNBURAK || AllFood</title>
            </Helmet>
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
            <div className='text-center my-[40px]'>
                <p className='font-bold text-2xl py-4'>Current page: <span className='btn btn-sm bg-blue-400 text-white'>{currentPage}</span></p>
                <button className='btn btn-accent mr-3' onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'bg-orange-400 btn btn-sm' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button className='btn btn-secondary ml-3' onClick={handleNextPage}>Next</button>
                <select className="select select-info ml-5 max-w-xs" value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default AllFoodCard;