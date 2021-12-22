import { Request, Response } from 'express'

import { prisma } from '../../server';

export default async (request: Request, response: Response) => {
  const {id} = request.user;
  
  const userInformation = await prisma.user.findUnique({
    where: {
      id
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      lists: {
        select: {
          id: true,
          color: true,
          title: true,
          createdAt: true,        
          todos: {
            select: {
              id: true,
              title: true,
              check: true,
              createdAt: true,
              deadline: true,
              listID: false,
              list: false
            }
          }
        }
      },
      password: false,
    }
  });

  return response.status(200).json(userInformation);
}