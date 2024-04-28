const express = require('express');

class ImageRepository {
    constructor(db) {
        this.db = db;
    }
    
    getAllImages = () => {
        const select = this.db.prepare("SELECT * FROM images ORDER BY id DESC");
        const data = select.all();

        return data
    }

}

module.exports = ImageRepository;


