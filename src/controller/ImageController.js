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

    saveImageInfo = async (req, res) => {
        const { imageInfo } = req.body
        await this.service.saveImage(imageInfo);
        return res.status(200).json({file: imageInfo});
    }

    getPresignedUrl = async (req, res) => {
        try {
            const { contentTypes } = req.body; // 파일을 받아오는 것이 아닌 파일의 contentType만 받아옴
    
            if (!Array.isArray(contentTypes)) throw new Error('contentTypes must be an array');
            const presignedData = await Promise.all(
                contentTypes.map(async contentType => {
                    const imageKey = `${uuid()}.${mime.extension(contentType)}`;
                    const key = `raw/${imageKey}`;
                    const presigned = await getSignedUrl({key});
                    return { imageKey, presigned };
            }));
            return res.status(200).json(presignedData)
    
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}


module.exports = ImageController;
