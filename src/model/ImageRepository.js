class ImageRepository {
    constructor(db) {
        this.db = db;
    }
    
    getAllImages = async () => {
        const select = await this.db.prepare("SELECT * FROM images ORDER BY id DESC");
        const data = select.all();
        return data
    }

    saveImage = async (file) => {
        console.log(file)
        const filename = file.key.replace('raw/', '');
        const insert = await this.db.prepare("INSERT INTO images (name, url) VALUES ($name, $url)")
        insert.run({ name: filename, url: file.location });
    }

}

module.exports = ImageRepository;


