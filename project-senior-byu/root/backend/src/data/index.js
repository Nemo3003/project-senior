const students = [
    {
      id: '1',
      name: 'Alice',
      courseIds: ['1', '2'],
    },
    {
      id: '2',
      name: 'Bob',
      courseIds: ['2', '3'],
    },
    {
      id: '3',
      name: 'Charlie',
      courseIds: ['3', '4'],
    },
  ];
  
  const teachers = [
    {
      id: '1',
      name: 'Ms. Smith',
      courseIds: ['1'],
    },
    {
      id: '2',
      name: 'Mr. Johnson',
      courseIds: ['2'],
    },
    {
      id: '3',
      name: 'Mrs. Williams',
      courseIds: ['3', '4'],
    },
  ];
  
  const courses = [
    {
      id: '1',
      name: 'Math 101',
      teacherId: '1',
      studentIds: ['1'],
    },
    {
      id: '2',
      name: 'English 101',
      teacherId: '2',
      studentIds: ['1', '2'],
    },
    {
      id: '3',
      name: 'Science 101',
      teacherId: '3',
      studentIds: ['2', '3'],
    },
    {
      id: '4',
      name: 'History 101',
      teacherId: '3',
      studentIds: ['3'],
    },
  ];
  module.exports = {
    students,
    teachers,
    courses,
  };  