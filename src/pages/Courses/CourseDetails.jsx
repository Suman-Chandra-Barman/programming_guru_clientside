import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();

  console.log(course);
  const { name, title, image, description, price } = course;
  return (
    <div className="my-10">
      <div className="flex justify-center my-5 gap-5">
        <h2 className="text-2xl text-gray-700">{name}</h2>
        <button className="btn btn-sm bg-gray-700 border-0">
          <FaFileDownload className="text-2xl mr-2" />
          PDF
        </button>
      </div>
      <div className="card card-compact w-1/2 h- bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button className="btn hover:bg-sky-500 w-full border-0">
              <Link to="/checkout">Get premium access</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
