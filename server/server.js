const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const mime = require('mime-types');


const dir = './public';
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, dir),
    filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`)
  })

const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
    if ([ 'image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }},
    limits: {fileSize: 1024 * 1024 * 5}  // 10MB
});

if (!fs.existsSync(dir)) fs.mkdirSync(dir);


const app = express();

//app.use(express.static('public'));  // root 주소

app.use("/public", express.static('public'));  // /public 주소


app.post('/upload', upload.single("imageTest"), (req, res) => {
    console.log(req.file)
    res.json(req.file)
})


app.listen(8080, () => console.info("Server is running on port 8080"));