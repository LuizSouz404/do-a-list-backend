import { Request, Response } from 'express';
import { prisma } from '../../server';

export default async (request: Request, response: Response) => {
  const {title, color} = request.body;
  const {id} = request.user;

  const user = await prisma.list.create({
    data: {
      title,
      color,
      userID: id
    },
    select: {
      id: true,
      title: true,
      color: true,
      createdAt: true,
    }
  });

  return response.status(201).json(user);
}