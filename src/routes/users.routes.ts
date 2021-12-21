import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const usersRoutes = Router();
const prisma = new PrismaClient();

usersRoutes.post('/users', async (request, response) => {
  const { name, email, password } = request.body;

  const userExists = await prisma.user.findFirst({
    where: {
      email
    }
  });

  if(userExists) {
    return response.status(401).json({error: 'User already exists!'});
  }

  const result = await prisma.user.create({
    data: {
      name,
      email,
      password
    }
  })

  return response.status(201).json(result);
})

export { usersRoutes }