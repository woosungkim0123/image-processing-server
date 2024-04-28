const db = require("./config/db");
const ImageController = require("./controller/ImageController");
const ImageRepository = require("./model/ImageRepository");
const ImageRouter = require("./router/ImageRouter");
const WebRouter = require("./router/WebRouter");
const ImageService = require("./service/ImageService");
const ImageMulterUtil = require("./util/ImageMulterUtil");

class Container {
    constructor() {
        this.imageMulterUtil = new ImageMulterUtil();
        this.db = db;
        
        this.imageRepository = new ImageRepository(this.db);
        this.imageService = new ImageService(this.imageRepository);
        this.imageController = new ImageController(this.imageService);
        this.imageRouter = new ImageRouter(this.imageMulterUtil, this.imageController);
        this.webRouter = new WebRouter();
    }

    getWebRouter = () => this.webRouter.getRouter();
    getImageRouter = () => this.imageRouter.getRouter();
    getImageController = () => this.imageController;
    getImageMulterUtil = () => this.imageMulterUtil;
}


module.exports = Container;