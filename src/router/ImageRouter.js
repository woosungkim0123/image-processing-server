const express = require('express');

class ImageRouter {
    constructor(imageMulterUtil, imageController) {
        this.router = express.Router()
        this.multerUtil = imageMulterUtil;
        this.controller = imageController;
        this.initRouter();
    }
    
    initRouter = () => {
        this.router.get('/', this.controller.getAllImages);
        this.router.post('/', this.controller.saveImageInfo);
        this.router.post('/presigned', this.controller.getPresignedUrl)
    }

    getRouter = () => {
        return this.router;
    }
}

module.exports = ImageRouter;

