import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from '../db.js'

export const getPreviews = (req: Request, res: Response) => {
	try {
		pool.query('SELECT * FROM videos', (error: Error, results: QueryResult) => {
			if (error) throw error
			res.status(200).json(results.rows)
		})
	} catch (error) {
		console.log(error)
	}
}

export const getVideoById = (req: Request, res: Response) => {
	try {
		pool.query(
			'SELECT * FROM videos WHERE id = $1',
			[req.query.look],
			(error: Error, results: QueryResult) => {
				if (error) throw error
				res.status(200).json(results.rows[0])
			},
		)
	} catch (error) {
		console.log(error)
	}
}

export const getVideoBySearch = (req: Request, res: Response) => {
	try {
		pool.query(
			"SELECT * FROM videos WHERE title LIKE '%' || $1 || '%'",
			[req.query.search],
			(error: Error, results: QueryResult) => {
				if (error) throw error
				res.status(200).json(results.rows)
			},
		)
	} catch (error) {
		console.log(error)
	}
}

export const addVideo = (req: Request, res: Response) => {
	console.log(req.body)
	try {
		pool.query(
			"INSERT INTO videos (id, link, title, preview, category, description) VALUES ('111', $1, $2,$3, $4, $5)",
			[
				req.file?.originalname,
				req.body.title,
				req.body.imageUrl,
				req.body.category,
				req.body.description,
			],
			(error: Error, results: QueryResult) => {
				if (error) throw error
				res.status(201)
			},
		)
	} catch (error) {
		console.log(error)
	}
}
