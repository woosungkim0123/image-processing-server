const multer = require('multer');
const fs = require('fs');
const mime = require('mime');
const { v4: uuid } = require('uuid');

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
        return multer.diskStorage({
            destination: (req, file, cb) => cb(null, this.dir),
            filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`)
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
}
  
module.exports = ImageMulterUtil;