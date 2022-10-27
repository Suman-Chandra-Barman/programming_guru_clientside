import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

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
  // const { preAccess } = useContext(AuthContext);
  // console.log(preAccess);
  // return (
  //   <div className="lg:w-1/3 mx-auto mt-10">
  //     <h3 className="text-center text-3xl font-bold mb-5">
  //       Your Premium Courses
  //     </h3>
  //     {/* {preAccess.map((name) => (
  //       <li className="bg-gray-600 mt-3 py-3 text-center list-none rounded-md hover:bg-gray-800 text-white">
  //         {name}
  //       </li>
  //     ))} */}
  //   </div>
  // );
};

export default Checkout;
