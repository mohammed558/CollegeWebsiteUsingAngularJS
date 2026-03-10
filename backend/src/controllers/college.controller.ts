import { Request, Response } from 'express';
import { prisma } from '../config/prisma';
export const getDepartments = async (req: Request, res: Response) => {
    const depts = await prisma.department.findMany({ include: { courses: true } });
    res.json(depts);
};
export const getEvents = async (req: Request, res: Response) => {
    const events = await prisma.event.findMany();
    res.json(events);
};
export const createDepartment = async (req: Request, res: Response) => {
    const { name } = req.body;
    const dept = await prisma.department.create({ data: { name } });
    res.json(dept);
};