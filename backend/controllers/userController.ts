import { RequestHandler } from "express";
import userService from "../services/userService";
import rescue from "express-rescue";

const create: RequestHandler = rescue(async (req, res) => {
    const userData = await userService.create(req.body);

    res.status(201).json(userData);
})

const getAll: RequestHandler = rescue(async (_req, res) => {
    const usersData = await userService.getAll();

    res.status(200).json(usersData);
})

export = {
    create,
    getAll,
}
