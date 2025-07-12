import { pool } from '../db.js';
export const getPreviews = (req, res) => {
    try {
        pool.query('SELECT * FROM videos', (error, results) => {
            if (error)
                throw error;
            res.status(200).json(results.rows);
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const getVideoById = (req, res) => {
    try {
        pool.query('SELECT * FROM videos WHERE id = $1', [req.query.look], (error, results) => {
            if (error)
                throw error;
            res.status(200).json(results.rows[0]);
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const getVideoBySearch = (req, res) => {
    try {
        pool.query("SELECT * FROM videos WHERE title LIKE '%' || $1 || '%'", [req.query.search], (error, results) => {
            if (error)
                throw error;
            res.status(200).json(results.rows);
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const addVideo = (req, res) => {
    var _a;
    console.log(req.body);
    try {
        pool.query("INSERT INTO videos (id, link, title, preview, category, description) VALUES ('111', $1, $2,$3, $4, $5)", [
            (_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname,
            req.body.title,
            req.body.imageUrl,
            req.body.category,
            req.body.description,
        ], (error, results) => {
            if (error)
                throw error;
            res.status(201);
        });
    }
    catch (error) {
        console.log(error);
    }
};
