const { getSignedUrl } = require("../aws");
const mime = require('mime');
const { v4: uuid } = require('uuid');

class ImageController {
    constructor(service) {
        this.service = service;
    }
    
    getAllImages = async (req, res) => {
        const images = await this.service.getAllImages();
        return res.status(200).json({images});
    }

    saveImage = async (req, res) => {
        await this.service.saveImage(req.file);
        return res.status(200).json({file: req.file});
    }
}


module.exports = ImageController;
