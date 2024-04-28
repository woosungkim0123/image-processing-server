
class ImageController {
    constructor(service) {
        this.service = service;
    }
    
    getAllImages = (req, res) => {
        const images = this.service.getAllImages();
        return res.status(200).json({images});
    }
}


module.exports = ImageController;
