class ImageController {
    constructor(service) {
        this.service = service;
    }
    
    getAllImages = async (req, res) => {
        const images = await this.service.getAllImages();
        return res.status(200).json({images});
    }

    saveImage = async (req, res) => {
        const { file } = req;
        await this.service.saveImage(file);

        return res.status(200).json({file});
    }
}


module.exports = ImageController;
