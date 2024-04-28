const db = require("./db")

const autoDDL = () => {
    db.exec("CREATE TABLE images (id INTEGER PRIMARY KEY, name TEXT, url TEXT)")
    
    const insert = db.prepare("INSERT INTO images (name, url) VALUES ($name, $url)")

    for (let i = 0; i < 1000; i++) {
        const data = { name: i + 1 + ".png", url: ""}
        insert.run(data);
    }
}

module.exports = autoDDL