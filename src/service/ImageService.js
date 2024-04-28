class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    
    getAllImages = async () => {
        return await this.imageRepository.getAllImages();
    }

    saveImage = async (file) => {
        await this.imageRepository.saveImage(file);
    }
}

module.exports = ImageService;


