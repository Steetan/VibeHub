var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import { v4 as uuidv4 } from 'uuid';
import { validationResult } from '../../node_modules/express-validator/lib/validation-result.js';
import { generateJWT } from '../utils/generateJWT.js';
export const getMeInfo = (req, res) => {
    try {
        const token = String(req.query.token) || '';
        jwt.verify(token, `${process.env.JWT_SECRET}`, (err, decoded) => {
            if (err) {
                res.json({ error: 'Неверный токен' });
            }
            else {
                pool.query('SELECT * FROM users WHERE id = $1', [decoded.id], (error, results) => {
                    if (error)
                        throw error;
                    res.json(results.rows[0]);
                });
            }
        });
    }
    catch (error) {
        res.status(403).json({
            message: 'Нет доступа',
        });
    }
};
export const loginUser = (req, res) => {
    try {
        pool.query('SELECT id, name, fname FROM users WHERE email = $1 AND password = $2', [req.query.email, req.query.password], (error, results) => {
            if (error)
                throw error;
            results.rows.length
                ? res.status(200).json(generateJWT({
                    id: results.rows[0].id,
                    name: req.body.name,
                    email: req.query.email,
                    password: req.query.password,
                }))
                : res.status(403).json({ message: 'не удалось войти' });
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const deleteUser = (req, res) => {
    try {
        const token = String(req.query.token) || '';
        jwt.verify(token, `${process.env.JWT_SECRET}`, (err, decoded) => {
            if (err) {
                res.json({ error: 'Неверный токен' });
            }
            else {
                pool.query(`DELETE FROM users WHERE id = $1`, [decoded.id], (error, results) => {
                    if (error)
                        throw error;
                    res.status(200).json({
                        message: 'Пользователь был удален',
                    });
                });
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
export const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(403).json({ error: errors.array() });
    }
    const existingUser = yield pool.query('SELECT * FROM users WHERE email = $1', [req.body.email]);
    if (existingUser.rows.length > 0) {
        return res
            .status(400)
            .json({ success: false, message: 'Пользователь с таким именем уже существует' });
    }
    const userId = uuidv4();
    try {
        pool.query('INSERT INTO users (id, name, fname, password, email) VALUES ($1, $2, $3, $4, $5)', [userId, req.body.name, req.body.fname, req.body.password, req.body.email], (error, results) => {
            if (error)
                throw error;
            res.status(201).json({
                token: generateJWT({
                    id: userId,
                    name: req.body.name,
                    email: req.query.email,
                    password: req.query.password,
                }),
                name: req.body.name,
                fname: req.body.fname,
                email: req.body.email,
            });
        });
    }
    catch (error) {
        console.log(error);
    }
});
