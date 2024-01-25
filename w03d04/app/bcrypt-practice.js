const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10, (err, salt) => {
//   console.log('async salt', salt);
// });

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('salt in promise', salt);
//   });

const salt = bcrypt.genSaltSync();
console.log('sync salt:', salt);

const plaintextPassword = 'monkeyFuzz';

const hash = bcrypt.hashSync(plaintextPassword, 10);

console.log('sync hash:', hash);

const dbHash = '$2a$10$3kZb.HZlvJ1QEXh/mZRXEeG89wqFnE/jp/St5dLsfbuATYUjqYllC';

// const result = bcrypt.compareSync('monkeyFuzz', dbHash);

// console.log('result', result);
