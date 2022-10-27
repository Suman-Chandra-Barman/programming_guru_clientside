import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";
const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="md:grid grid-cols-4 gap-5 container mx-auto my-10">
      <aside className="menu bg-base-100 p-2 shadow-md rounded-2xl">
        {courses.map((course) => (
          <li key={course.id} className="bg-gray-200 mt-3 rounded-md">
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </aside>
      <section className="col-span-3">
        <div className="md:grid grid-cols-3 gap-3">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
