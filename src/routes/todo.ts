import type { Request, Response } from "express";

import type { Todo } from "../models/todo.model.ts";

const todos: Todo[] = [
	{
		id: 1,
		title: "Faire les courses",
		description: "Pomme, poire, lessive",
		priority: 2,
		updatedAt: Date.now(),
	},
	{
		id: 2,
		title: "Envoyer le courrier",
		description: "Urgent",
		priority: 3,
		updatedAt: Date.now(),
	},
	{
		id: 3,
		title: "Lire le journal",
		description: "Smashing magazine, sidebar.io, Hacker News",
		priority: 1,
		updatedAt: Date.now(),
	},
];

/*
 * GET todos listing.
 */
export const findAll = (req: Request, res: Response) => {
	console.log("Implement findAll", [req, res]);
	res.status(200).json(todos);
};

/*
 * GET todo by identifier.
 */
export const findById = (req: Request, res: Response) => {
	console.log("Implement findById", [req, res]);
	res.status(404).json({ error: "Not found" });
};

/*
 * Create a todo.
 */
export const addTodo = (req: Request, res: Response) => {
	console.log("Implement addTodo", [req, res]);
	res.status(201).end();
};

/*
 * Update a todo by its identifier.
 */
export const updateTodo = (req: Request, res: Response) => {
	console.log("Implement updateTodo", [req, res]);
	res.status(404).json({ error: "Not found" });
};

/*
 * Delete a todo
 */
export const deleteTodo = (req: Request, res: Response) => {
	console.log("Implement deleteTodo", [req, res]);
	res.status(204).end();
	return;
};
