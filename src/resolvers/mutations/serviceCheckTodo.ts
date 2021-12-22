import { Request, Response } from "express";
import { prisma } from "../../server";

export default async (request: Request, response:Response) => {
  const {idTodo} = request.params;

  const todo = await prisma.todo.findUnique({
    where: {
      id: idTodo
    }
  })

  if(!todo) {
    return response.status(400).json({error: "Todo not found"})
  } 

  const user = await prisma.todo.update({
    where: {
      id: idTodo
    },
    data: {
      check: !todo.check
    },
    include: {
      list: {
        include: {
          user: true
        }
      }
    }
    
  });

  return response.status(201).json({user});
}