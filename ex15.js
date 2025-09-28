/*In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

Instruction
Create a function named organizeInstructors that will receive an array of instructor objects, and will return a new object that has the following format:

{
  CourseName: [instructors]
} 
*/

const organizeInstructors = function (instructors) {
  const courses = instructors.map((instructor) => instructor.course);
  const uniqueCourse = new Set(courses);
  const uniqueCourseArray = [...uniqueCourse];
  const result = {};

  instructors.forEach((instructor) => {
    uniqueCourseArray.forEach((course) => {
      if (instructor.course === course) {
        if (!result[course]) {
          result[course] = [instructor.name];
        } else {
          result[course] = [...result[course], instructor.name];
        }
      }
    });
  });

  return result;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
); // { iOS: ["Samuel"], Web: ["Victoria", "Karim", "Donald"]}

console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
); //{ Blockchain: ["Brendan"], Web: ["David", "Carlos"], iOS: ["Martha"]}

module.exports = organizeInstructors;
