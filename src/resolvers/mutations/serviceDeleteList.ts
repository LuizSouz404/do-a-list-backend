import { Request, Response } from "express";
import { prisma } from "../../server";

export default async(request: Request, response: Response) => {
  const {id} = request.params;

  await prisma.list.delete({
    where: {
      id
    }
  });

  return response.status(201).send()
}