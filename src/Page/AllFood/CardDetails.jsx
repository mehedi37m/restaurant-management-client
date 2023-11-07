import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const CardDetails = () => {

    const allDetails = useLoaderData();
    const {id} = useParams();
    const {user} = useContext(AuthContext)
    const {email,displayName} = user;
  
   const card = allDetails.find(card =>  card._id == id);

   const {_id, food_name, food_origin,img, category, quantity, price, made_by, description} = card;


   const allComponent = {email,displayName, food_name, food_origin,img, category, quantity, price, made_by, description};


   const addToCart = () => {

  
    fetch("http://localhost:5000/itemsCart", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(allComponent),
        })
            .then((res) => res.json())
            .then((result) => {
              if(result.acknowledged){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'add Successfully',
                  showConfirmButton: false,
                  timer: 1500
        
                })
              }
            
              console.log(result)
            });
  };

    return (
        <div>
              <div  class="card grid lg:grid-cols-2 card-side  bg-base-100 shadow-xl mb-5">
                
                <div class="p-10 bg-slate-50 text-center">
                  <h2 class=" font-bold mb-5 text-blue-900 text-3xl">{food_name}</h2>
                  <p className='mb-5 text-blue-900'>
                 {description}
                  </p>
                  <p className='text-2xl'>
                  <span className='text-blue-900 font-bold'>Price</span> : ${price}
                  </p>
                
                  <p className='text-blue-900 font-bold pt-4'>Category : <span className='text-red-500'>{category}</span></p>
                  <p className='text-blue-900 font-bold '>Made By : <span className='text-red-500'>{made_by}</span>  </p>
                  <p className='text-blue-900 font-bold pb-4'>Food Origin : <span className='text-red-500'>{food_origin}</span>  </p>


                  <button onClick={()=>addToCart(allComponent)} className='btn btn-accent '>Add to Cart</button>
                
                </div>
               
                  <img className="h-96 w-full rounded-r-lg"
                    src={img}
                    alt="Movie"
                  />
                
                </div>
        </div>
    );
};

export default CardDetails;