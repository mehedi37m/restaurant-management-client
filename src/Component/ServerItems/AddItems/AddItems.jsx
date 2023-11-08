import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddItems = () => {

  const {user} = useContext(AuthContext)
  const {email, displayName} = user;

const handleAddItems = e => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.food_name.value;
    const img = form.img.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const made_by = form.made_by.value;
    const description = form.description.value;
    const food_origin = form.food_origin.value;

   const newItems = {food_name, food_origin,img, email, displayName, category, quantity, price, made_by, description}



   fetch("http://localhost:5000/items", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newItems),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "success",
          text: "user added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });




}




  return (
    <div className="grid justify-items-center my-10">
      <Helmet>
                <title>CZNBURAK || AddItems</title>
            </Helmet>
      <div className=" w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddItems} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input name="food_name"
              type="text"
              placeholder="Food name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input name="img"
              type="text"
              placeholder="Image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input name="category"
              type="text"
              placeholder="Category Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input name="quantity"
              type="text"
              placeholder="Quantity"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Made By</span>
            </label>
            <input name="made_by"
              type="text"
              placeholder="Made By Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Origin</span>
            </label>
            <input name="food_origin"
              type="text"
              placeholder="Food Origin Name"
              className="input input-bordered"
              required
            />
          </div>
         

          <div className="form-control mt-6">
            <button  className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
