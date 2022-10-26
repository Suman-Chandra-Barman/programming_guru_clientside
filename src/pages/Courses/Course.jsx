import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, title, image } = course;
  return (
    <Link to={`/courses/${id}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="" className="h-40 w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions mt-10">
            <button className="btn bg-sky-500 hover:bg-sky-700 w-full border-0">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course;
