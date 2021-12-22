import { Request, Response } from "express";
import { prisma } from '../../server'

export default async(request: Request, response: Response) => {
  const { title, deadline: deadlineData } = request.body;
  const {id} = request.params;
  // const {id} = request.user;

  const list = await prisma.list.findFirst({
    where: {
      id
    }
  });

  if(!list) {
    throw new Error("Can't find list.")
  }

  const deadline = deadlineData === "" ? new Date() : new Date(deadlineData); 

  const todo = await prisma.todo.create({
    data: {
      title,
      deadline, 
      listID: list.id
    },
    include: {
      list: {
        include: {
          user: true
        }
      }
    }
  });

  return response.status(201).json({todo});    
}