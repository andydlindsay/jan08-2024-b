const pg = require('pg');

const Client = pg.Client; // single connection to the db
// const Pool = pg.Pool; // collection of clients (5); managed

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const client = new Client(config);

const verb = process.argv[2];
const id = process.argv[3];
// console.log('verb', verb);

client.connect();

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;') 
      .then((results) => {
        console.log(results.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      });

    break;

  case 'edit':
    const newVillainName = process.argv[4];
    const editQuery = 'UPDATE movie_villains SET villain = $1 WHERE id = $2;';

    client.query(editQuery, [newVillainName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movieName = process.argv[4];

    const insertQuery = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';
    const valueArr = [villainName, movieName];

    client.query(insertQuery, valueArr)
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${villainName}`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain defeated!!');
        client.end();
      });
    break;

  default:
    console.log('please use a BREAD verb');
    client.end();
}





