import React from "react";
import { useLoaderData } from "react-router-dom";

const names = [];
const Checkout = () => {
  const course = useLoaderData();
  names.push(...names, course.name);
  console.log(names, course);
  return (
    <div>
      <h3>Your Premium Courses</h3>
    </div>
  );
};

export default Checkout;
