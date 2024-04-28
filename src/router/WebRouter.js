const express = require('express');

class WebRouter {
    constructor() {
        this.router = express.Router()
        this.initRouter();
    }
    
    initRouter = () => {
        this.router.get('/', this.getIndexPage);
    }

    getIndexPage = (req, res) => {
        res.render("index");
    }

    getRouter = () => {
        return this.router;
    }
}

module.exports = WebRouter;