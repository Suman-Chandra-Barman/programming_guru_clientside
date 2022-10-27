import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();

  console.log(course);
  const { id, image, title, description, price, skills, rating } = course;
  return (
    <div className="my-10 container mx-auto lg:w-4/6">
      <div className="flex justify-center my-5 gap-5 items-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Pdf targetRef={ref} filename="course-details.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="btn bg-sky-500 border-0 hover:bg-sky-700"
            >
              <FaFileDownload className="text-xl mr-2" />
              Download PDF
            </button>
          )}
        </Pdf>
      </div>
      <div
        ref={ref}
        className="card card-compact bg-base-100 shadow-xl mx-auto"
      >
        <figure>
          <img src={`../${image}`} alt="" className="w-full h-[350px]" />
        </figure>
        <div className="card-body">
          <h3 className="text-2xl font-bold">About This Course </h3>
          <p className="text-lg">{description}</p>
          <h3 className="text-2xl mt-5 font-bold">Skills You’ll Gain</h3>
          <p className="text-lg">
            {skills.map((s) => (
              <li key={s.id}>{s}</li>
            ))}
          </p>
          <p className="text-xl mt-5">
            <span className="font-bold">Price</span> ${price}
          </p>
          <p className="text-xl">
            <span className="font-bold">Rating</span> ${rating.rate}
            <span className="ml-2">{`(Students ${rating.count})`}</span>
          </p>
          <div className="card-actions justify-center mt-10 mb-5">
            <Link to={`/checkout/${id}`}>
              <button className="btn bg-sky-500 hover:bg-sky-700 border-0">
                Get premium access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
