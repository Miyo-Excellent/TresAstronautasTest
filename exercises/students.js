const students = [
  [3.1, 2.3, 4.2],
  [3.7, 1.3, 2.2],
  [5.0, 4.3, 2.4],
  [5.0, 5.0, 5.0]
];

let majorNote = 0;
let minorNote = 0;
let studentsAverages = [];
let approvedStudents = [];

const averageFormat = (val = 100) => {
  if (val < 5.0) return val;

  return averageFormat(val / 2);
};

const getAverage = (values = []) => {
  const sum = values.reduce((acc = 0, val = 0) => acc + val, 0);
  const result = (sum / values.length).toFixed(2);

  return parseFloat(result);
};

const getMajorNote = (notes = []) => {
  const result = Math.max.apply(null, notes);
  const majorNoteIndex = parseInt(notes.indexOf(result));

  return students[majorNoteIndex]
};

const getMinorNote = (notes = []) => {
  const result = Math.min.apply(null, notes);
  const minorNoteIndex = parseInt(notes.indexOf(result));

  return students[minorNoteIndex];
};

const getStudentAverages = (_students = []) =>
  _students.map(average => getAverage(average));

const getApprovedStudents = (_studentsAverages = []) =>
  _studentsAverages.filter((average = 0) => average >= 3.0);

studentsAverages = getStudentAverages(students);
majorNote = getMajorNote(studentsAverages, students);
minorNote = getMinorNote(studentsAverages, students);
approvedStudents = getApprovedStudents(studentsAverages);

console.log(studentsAverages);
console.log(minorNote);
console.log(majorNote);
console.log(approvedStudents);
