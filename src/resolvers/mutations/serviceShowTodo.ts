import { Request, Response } from 'express'

import { prisma } from '../../server';

export default async (request: Request, response: Response) => {
  const {id} = request.params;
  
  const todoInformation = await prisma.todo.findUnique({
    where: {
      id
    }
  });

  return response.status(200).json(todoInformation);
}