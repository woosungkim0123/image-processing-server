const express = require('express');

class ImageRouter {
    constructor(imageMulterUtil, imageController) {
        this.router = express.Router()
        this.multerUtil = imageMulterUtil;
        this.controller = imageController;
        this.initRouter();
    }
    
    initRouter = () => {
        this.router.post('/', this.multerUtil.getUploadMiddleware().single('imageTest'), (req, res) => {
            console.log(req.file)
            res.json(req.file)
        });

        this.router.get('/', this.controller.getAllImages);
    }

    getRouter = () => {
        return this.router;
    }
}

module.exports = ImageRouter;

