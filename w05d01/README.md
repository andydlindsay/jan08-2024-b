# W05W01 - SQL Intro

### To Do
- [x] Introduction to RDBMS
- [x] The Relational Data Model (Tables, Columns, Rows)
- [x] `SELECT` Statements
- [x] Filtering and ordering
- [x] Joining tables
- [x] Grouping records
- [x] Aggregation functions SUM, MIN, MAX, COUNT, AVG
- [x] `LIMIT` and `OFFSET`

### Student Question
* Return the highest rated song(s) on each album

```sql
-- getting back the highest rating for a particular album
SELECT MAX(rating)
FROM songs
WHERE album_id = 5;

-- returns songs that match the specified rating
SELECT album_name, song_name, rating
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating = 4.5
ORDER BY album_name;

-- put the two together
SELECT album_name, song_name, rating
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating = (
  SELECT MAX(rating) 
  FROM songs 
  WHERE album_id = albums.id
)
ORDER BY album_name;
```









### SELECT Challenges

For the first 5 queries, we'll be using the `users` table.

![users table](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/w5d1-users.io.png)

1. List total number of users

```sql
SELECT COUNT(*) AS num_users
FROM users;
```

2. List users over the age of 18

```sql
SELECT *
FROM users
WHERE age > 18;
```

3. List users who are over the age of 18 and have the last name 'Barrows'

```sql
SELECT *
FROM users
WHERE age > 18 AND last_name = 'Barrows';
```

4. List users over the age of 18 who live in Canada sorted by age from oldest to youngest and then last name alphabetically

```sql
SELECT *
FROM users
WHERE age > 18 AND country = 'Canada'
ORDER BY age DESC, last_name ASC;
```

5. List users who live in Canada and whose accounts are overdue

```sql
SELECT *
FROM users
WHERE country = 'Canada' AND payment_due_date < 'February 5, 2024';

SELECT *, NOW()
FROM users
-- using the NOW function
WHERE country = 'Canada' AND payment_due_date < NOW();

SELECT *,
FROM users -- everything from the users table
WHERE country = 'Canada' AND payment_due_date < CURRENT_DATE;
```

For the rest of the queries, we'll be using the `albums` and `songs` tables.

![albums and songs](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/albums-and-songs.png)

6. List all albums along with their songs

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = album_id;
```

7. List all albums along with how many songs each album has

```sql
SELECT album_name, COUNT(songs.id)
FROM albums
JOIN songs ON albums.id = album_id
GROUP BY album_name;
```

8. Enhance previous query to only include albums that have more than 10 songs

```sql
SELECT album_name, COUNT(songs.id) AS num_songs
FROM songs
JOIN albums ON albums.id = album_id
GROUP BY album_name
HAVING COUNT(songs.id) > 10;
```

9. List ALL albums in the database, along with their songs if any

```sql
SELECT *
FROM albums
LEFT JOIN songs ON albums.id = album_id;
```

10. List ONLY the first 10 songs from the songs table

```sql
SELECT *
FROM songs
LIMIT 10;
```

### Useful Links
- [Top 10 Most Popular RDBMSs](https://www.c-sharpcorner.com/article/what-are-the-most-popular-relational-databases/)
- [Another Ranking of DBMSs](https://db-engines.com/en/ranking)
- [SELECT Queries Order of Execution](https://sqlbolt.com/lesson/select_queries_order_of_execution)
- [SQL Joins Visualizer](https://sql-joins.leopard.in.ua/)
