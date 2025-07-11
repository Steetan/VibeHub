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
            console.log(req.query);
            if (error)
                throw error;
            res.status(200).json(results.rows);
        });
    }
    catch (error) {
        console.log(error);
    }
};
