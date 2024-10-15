const mysql = require("mysql2");
const dbConfig = require("./db.config.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
  
});

connection.connect(error => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  } else {
    console.log("Conexión exitosa a la base de datos.");
    connection.end();
  }
});