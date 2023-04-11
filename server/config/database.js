import mysql from "mysql2";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sl253785!",
  database: "Hotelista_DB",
});

export default conn;
