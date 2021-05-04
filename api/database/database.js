var sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database("database/db.sqlite", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.')
  db.run(`CREATE TABLE user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text
      )`,
      (err) => {
        if (!err) {
          var insert = 'INSERT INTO user (name) VALUES (?)'
          db.run(insert, ["admin"])
        }
      })
})


module.exports = db