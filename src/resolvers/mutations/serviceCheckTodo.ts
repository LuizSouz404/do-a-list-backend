import { Request, Response } from "express";
import { prisma } from "../../server";

export default async (request: Request, response:Response) => {
  const {id} = request.params;

  const todo = await prisma.todo.findFirst({
    where: {
      id
    }
  })

  if(!todo) {
    return response.status(400).json({error: "Todo not found"})
  } 

  const user = await prisma.todo.update({
    where: {
      id
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

  return response.status(201).json(user);
}