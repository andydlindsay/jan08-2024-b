const studentOneFirstName = 'alice';
const cohort = 'jan 08 2024';
const isGraduated = false;

// data structures => arrays and objects

const studentOne = ['alice', 'jan 08 2024', false];

studentOne[2]; // false
studentOne[2] = true;

// console.log(studentOne);

const studentOneObj = {
  firstName: 'dean',
  cohort: 'jan 08 2024',
  isGraduated: false,
  friends: [],
  100: 'hello',
};

console.log(studentOneObj);

studentOneObj['cohort']; // 'jan 08 2024'

// keys in objects are strings

console.log('dot syntax', studentOneObj.cohort);

const arr = [1,2,3];

const index = 2;

arr[index]; // arr[2]

const obj = { a: 5, b: 2 };

const key = 'b';

obj[key]; // obj['a']

console.log('dot syntax below');
console.log(obj.key); // { key: 'hello' }

studentOne['examGrades']['weekOne']['firstScore'];
studentOne.examGrades.weekOne.firstScore;
