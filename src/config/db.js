const Database = require('better-sqlite3');

let db = new Database(":memory:", { verbose: console.log });
db.pragma("journal_mode = WAL");

module.exports = db