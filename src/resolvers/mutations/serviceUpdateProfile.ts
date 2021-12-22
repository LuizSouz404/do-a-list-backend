import { Request, Response } from "express";
import { prisma } from "../../server";

export default async (request: Request, response:Response) => {
  const {name} = request.body;
  const {id} = request.user;

  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      name
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true
    }
  });

  return response.status(201).json(user);
}