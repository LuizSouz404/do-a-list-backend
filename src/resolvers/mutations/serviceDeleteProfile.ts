import { Request, Response } from "express";
import { prisma } from "../../server";

export default async(request: Request, response: Response) => {
  const {id} = request.user;

  await prisma.user.delete({
    where: {
      id
    }
  });

  return response.status(201).send()
}