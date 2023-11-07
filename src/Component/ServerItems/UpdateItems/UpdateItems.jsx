import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateItems = () => {

const products = useLoaderData();

const {_id, food_name, food_origin,img, category, quantity, price, made_by, description} = products;

  const handleUpdateItem = e => {
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

   const updateItem = {food_name, food_origin,img, category, quantity, price, made_by, description}


   fetch(`http://localhost:5000/items/${_id}`,{
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateItem),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.modifiedCount > 0) {
      Swal.fire({
        title: "success",
        text: "Update successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  });

  }


    return (
        <div>
             <div className="grid justify-items-center my-10">
      <div className=" w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleUpdateItem} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input name="food_name" defaultValue={food_name}
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
            <input name="img" defaultValue={img}
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
            <input name="category" defaultValue={category}
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
            <input name="price" defaultValue={price}
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
            <input name="quantity" defaultValue={quantity}
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
            <input name="made_by" defaultValue={made_by}
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
            <input name="description" defaultValue={description}
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
            <input name="food_origin" defaultValue={food_origin}
              type="text"
              placeholder="Food Origin Name"
              className="input input-bordered"
              required
            />
          </div>
         

          <div className="form-control mt-6">
            <button  className="btn btn-primary">Update Product</button>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default UpdateItems;