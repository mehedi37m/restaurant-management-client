import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddedList = () => {

    const [items, setItems] = useState([])
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        fetch(`https://restaurrant-management-server.vercel.app/myAddedItems/${user.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setItems(data)
        })

    },[loading])

    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://restaurrant-management-server.vercel.app/items/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  setLoading(true);
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
              });
          }
        });
      };

    return (
        <div className='h-screen md:h-[80vh]'>
            

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Food Name</th>
        <th>Owner Name</th>
        <th>Price</th>
        
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {items.map((food) => (
              <tr key={food._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={food.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{food.food_name}</div>
                      <div className="text-sm opacity-50">{food.made_by}</div>
                    </div>
                  </div>
                </td>
                <td>{food.displayName}</td>
                <td>{food.price}$</td>
                <td>
                <Link to={`/updateItems/${food._id}`}> <button className="btn btn-primary">update</button></Link>
                </td>
                
                <th>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="btn btn-accent btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>

            ))} 
      </tbody>  
  </table>
</div>


        </div>
    );
};

export default AddedList;