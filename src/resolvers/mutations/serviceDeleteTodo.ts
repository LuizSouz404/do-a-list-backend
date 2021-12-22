import { Request, Response } from "express";
import { prisma } from "../../server";

export default async(request: Request, response: Response) => {
  const {idTodo} = request.params;

  await prisma.todo.delete({
    where: {
      id: idTodo
    }
  });

  return response.status(201).send()
}