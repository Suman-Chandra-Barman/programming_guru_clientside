import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Checkout = () => {
  const { preAccess } = useContext(AuthContext);
  console.log(preAccess);
  return (
    <div className="lg:w-1/3 mx-auto mt-10">
      <h3 className="text-center text-3xl font-bold mb-5">
        Your Premium Courses
      </h3>
      {preAccess.map((name) => (
        <li className="bg-gray-600 mt-3 py-3 text-center list-none rounded-md hover:bg-gray-800 text-white">
          {name}
        </li>
      ))}
    </div>
  );
};

export default Checkout;
