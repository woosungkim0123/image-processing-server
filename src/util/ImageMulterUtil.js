const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const { v4: uuid } = require('uuid');
const sharp = require('sharp');
const multerS3 = require('multer-s3');
const { s3 } = require('../aws');

class ImageMulterUtil {
    constructor() {
        this.dir = process.env.ROOT_DIR + `/public/images`;
        this.makeDir();
        this.storage = this.initStorage();
        this.upload = this.initUploadMiddleware();
    }
  
    getUploadMiddleware() {
        return this.upload;
    }

    makeDir() {
        if (!fs.existsSync(this.dir)) fs.mkdirSync(this.dir);
    }

    initStorage() {
        return multerS3({
            s3: s3,
            bucket: process.env.AWS_BUCKET_NAME,
            acl: 'public-read',
            key: (req, file, cb) => cb(null, `raw/${uuid()}.${mime.extension(file.mimetype)}`)
        });
    }

    initUploadMiddleware() {
        return multer({ 
            storage: this.storage, 
            fileFilter: (req, file, cb) => {
                if (['image/png', 'image/jpeg', 'image/jpg'].includes(file.mimetype)) {
                    cb(null, true);
                } else {
                    cb(new Error('Only image files are allowed!'), false);
                }
            },
            limits: { fileSize: 1024 * 1024 * 5 } // 5MB
        })
    }

    async processImage(req, res, next) {
        if (req.file) {
            try {
                const outputPath = path.join(this.dir, `${path.parse(req.file.filename).name}_resized${path.extname(req.file.filename)}`);
                await sharp(req.file.path)
                    .resize(400)
                    .toFile(outputPath);

                req.resizedFile = {
                    path: outputPath,
                    filename: path.basename(outputPath),
                    originalName: req.file.originalname,
                    size: req.file.size
                };

                next();
            } catch (error) {
                next(error);
            }
        } else {
            next(new Error('No file uploaded!'));
        }
    }
}
  
module.exports = ImageMulterUtil;