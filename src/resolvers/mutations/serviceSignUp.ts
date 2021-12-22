import { Request, Response } from 'express'

import { hash } from 'bcryptjs';
import { prisma } from '../../server';

export default async (request: Request, response: Response) => {
  const { name, email, password } = request.body;

  const userExists = await prisma.user.findFirst({
    where: {
      email
    }
  });

  if(userExists) {
    return response.status(400).json({error: 'User already exists!'});
  }

  const hashedPassword = await hash(password, 5);

  const result = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
      password: false,
      lists: true
    }
  })

  return response.status(201).json(result);
}