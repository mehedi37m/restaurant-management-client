import React, { useContext, useEffect, useState } from "react";
import AuthProvider, { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const OrderItems = () => {
  const [orderFood, setOrderFood] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const axiosSecure = useAxiosSecure();

  const url = `/itemsCart?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => setOrderFood(res.data));
  }, [url, axiosSecure, loading]);

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
        fetch(`http://localhost:5000/itemsCart/${_id}`, {
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
    <div>
      <Helmet>
                <title>CZNBURAK || OrderItems</title>
            </Helmet>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
              <th>Food Owner</th>
              <th>Price</th>

              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orderFood.map((food) => (
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
                <th>
                  <button className="btn btn-ghost btn-xs">dite hobbe</button>
                </th>
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
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default OrderItems;
