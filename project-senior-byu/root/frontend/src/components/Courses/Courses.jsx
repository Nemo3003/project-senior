import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Web Development 101",
    instructor: "John Doe",
    description:
      "Learn the basics of web development, including HTML, CSS, and JavaScript.",
    price: "$99",
    image: "https://source.unsplash.com/400x300/?web-development",
  },
  {
    id: 2,
    name: "Python for Data Science",
    instructor: "Jane Smith",
    description:
      "Explore the power of Python for data analysis and machine learning.",
    price: "$149",
    image: "https://source.unsplash.com/400x300/?python",
  },
  {
    id: 3,
    name: "Intro to UX Design",
    instructor: "Mike Johnson",
    description:
      "Learn the fundamentals of user experience design and create your own wireframes and prototypes.",
    price: "$79",
    image: "https://source.unsplash.com/400x300/?ux-design",
  },
  
];

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className="text-gray-600">{course.instructor}</p>
        <p className="mt-2">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-xl">{course.price}</span>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enroll now</button>
        </div>
      </div>
    </div>
  );
}

function CourseList({ courses }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default function AppCard() {
  const [availableCourses] = useState(courses.slice(0, 3));

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      <CourseList courses={availableCourses} />
    </div>
  );
}
