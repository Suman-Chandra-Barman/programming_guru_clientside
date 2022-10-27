import React from "react";
import { useLoaderData } from "react-router-dom";
const Checkout = () => {
  const course = useLoaderData();
  console.log(course);

  const { name, title, image } = course;
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-center text-3xl my-5">{name}</h2>
      <div className="card w-96 mx-auto card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={`../${image}`} alt="" className="h-40 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions mt-10">
            <button className="btn bg-sky-500 hover:bg-sky-700 w-full border-0">
              continue course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
