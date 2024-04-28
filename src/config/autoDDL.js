const db = require("./db")

const autoDDL = () => {
    db.exec("CREATE TABLE images (id INTEGER PRIMARY KEY, name TEXT, url TEXT)")
    
    const insert = db.prepare("INSERT INTO images (name, url) VALUES ($name, $url)")

    const imagesData = [
        { name: "a.jpeg", url: "https://image1.com" },
        { name: "b.jpeg", url: "https://image2.com" },
        { name: "c.jpeg", url: "https://image3.com" }
    ];

    imagesData.forEach(data => {
        insert.run(data);
    });
}

module.exports = autoDDL