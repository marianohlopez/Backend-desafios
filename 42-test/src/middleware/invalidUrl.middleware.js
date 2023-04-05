import logger from "../lib/logger.js";

const invalidUrl = (req, res, next) => {
    logger.warn({
        method: req.method,
        url: req.url
    });
    res.status(404).render("routing-error");
};

export default invalidUrl;