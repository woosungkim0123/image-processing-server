const express = require('express');

class ImageService {
    constructor(imageRepository) {
        this.imageRepository = imageRepository;
    }
    
    getAllImages = () => {
        return this.imageRepository.getAllImages();
    }
}

module.exports = ImageService;


