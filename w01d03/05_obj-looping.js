const arr = ['a', 'b', 'c'];

// c-style loop
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) { i++ }
  const value = arr[i];
}

let i = 0;
while (i < arr.length) {
  const value = arr[i];
  i++;
}

// for..in loop
for (const index in arr) {
  // console.log('index', index);
  const value = arr[index];
  // console.log('value', value);
}

// for..of loop
for (const value of arr) {
  // console.log('value', value);
}

const obj = { a: { firstName: 'alice' }, b: 2, c: 3 };

for (const key in obj) {
  console.log('key', key);
  console.log('value', obj[key].firstName);
}
