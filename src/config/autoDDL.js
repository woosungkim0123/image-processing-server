const db = require("./db")

const autoDDL = () => {
    db.exec("CREATE TABLE images (id INTEGER PRIMARY KEY, name TEXT, url TEXT)")
}

module.exports = autoDDL