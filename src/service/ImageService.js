class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    
    getAllImages = async () => {
        return await this.imageRepository.getAllImages();
    }

    saveImage = async (imageInfo) => {
        await this.imageRepository.saveImage(imageInfo);
    }
}

module.exports = ImageService;


