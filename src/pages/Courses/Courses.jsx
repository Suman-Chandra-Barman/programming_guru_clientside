import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-4 gap-5 container mx-auto">
      <aside className="menu bg-base-100 p-2 rounded-box shadow-md">
        {courses.map((course) => (
          <li>
            <Link to={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </aside>
      <section className="col-span-3">
        <div className="grid grid-cols-3 gap-5">
          {courses.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
