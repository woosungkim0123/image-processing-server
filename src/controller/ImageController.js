class ImageController {
    constructor(service) {
        this.service = service;
    }
    
    getAllImages = async (req, res) => {
        const images = await this.service.getAllImages();
        return res.status(200).json({images});
    }

    saveImage = async (req, res) => {
        await this.service.saveImage(req.resizedFile);
        return res.status(200).json({file: req.resizedFile});
    }
}


module.exports = ImageController;
