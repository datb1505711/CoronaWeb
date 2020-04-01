// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "me",
//   host: "localhost",
//   database: "api",
//   password: "password",
//   port: 5432
// });

// export default pool;
const { Client } = require("pg");
const connectionString = "postgres://postgres:123456@localhost:5432/userlogin";
const client = new Client({
  connectionString: connectionString
});
// module.exports = "asdasdsa";
module.exports = new Client({
  connectionString: connectionString
});
