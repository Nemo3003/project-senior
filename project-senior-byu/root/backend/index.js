//const { GraphQLServer } = require('graphql-yoga');
const { students, teachers, courses } = require('./src/data/index');

const typeDefs = `
  type Query {
    student(id: ID!): Student
    students: [Student]
    teacher(id: ID!): Teacher
    teachers: [Teacher]
    course(id: ID!): Course
    courses: [Course]
  }

  type Student {
    id: ID!
    name: String!
    courses: [Course]
  }

  type Teacher {
    id: ID!
    name: String!
    courses: [Course]
  }

  type Course {
    id: ID!
    name: String!
    teacher: Teacher
    students: [Student]
  }
`;

const resolvers = {
  Query: {
    student: (parent, { id }) => students.find((student) => student.id === id),
    students: () => students,
    teacher: (parent, { id }) => teachers.find((teacher) => teacher.id === id),
    teachers: () => teachers,
    course: (parent, { id }) => courses.find((course) => course.id === id),
    courses: () => courses,
  },
  Student: {
    courses: (parent) => {
      // Find the courses that the student is enrolled in
      const enrolledCourses = courses.filter((course) => course.students.includes(parent.id));

      // Map over the enrolled courses and find the associated teachers
      const courseTeachers = enrolledCourses.map((course) => {
        return teachers.find((teacher) => teacher.id === course.teacherId);
      });

      // Return the courses with the associated teachers
      return enrolledCourses.map((course, index) => {
        return {
          ...course,
          teacher: courseTeachers[index],
        };
      });
    },
  },
  Teacher: {
    courses: (parent) => {
      // Find the courses taught by the teacher
      const taughtCourses = courses.filter((course) => course.teacherId === parent.id);

      // Map over the taught courses and find the associated students
      const courseStudents = taughtCourses.map((course) => {
        return course.students.map((studentId) => students.find((student) => student.id === studentId));
      });

      // Return the courses with the associated students
      return taughtCourses.map((course, index) => {
        return {
          ...course,
          students: courseStudents[index],
        };
      });
    },
  },
  Course: {
    teacher: (parent) => {
      // Find the teacher that teaches the course
      return teachers.find((teacher) => teacher.id === parent.teacherId);
    },
    students: (parent) => {
      // Find the students that are enrolled in the course
      return parent.students.map((studentId) => students.find((student) => student.id === studentId));
    },
  },
};
//TODO: Make sure this part here works properly
//const server = new GraphQLServer({ typeDefs, resolvers });
//server.start(() => console.log(`Server is running on http://localhost:4000`));
