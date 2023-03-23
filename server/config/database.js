import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost",
  user: "allan",
  password: "allan123",
  database: "Hotelista_DB",
});

export default conn;
